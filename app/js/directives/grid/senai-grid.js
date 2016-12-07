(function() {
'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('SenaiGridModule', [])
        .component('senaiGrid', {
            templateUrl: 'app/js/directives/grid/senai-grid.html',
            transclude: true,
            controller: GridController,
            bindings: {
                provider: '<',
                columns: '=',
                disableRemove: '<',
                disableEdit: '<',
                disableSort: '<',
                enableSelection: '<',
                rowClass: '@'
            }
        });

    GridController.$inject = ['$parse', '$scope'];
    function GridController($parse, $scope) {
        var $ctrl = this;
        
        $ctrl.selectedRowIndex = -1;

        $ctrl.addColumn = addColumn;
        $ctrl.getValue = getValue;
        $ctrl.selectRow = selectRow;
        $ctrl.edit = edit;
        $ctrl.remove = remove;
        $ctrl.sort = sort;

        var _currentSortedColumn = null;

        $ctrl.$onInit = function() {
            // $ctrl.columns = [];
        };

        function addColumn(column) {
            $ctrl.columns.push(column);
        }

        function getValue(item, column) {
            var value = column.property ? $parse(column.property)(item) : null;

            return value;
        }

        function selectRow(rowIndex) {
            if ($ctrl.enableSelection) {
                $ctrl.selectedRowIndex = rowIndex;

                $scope.$emit('senaiGrid:select', {
                    rowIndex: rowIndex,
                    item: $ctrl.provider[rowIndex]
                });
            }
        }

        function edit(rowIndex) {
            $scope.$emit('senaiGrid:edit', {
                rowIndex: rowIndex,
                item: $ctrl.provider[rowIndex]
            });
        }

        function remove(rowIndex) {
            $scope.$emit('senaiGrid:remove', {
                rowIndex: rowIndex,
                item: $ctrl.provider[rowIndex]
            });
        }

        function sort(column) {
            if (column && column.property && !column.disableSort) {
                if (_currentSortedColumn && _currentSortedColumn !== column) {
                    _currentSortedColumn.sortOrder = null;
                }

                _currentSortedColumn = column;

                switch (_currentSortedColumn.sortOrder) {
                    case 'asc':
                        _currentSortedColumn.sortOrder = 'desc';
                        break;
                    case 'desc':
                        _currentSortedColumn.sortOrder = null;
                        break;
                    default:
                        _currentSortedColumn.sortOrder = 'asc';
                        break;
                }

                $scope.$emit('senaiGrid:sort', _currentSortedColumn);
            }
        }
    }
})();
(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('ClientesController', ClientesController);

    ClientesController.$inject = ['$scope', '$log'];
    function ClientesController($scope, $log) {
        var vm = this;

        vm.titulo = 'Lista de Clientes';
        vm.listaClientes = [
            {
                id: 1, 
                pessoa: { 
                    nome: 'Fulano', 
                    dataNascimento: moment({ year: 1985, month: 2, day: 5}).subtract({month: 5}).toDate() 
                }
            },
            {
                id: 2, pessoa: { nome: 'Beltrano', dataNascimento: new Date(1986, 3, 10) }
            },
            {
                id: 3, pessoa: { nome: 'Ciclano', dataNascimento: new Date(1981, 2, 5) }
            },
            {
                id: 4, pessoa: { nome: 'Teste', dataNascimento: new Date(1988, 8, 16) }
            }
        ];

        activate();

        ////////////////

        function activate() {
            $scope.$on('senaiGrid:sort', onSenaiGridSort);
            $scope.$on('senaiGrid:remove', onSenaiGridRemove);
        }

        function onSenaiGridSort(event, column) {
            $log.debug('Coluna: ' + column.property +
                ' - Ordenação: ' + column.sortOrder);
        }

        function onSenaiGridRemove(event, gridData) {
            vm.listaClientes.splice(gridData.rowIndex, 1);
        }
    }
})();
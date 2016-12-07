(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('ClientesController', ClientesController);

    ClientesController.$inject = ['$sce'];
    function ClientesController($sce) {
        var vm = this;

        vm.titulo = 'Lista de Clientes';
        vm.listaClientes = [
            {
                id: 1, pessoa: { nome: 'Fulano', dataNascimento: new Date(1985, 3, 23) }
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
        vm.gridColumns = [
            { property: 'id', description: $sce.trustAsHtml('<i>Código</i>') },
            { property: 'pessoa.nome', description: $sce.trustAsHtml('Nome') },
            { property: 'pessoa.dataNascimento', description: $sce.trustAsHtml('Data de Nascimento') }
        ];

        activate();

        ////////////////

        function activate() { }
    }
})();
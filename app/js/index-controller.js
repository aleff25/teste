angular.module('MyApp')
    .controller('IndexController', IndexController);

/* @Inject */
function IndexController($rootScope, $scope, $timeout, $filter, SenaiSecurityService) {
    var vm = this;

    vm.variavelTeste = 'IndexController';
    
    $rootScope.nomeUsuarioLogado = 'Joaquim';

    $scope.listaClientes = [
        {name: 'Ciclano'},
        {name: 'Fulano'},
        {name: 'Beltrano'}
    ];

    $scope.addCliente = function() {
        console.log('function add');
    };

    $scope.user = {
        login: 'usuario'
    };

    vm.atualizarMensagemLogin = function(usuario) {
        $scope.mensagemLogin = 'Olá ' + usuario;
    };

    vm.atualizarMensagemLogin($scope.user.login);

    vm.doLogin = function ($event) {
        SenaiSecurityService.doLogin($scope.user);
    };

    vm.clientes = [
        { nome: 'Maria', nascimento: new Date(1990, 9, 13) },
        { nome: 'André', nascimento: new Date(1987, 0, 10) }
    ];

    var filtroData = $filter('date');

    console.log(
        filtroData(vm.clientes[0].nascimento,
            'dd/MM/yyyy'));

    $scope.listaEmails = [
        'teste@email.com',
        'asdf@gmail.com'
    ];

    $scope.$watch('listaEmails', watchCollectionListaEmails);

    function watchCollectionListaEmails(novoValor) {
        // console.log('Mudou a lista de e-mails.' + novoValor);
    }

    $scope.$watch('pessoa', watchPessoa, true);

    function watchPessoa(pessoa) {
        if (pessoa) {
            console.log(pessoa.nome);
        }
    }
}
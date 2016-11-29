angular.module('MyApp')
    .service('SenaiSecurityService', SenaiSecurityService);

function SenaiSecurityService($timeout, SenaiAlertService) {
    var loggedUser = null;

    this.doLogin = doLogin;
    this.getLoggedUser = getLoggedUser;

    function doLogin(user) {
        if (user.login === 'usuario' && user.password === '1234') {
            $timeout(function () {
                loggedUser = user;
                SenaiAlertService.showOk('Login realizado com sucesso!');
            }, 3000);
        } else {
            SenaiAlertService.showError('Acesso negado!');
        }
    }

    function getLoggedUser() {
        return loggedUser;
    }
}
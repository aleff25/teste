angular.module('MyApp')
    .service('SenaiAlertService', SenaiAlertService);

function SenaiAlertService(growl, TTL_WARNING) {
    this.showOk = showOk;
    this.showError = showError;

    function showOk(msg) {
        growl.success(msg);
    }

    function showError(msg) {
        growl.warning(msg);
    }
}
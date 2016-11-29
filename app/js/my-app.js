angular.module('MyApp', [
    'ngMessages', 
    'angular-growl', 
    'SenaiUppercaseParserDirective',
    'SenaiInputTextDirective'])
    .constant('TTL_WARNING', 6000)
    .value('MeuValor', 200)
    .config(config);

function config(growlProvider, TTL_WARNING) {
    growlProvider.globalTimeToLive({
        success: 1000,
        warning: TTL_WARNING,
        error: -1,
        info: 4000
    });
}
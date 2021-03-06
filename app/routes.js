'use strict';

angular.module('ngStarterKit')

.config(['$routeProvider',
         function($routeProvider) {
    /* Handle route on location path is '/' */
    $routeProvider.when('/', {
        template: '<dashboard></dashboard>'
    });

    /* Handle route on location path is '/chat' */
    $routeProvider.when('/chat', {
        template: '<chatbox></chatbox>'
    });
}]);
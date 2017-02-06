'use strict';

angular.module('ngStarterKit')

.config(['$routeProvider',
         function($routeProvider) {
    /* Handle route on location path is '/' */
    $routeProvider.when('/', {
        template: '<dashboard></dashboard>'
    });
}]);
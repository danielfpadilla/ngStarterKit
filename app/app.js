'use strict';

/* Wait for all resources to be downloaded */
angular
    .element(document)
    .ready(function() {
        /**
        * ngStarterKit Module
        *
        * Description:
        *   A simple boilerplate for angularjs developers
        */
        angular.module('ngStarterKit', [
                'ngRoute',
                /* Directives */
                'directives.chatbox',

                /* Modules */
                'modules.dashboard'
            ])
            .config(['$routeProvider',
                     function($routeProvider) {
                $routeProvider.otherwise({ redirectTo : '/' });
            }]);

        /* Start the angular app */
        angular.bootstrap(document, ['ngStarterKit']);
    });
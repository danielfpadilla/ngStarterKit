'use strict';

/**
* ngStarterKit Module
*
* Description:
*   A simple boilerplate for angularjs developers
*/
angular.module('ngStarterKit', [
        /* Sub Modules */
        // Module for routes
        'ngRoute',

        // Module for angular material components
        'ngMaterial',

        /* Custom Modules */
        'components.chatbox',
        'components.dashboard'
    ])
    .config(['$routeProvider',
                function($routeProvider) {
        $routeProvider.otherwise({ redirectTo : '/' });
    }]);
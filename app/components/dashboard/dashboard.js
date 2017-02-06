'use strict';

angular.module('components.dashboard')

/*
    Usage:
        <dashboard></dashboard>
 */
.component('dashboard', {
    templateUrl: 'app/components/dashboard/dashboard.html',

    controller: [
        function DashboardCtrl() {
            this.title = 'DashboardCtrl';

        }
    ]
});
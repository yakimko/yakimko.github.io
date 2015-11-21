'use strict';

var app = angular.module('app', [
    'ngRoute',
    'ngDragDrop'
]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html'
        })
        .when('/demo', {
            templateUrl: 'views/demo.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

"use strict";

let app = angular.module("app", ["ngRoute"])
    .constant("FBURL", "https://stargazer-b6f53.firebaseio.com");

app.config(($routeProvider) => {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/login',
            controller: 'UserController'
        })
        .when('/list-view', {
            templateUrl: 'partials/list',
            controller: 'ListController'
        })
        .when('/upload-view', {
            templateUrl: 'partials/upload',
            controller: 'UploadController'
        })
        .otherwise('/');
});
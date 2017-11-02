"use strict";
//https://www.npmjs.com/package/exif allows you to get photo data

let app = angular.module("app", ["ngRoute"])
    .constant("FBURL", "https://stargazer-b6f53.firebaseio.com");
app.config(($routeProvider) => {
    $routeProvider
        .when('/login', {
            templateUrl: 'partials/login',
            controller: 'UserController'
        })
        .when('/list', {
            templateUrl: 'partials/list',
            controller: 'ListController'
        })
        .when('/upload', {
            templateUrl: 'partials/upload',
            controller: 'UploadController'
        })
        .otherwise('/login');
});
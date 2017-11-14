'use strict';

app.controller("UserController", function($scope, $window, UserFactory, APIFactory, $location) { 
  //Use scope to create a picture of the day for the login page.
  APIFactory.getPOD()
  .then((url)=>{
    $scope.bg = url;
  });

  $scope.account = {
    name: "",
    email: "",
    password: ""
  };

  $scope.register = () => {
    UserFactory.createUser($scope.account.name, $scope.account.email, $scope.account.password)
    .then((data)=>{
      console.log(`data`, data);
      localStorage.setItem('name', $scope.account.name)
      localStorage.setItem('token', data.data.token)
      $location.url('/list');
    })
  };

  $scope.login = () => {
    UserFactory.loginUser($scope.account)
    .then((data) => {
      console.log(`data`, data);
      localStorage.setItem('name', $scope.account.name)
      localStorage.setItem('token', data.data.token)
      $location.url('/list');
    })
    .catch((err)=>{
      console.log(`err in login`, err);
    })
  };
});
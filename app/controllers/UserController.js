'use strict';
//Use scope to create a picture of the day for the login page.
app.controller("UserController", function($scope, $window, UserFactory, APIFactory) { 
  APIFactory.getPOD()
  .then((url)=>{
    $scope.bg = url;
  });

  $scope.account = {
    email: "",
    password: ""
  };

  $scope.register = () => {
    UserFactory.createUser($scope.account)
    .then( (userData) => {
      $scope.login();
    });
  };

  $scope.login = () => {
    UserFactory.loginUser($scope.account)
    .then( (userData) => {
      $window.location.href = '#!/list';
    });
  };
});
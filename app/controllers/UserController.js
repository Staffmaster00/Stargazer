'use strict';
//Use scope to create a picture of the day for the login page.
app.controller("UserController", function($scope, $window, UserFactory, APIFactory) { 
  APIFactory.getPOD()
  .then((url)=>{
    console.log(`url`, url);
    $scope.bg = url;
    console.log(`scope`, $scope.bg);
  });

  $scope.account = {
    email: "",
    password: ""
  };

  $scope.register = () => {
    console.log("Register clicked.");
    UserFactory.createUser($scope.account)
    .then( (userData) => {
      console.log("User Registered.", userData);
      $scope.login();
    });
  };

  $scope.login = () => {
    UserFactory.loginUser($scope.account)
    .then( (userData) => {
      console.log("userData", userData);
      $window.location.href = '#!/list';
    });
  };
});
'use strict';

app.controller("NavController", function ($scope, $window, UserFactory, $location) {
  $scope.toUpload = () => {
    $window.location.href = '#!/upload';
  }

  $scope.toList = () => {
    $window.location.href = '#!/list';
  }

  $scope.logout = () => {
    UserFactory.logoutUser()
    $location.url('/login');
  }
});
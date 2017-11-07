'use strict';

app.controller("ListController", function ($scope, $window, UserFactory) {
  $scope.toUpload = () => {
    $window.location.href = '#!/upload';
  }

  $scope.toList = () => {
    $window.location.href = '#!/list';
  }

  $scope.logout = () => {
    UserFactory.logoutUser()
  }
});
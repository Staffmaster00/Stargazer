'use strict';
//TODO: Allow user to search for their location


app.controller("ListController", function($scope, $window, UserFactory) {
  $scope.toUpload = () => {
    $window.location.href = '#!/upload';
  }
});
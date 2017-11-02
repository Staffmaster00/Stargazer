'use strict';
//TODO: Allow user to search for their location


app.controller("ListController", function($rootScope, $scope, $window, FBFactory) {
  $rootScope.toUpload = () => {
    $window.location.href = '#!/upload';
  }

  $scope.displayList = () => {
    console.log(`displayList runs`);
    FBFactory.getList()
    // .then(()=>{});
  }
});
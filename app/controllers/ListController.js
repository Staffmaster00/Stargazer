'use strict';
//TODO: Allow user to search for their location
//need to put photos to scope

app.controller("ListController", function($rootScope, $scope, $window, MongoFactory) {
  $rootScope.toUpload = () => {
    $window.location.href = '#!/upload';
  }//rootScope lets us use this for the navbar and anywhere else.

  $rootScope.displayList = () => {
    console.log(`displayList runs`);
    MongoFactory.getList()
    .then((photos)=>{
      console.log(`photos`, photos);
    });
  }
});
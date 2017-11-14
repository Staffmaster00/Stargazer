'use strict';

app.controller("ListController", function($rootScope, $scope, $window, PhotoFactory) {
  $rootScope.displayList = () => {
    console.log(`displayList runs`);
    $location.url('/list')
    console.log(`get list ran in display list`)
    PhotoFactory.getList()
      .then((photos) => {
        console.log(`photos in displaylist`, photos);
        $scope.photos = photos;
      });
  }
});
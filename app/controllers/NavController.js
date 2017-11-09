'use strict';

app.controller("NavController", function ($rootScope, $scope, $window, UserFactory, $location, PhotoFactory) {
  $scope.toUpload = () => {
    $window.location.href = '#!/upload';
  }

  $scope.logout = () => {
    UserFactory.logoutUser()
    $location.url('/login');
  }

  $scope.displayList = () => {
    console.log(`displayList runs`);
    $location.url('/list')
    console.log(`get list ran in display list`)
    PhotoFactory.getList()
      .then((photos) => {
        console.log(`photos in displaylist`, photos);
        $rootScope.photos = photos;
      });
  }
});
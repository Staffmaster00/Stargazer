'use strict';

app.controller("ListController", function($scope, $window, PhotoFactory, UserFactory) {
  let uid = UserFactory.getUser();
  console.log(`uid in listcontroller`, uid);
  $scope.getOne = PhotoFactory.getOne(photoId);
  $scope.getUserPhoto = PhotoFactory.getUserPhoto(photoId);
  $scope.getUserPhotos = PhotoFactory.getUserPhotos(uid);
});
'use strict';

app.controller("UploadController", function($scope, $window, FBCreds, PhotoFactory, UserFactory) {
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var filesRef = storageRef.child('files');
  let downloadURL = null;
  $scope.uploadFile = function(file) {
    console.log(`location name?`, localStorage.name);
    return storageRef.child(file.name).put(file)
    .then( (data) => {
      downloadURL = data.downloadURL;
      PhotoFactory.postPhotoObj(data.downloadURL, localStorage.name)
    });
  };
})  
    
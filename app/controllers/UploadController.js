'use strict';
//project factory = image upload.
app.controller("UploadController", function($scope, $window, FBFactory, FBCreds) {
  
  // Create a Firebase Storage reference
  var storage = firebase.storage();
  var storageRef = storage.ref();
  console.log(`storageref`, storageRef);
  var filesRef = storageRef.child('files');
  
  $scope.uploadFile = function(file) {
  console.log("Let's upload a file!");
  console.log($scope.file);
  return storageRef.child(file.name).put(file)
    .then( (data) => {
      console.log(`data`, data);
      var downloadURL = data.downloadURL;
      console.log(downloadURL)
      //you will get url of snapshot
    });
  }
})  
    
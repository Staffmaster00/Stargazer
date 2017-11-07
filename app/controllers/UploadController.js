'use strict';
//project factory = image upload.
app.controller("UploadController", function($rootScope, $scope, $window, FBCreds, MongoFactory, UserFactory) {
  //take url, push it to an object or array you then save to mongo and use again later to display
  //for each user, may have to drop the array afterward?
  //Create a Firebase Storage reference
  //need currentUser id
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var filesRef = storageRef.child('files');
  let downloadURL = null;
  $scope.uploadFile = function(file) {
    return storageRef.child(file.name).put(file)
    .then( (data) => {
      // let photoArray = [];     
      downloadURL = data.downloadURL;
      let currentUserId = UserFactory.getUser()
      // console.log(`downloadurl`, downloadURL);
      // photoArray.push(downloadURL);
      // $rootScope.photoList = photoArray;
      //you will get url of snapshot
      MongoFactory.postPhotoObj(data.downloadURL, currentUserId)
    });
  };
})  
    
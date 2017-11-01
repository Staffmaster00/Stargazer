'use strict';
// TODO: Refactor for the Back End
app.factory("FBFactory", function($q, $http, FBURL, FBCreds) {

  let postPhoto = (photo) => {
    return $q((resolve, reject) => {
      $http.post(`${FBURL}photos.json`, 
        angular.toJson(photo))
      .then((photoPost) => {
        resolve(photoPost);
      })
      .catch((err) => {
        reject(err)
      });
    });
  };

  return { postPhoto };
});
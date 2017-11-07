'use strict';
// TODO: Refactor for the Back End
app.factory("MongoFactory", function ($q, $http, FBCreds) {
//maybe just need the mongo stuff seems like it handles these things.
  let createPhotoObj = (photoUrl, id) => {
    return $q((resolve, reject) => {
      resolve(
        photoObj = {
          url: photoUrl,
          userId: id
        })
        .catch((err) => {
          reject(err)
      });
    });
  };

  let postPhotoObj = (photoUrl, id) => {
    return $q((resolve, reject) => {
      createPhotoObj(photoUrl, id)
      .then((photoObj) => {
        $http.post(`some mongo url and such`, angular.toJson(photoObj))
      })
      .then((submittedPhoto) => {
        resolve(submittedPhoto);
      })
      .catch((err) => {
        reject(err)
      });
    });
  };
  let getOne = (url) => {//for when a user clicks on a photo in a list
    return $q((resolve, reject) => {
      $http.get(`${url}`)
      .then((list) => {
        resolve(list);
      })
      .catch((err) => {
        console.log("Error in MongoFactory getOne", err);
        reject(err);
      });
    });
  };
  
  // db.collection.find(<query>).limit(<number>)example for limiting amount returned
  let getList = () => {//for when a user wants to see all photos up to 20
    console.log(`getList in MongoFactory runs`);
    return $q((resolve, reject) => {
      $http.get(`http://localhost:27017/list`)
        .then((list) => {
          resolve(list);
        })
        .catch((err) => {
          console.log("Error in MongoFactory getList", err);
          reject(err);
        });
    });
  };

  let getUserPhoto = (url, id) => {//for when a user wants to see their photos
    return $q((resolve, reject) => {
      $http.get(`${url}`)//need user id for individual photos
        .then((list) => {
          resolve(list);
        })
        .catch((err) => {
          console.log("Error in MongoFactory getOne", err);
          reject(err);
        });
    });
  };

  return { postPhotoObj, getOne, getList, getUserPhoto };
});
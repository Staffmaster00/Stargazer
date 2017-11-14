'use strict';
// TODO: Refactor for the Back End
app.factory("PhotoFactory", function ($q, $http, FBCreds) {
//maybe just need the mongo stuff seems like it handles these things.
  let createPhotoObj = (photoUrl, name) => {
    console.log(`photoUrl`, photoUrl);
    return $q((resolve, reject) => {
      let photoObj = {
        reference: photoUrl,
        userName: name
      };
      console.log(`photoObj after adding stuff`, photoObj);
      resolve(photoObj)
      });
  };
//take down names and contact info

  let postPhotoObj = (photoUrl, name) => {
      createPhotoObj(photoUrl, name)
      .then((photoObj) => {
        $http({
          method: 'POST',
          url: `http://localhost:27017/upload`,
          data: photoObj
        })
      })
  };

  let getOne = (url) => {//for when a user clicks on a photo in a list
    return $q((resolve, reject) => {
      $http.get(`${url}`)
      .then((list) => {
        resolve(list);
      })
      .catch((err) => {
        console.log("Error in PhotoFactory getOne", err);
        reject(err);
      });
    });
  };
  
  // db.collection.find(<query>).limit(<number>)example for limiting amount returned
  let getList = () => {//for when a user wants to see all photos up to 20
    console.log(`getList in PhotoFactory runs`);
    return $q((resolve, reject) => {
      $http({
        method: "GET",
        url: "http://localhost:27017/list"
      })
      .then((list) => {
        let photos = [];
        list.data.forEach((photoObj)=>{
          photos.push(photoObj.reference)
        });
        console.log(`photos in getlist`, photos);
        resolve(photos);
      })
      .catch((err) => {
        console.log("Error in PhotoFactory getList", err);
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
          console.log("Error in PhotoFactory getOne", err);
          reject(err);
        });
    });
  };

  return { postPhotoObj, getOne, getList, getUserPhoto };
});
'use strict';
//TODO: Modernize with userAuth from passport?
app.factory("UserFactory", function($q, $http, FBURL, FBCreds) {

    var config = {
        apiKey: FBCreds.key,
        authDomain: FBCreds.authDomain,
        storageBucket: FBCreds.storageBucket
    };

    firebase.initializeApp(config);

    let currentUser = null;

    let getUser = () => {//get user id based on name or email.
      return $http({
        method: "GET",
        url: "http://localhost:27017/user"        
      })
      .then((users)=>{
        if (localStorage.token === users.token){
          currentUser = users._id
        }
      })
    };

    let ensureAuthenticated = (token) => {
      return $http({
        method: 'GET',
        url: 'http://localhost:27017/user',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token }
      })
    }

    let createUser = (name, email, password) => {
      console.log(`createUser ran`);
        return $http({
          method: 'POST',
          url: 'http://localhost:27017/register',
          data: {name, email, password},
          headers: {'Content-Type': 'application/json'}
        })
    }

    let loginUser = (name, email, password) => {
        return $http({
          method: 'POST',
          url: 'http://localhost:27017/login',
          data: { name, email, password },
          headers: { 'Content-Type': 'application/json' }
        })
    }
    

    let logoutUser = () => {
        localStorage.token = ""
        localStorage.name = ""
    };

    // authenticateRoute () => {
    //   if (localStorage.isLoggedIn === 'true'){
    //     return true;
    //   } else {
    //     return $q.reject('Not Authenticated')
    //   }
    // }

    return { ensureAuthenticated, getUser, createUser, loginUser, logoutUser };
});
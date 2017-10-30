'use strict';
//TODO: Get Nasa POD
// example search query for Nasa photo of the day:
//''
app.factory("APIFactory", function($q, $http, FBURL, FBCreds) {

let access = FBCreds.accessToken;

let getPOD = () => {
        return $q((resolve, reject) => {
            $http.get(``)
                .then((result) => {
                    console.log("result", result);
                    resolve(result);
                })
                .catch((err) => {
                    console.log("oops", err);
                    reject(err);
                });
        });
    };

    return {getPOD};
});
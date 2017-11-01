'use strict';
//TODO: Get Nasa POD
// example search query for Nasa photo of the day:
//`https://api.nasa.gov/planetary/apod?api_key=${access}`
app.factory("APIFactory", function($q, $http, FBURL, FBCreds) {

let access = FBCreds.accessToken;

let getPOD = () => {
        return $q((resolve, reject) => {
            $http.get(`https://api.nasa.gov/planetary/apod?api_key=${access}`)
                .then((result) => {
                    console.log("result", result.data.url);
                    resolve(result.data.url);
                })
                .catch((err) => {
                    console.log("oops", err);
                    reject(err);
                });
        });
    };
    return {getPOD};
});
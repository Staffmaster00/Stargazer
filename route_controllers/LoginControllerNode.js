'use strict';
const localAuth = require('../auth/local');
const authHelpers = require('../auth/_helpers');


module.exports.registerUser = (req, res, next) => {
  return authHelpers.createUser(req)
    .then((user) => {
      return localAuth.encodeToken(user);
     })
    .then((token) => {
      res.status(200).json({
        status: 'success',
        token: token
      });
    })
    .catch((err) => {
      console.log(`error user register`, err);
      res.status(500).json({
        status: 'error'
      });
    });
};

module.exports.loginUser = (req, res, next) => {
  const username = req.body.name.name;
  const password = req.body.name.password;
  return authHelpers.getUser(username)
    .then((response) => {
      authHelpers.comparePass(password, response.password);
      return response;
    })
    .then((response) => { 
      return localAuth.encodeToken(response);
     })
    .then((token) => {
      res.status(200).json({
        status: 'success',
        token: token
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error'
      });
    });
};
//will need token, need install bcypt, jwt-simple, momentjs
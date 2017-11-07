'use strict';
//TODO: find one and find user one
let db = require('../mongo/mongoose'); //connection to mongo happens inside this folder.
require('../models/user.js');

module.exports.createUser = ({body: name, body: hashword}, res, next) => {
  db.User.insertOne({ name, hashword })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      next(err);
    });
};
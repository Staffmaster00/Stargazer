'use strict';
//TODO: find one and find user one
let db = require('../mongo/mongoose');
let Photo = require('../models/photo.js');

module.exports.fetchPhotos = (req, res, next) => {
  Photo.find({})
    .then((photos) => {
      res.status(200).json(photos);
    })
    .catch((err) => {
      next(err);
    });
};

module.exports.fetchOnePhoto = ({params: id}, res, next) => {
  Photo.find({id})
    .then((photo) => {
      res.status(200).json(photo)
    })
    .catch((err) => next(err));
};

module.exports.fetchUserPhoto = ({params: id}, res, next) => {
  Photo.find({id})
    .then((userPhoto) => {
      res.status(200).json(userPhoto)
    })
    .catch((err) => {
      next(err)
    });
};
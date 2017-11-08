'use strict';
let db = require('../mongo/mongoose');
let Photo = require('../models/photo.js');

module.exports.createPhoto = ({ body: { url, userId } }, res, next) => {
  let newPhoto = new Photo({ url, userId });
  newPhoto.save((err) => {
    if (err) {
      console.log(`err in upload`, err);
    }
  })
};
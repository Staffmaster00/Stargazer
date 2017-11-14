'use strict';
let db = require('../mongo/mongoose');
let Photo = require('../models/photo.js');

module.exports.createPhoto = ({ body: { reference, userName } }, res, next) => {
  console.log(`createPhoto`, reference, userName);
  let newPhoto = new Photo({ reference, userName });
  newPhoto.save()
  .then((data)=>{
    console.log(`data from createphoto`, data);
  })
  .catch((err)=>{
    next(err)
  });
};
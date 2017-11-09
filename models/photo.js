'use strict';

const mongoose = require('../mongo/mongoose');
//username is used to find the photos based on the current user. I hope to refactor to a user id later.
const Photo = mongoose.model('Photo', {
    reference: {
      type: String,
      required: true,
      unique: true
    },
    userName: {
      type: String,
      required: true
    }
  }
);

module.exports = Photo;
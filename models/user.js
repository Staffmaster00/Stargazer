'use strict';
//TODO:USER schema
const mongoose = require('../mongo/mongoose');

// Mongoose models accept two arguments, a string, which will be the name of our model, and a schema
const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    match: [/^[a-zA-Z]+$/, 'your name may only contain letters'],
    // unique: true
    //I know usernames usually have numbers I did this to demonstrate I know some regex
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  }
});

module.exports = User;
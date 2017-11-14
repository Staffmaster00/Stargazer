'use strict';
const mongoose = require('../mongo/mongoose');
//I know usernames can contain numbers etc I just wanted to have a bit of regex. Feel free to improve.
const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    match: [/^[a-zA-Z]+$/, 'your name may only contain letters'],
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
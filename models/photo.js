'use strict';

const mongoose = require('../mongo/mongoose');

// We can define a schema separately then pass it into the model method
const photoSchema = new mongoose.Schema({
  referance: {
    type: String,
    required: true
  },
  userId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

// Mongoose models accept two arguments, a string, which will be the name of our model, and a schema
const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
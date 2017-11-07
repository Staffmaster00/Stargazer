'use strict';
//require 
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const cors = require('cors');
var session = require('express-session');
var passport = require('passport');
require('dotenv').config();
let routes = require('./routes/');

//if favicon
//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);
//error handling
app.use((req, res, next) => {
  let err = new ERROR('Whoops');
  err.status = "https://http.cat/[404]";
  next(err)
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: "This Does Not Work",
    err: err
  });
});

let port = process.env.PORT || 27017
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
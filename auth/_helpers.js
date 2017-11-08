const bcrypt = require('bcryptjs');
const User = require('../models/user');
const localAuth = require('./local.js');
let db = require('../mongo/mongoose');

function createUser({ body: { name, email, password } }) {
  console.log(`create user in helpers`, name, email, password);
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  let newUser = new User({ name: name, email: email, password: hash});
  return newUser.save((err) => {    
    if (err) {
      console.log(`err in login`, err);
    }
  })
  .then((data)=>{
    console.log(`data`, data);//need to get data from here
    return data
  })
};

function getUser(name) {
  // console.log(`name in get user`, name);
  return User.findOne({name: name}, (err, user) => {return user})
};

function comparePass(userPassword, databasePassword) {
  const bool = bcrypt.compareSync(userPassword, databasePassword);
  if (!bool) throw new Error('passwords do not match');
  else return true;
}

function ensureAuthenticated(req, res, next) {
  if (!(req.headers && req.headers.authorization)) {
    return res.status(400).json({
      status: 'Please log in'
    });
  }
  // decode the token
  var header = req.headers.authorization.split(' ');
  var token = header[1];
  localAuth.decodeToken(token, (err, payload) => {
    if (err) {
      return res.status(401).json({
        status: 'Token has expired'
      });
    } else {
      // check if the user still exists in the db
      User.findOne({ id: parseInt(payload.sub) }, (err, user)=>{return user})        
    }
  });
}

module.exports = {createUser, getUser, comparePass, ensureAuthenticated};
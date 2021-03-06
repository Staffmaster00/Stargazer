`use strict`

// code from http://mherman.org/blog/2016/10/28/token-based-authentication-with-node/#.WRCtf2TyuHq - a tutorial on web token auth
const moment = require('moment');
const jwt = require('jwt-simple');

// encodes token
function encodeToken(user) {
  console.log(`user in encode`, user);
  const payload = {
    // expiration date of token. moment is an npm module
    exp: moment().add(14, 'days').unix(),
    // time token is generated
    iat: moment().unix(),
    // subject of token
    sub: user._id
  };
  // set TOKEN_SECRET in .env file
  return jwt.encode(payload, process.env.TOKEN_SECRET);
}

// decodes token
function decodeToken(token, callback) {
  const payload = jwt.decode(token, process.env.TOKEN_SECRET);
  const now = moment().unix();
  // check if the token has expired
  if (now > payload.exp) callback('Token has expired.');
  else callback(null, payload);
}

module.exports = {
  encodeToken,
  decodeToken
};
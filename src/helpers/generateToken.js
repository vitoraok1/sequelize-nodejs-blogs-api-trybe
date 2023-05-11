const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (email) => {
  const payload = {
    username: email,
    admin: false,
  };

  const token = jwt.sign(payload, secret, jwtConfig);

  return token;
};

module.exports = { createToken };
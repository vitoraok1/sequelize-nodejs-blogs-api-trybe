const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const verifyTokenExists = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  next();
};

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    jwt.verify(token, secret);
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = { verifyTokenExists, validateToken };
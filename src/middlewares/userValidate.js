const { findUser } = require('../services/userService');

const displayNameValidate = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  next();
};

const passwordValidate = (req, res, next) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(400).json({ 
      message: '"password" length must be at least 6 characters long',
    });
  }

  next();
};

const emailValidate = async (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  const verifyUserAlreadyExists = await findUser(email);

  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      message: '"email" must be a valid email',
    });
  }

  if (verifyUserAlreadyExists) {
    return res.status(409).json({ 
      message: 'User already registered',
    });
  }

  next();
};

module.exports = { 
  displayNameValidate, passwordValidate, emailValidate };
const { User } = require('../models');

const checkLogin = async (email) => {
  const user = User.findOne({ where: { email } });

  return user;
};

module.exports = { checkLogin };
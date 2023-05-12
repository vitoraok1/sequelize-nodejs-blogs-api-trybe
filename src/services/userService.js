const { User } = require('../models');

const createUser = async (displayName, email, password, image = '') => {
  const user = User.create({ displayName, email, password, image });

  return user;
};

const findUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const getAll = async () => {
  const user = await User.findAll({ attributes: { exclude: ['password'] } });
  return user;
};

module.exports = { createUser, findUser, getAll };
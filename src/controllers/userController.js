const { createUser, getAll } = require('../services/userService');
const { createToken } = require('../helpers/generateToken');

const userPost = async (req, res) => {
  const { displayName, email, password } = req.body;

  await createUser(displayName, email, password);

  return res.status(201).json({ token: createToken(email) });
};

const getUsers = async (_req, res) => {
  const users = await getAll();

  return res.status(200).json(users);
};

module.exports = { userPost, getUsers };
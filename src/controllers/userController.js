const { createUser, getAll, getUserById } = require('../services/userService');
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

const getFilteredUser = async (req, res) => {
  const { id } = req.params;
  let user = await getUserById(id);

  if (!user) return res.status(404).json({ message: 'User does not exist' });

  user = user.dataValues;
  delete user.password;
  // remover o atributo password do retorno do status

  return res.status(200).json(user);
};

module.exports = { userPost, getUsers, getFilteredUser };
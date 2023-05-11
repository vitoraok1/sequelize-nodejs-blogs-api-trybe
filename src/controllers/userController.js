const { createUser } = require('../services/userService');
const { createToken } = require('../helpers/generateToken');

const userPost = async (req, res) => {
  const { displayName, email, password } = req.body;

  await createUser(displayName, email, password);

  return res.status(201).json({ token: createToken(email) });
};

module.exports = { userPost };
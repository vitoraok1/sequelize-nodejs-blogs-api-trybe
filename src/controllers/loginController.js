const { loginService } = require('../services');
const { createToken } = require('../helpers/generateToken');

const loginPost = async (req, res) => {
  const { email } = req.body;

  const user = await loginService.checkLogin(email);
  
  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  return res.status(200).json({ token: createToken(email) });
};

module.exports = { loginPost };
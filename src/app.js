const express = require('express');
const { loginController, userController } = require('./controllers');
const { loginValidate } = require('./middlewares/loginValidate');
const { displayNameValidate, passwordValidate, 
  emailValidate } = require('./middlewares/userValidate');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...
app.post('/login', loginValidate, loginController.loginPost);
app.post('/user', displayNameValidate, passwordValidate, emailValidate, userController.userPost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

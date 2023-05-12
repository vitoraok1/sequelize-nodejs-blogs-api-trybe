const express = require('express');
const { loginController, userController, 
  categoryController, postController } = require('./controllers');
const { loginValidate } = require('./middlewares/loginValidate');
const { displayNameValidate, passwordValidate, 
  emailValidate } = require('./middlewares/userValidate');
const { tokenValidation } = require('./middlewares/tokenValidate');
const { validateFields } = require('./middlewares/postValidate');

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
app.get('/user', tokenValidation, userController.getUsers);
app.get('/user/:id', tokenValidation, userController.getFilteredUser);
app.post('/categories', tokenValidation, categoryController.categoryPost);
app.get('/categories', tokenValidation, categoryController.getAllCategories);
app.post('/post', tokenValidation, validateFields, postController.publishNewPost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

const postService = require('../services/postService');
const categoryService = require('../services/categoryService');
const { findUser } = require('../services/userService');

const publishNewPost = async (req, res) => {
    const { categoryIds } = req.body;

    // console.log('REQ_USER', req.user.data);

    const userByEmail = await findUser(req.user.data);
    // console.log('USER', userByEmail.dataValues.id);
    const idUser = userByEmail.dataValues.id;

    const promises = categoryIds.map((categoryId) => categoryService.getCategoryById(categoryId));
    const resolvedPromises = await Promise.all(promises);
    const categoryExists = resolvedPromises.some((promise) => promise === null);

    if (categoryExists) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }

    const newPost = await postService.createPost({ ...req.body, userId: idUser });

    return res.status(201).json(newPost);  
};

module.exports = { publishNewPost };
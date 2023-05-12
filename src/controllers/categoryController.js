const { createCategory } = require('../services/categoryService');

const categoryPost = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });

  const category = await createCategory(name);

  if (category === false) return res.status(400).json({ message: '"category" already registered' });

  return res.status(201).json(category);
};

module.exports = { categoryPost };
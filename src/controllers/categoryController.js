const { createCategory, getAll } = require('../services/categoryService');

const categoryPost = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });

  const category = await createCategory(name);

  if (category === false) return res.status(400).json({ message: '"category" already registered' });

  return res.status(201).json(category);
};

const getAllCategories = async (req, res) => {
  const categories = await getAll();

  return res.status(200).json(categories);
};

module.exports = { categoryPost, getAllCategories };
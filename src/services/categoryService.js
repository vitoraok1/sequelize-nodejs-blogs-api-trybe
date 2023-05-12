const { Category } = require('../models');

const createCategory = async (name) => {
  const alreadyExistCategory = await Category.findOne({ where: { name } });

  if (alreadyExistCategory) return false;
  // verifica se já existe a categoria cadastrada na db

  const category = Category.create({ name });

  return category;
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

const getCategoryById = async (id) => {
  const user = await Category.findOne({
    where: { id },
    attributes: { exclude: ['name'] },
  });
  return user;
};

module.exports = { createCategory, getAll, getCategoryById };
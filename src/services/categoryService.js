const { Category } = require('../models');

const createCategory = async (name) => {
  const alreadyExistCategory = await Category.findOne({ where: { name } });

  if (alreadyExistCategory) return false;
  // verifica se já existe a categoria cadastrada na db

  const category = Category.create({ name });

  return category;
};

module.exports = { createCategory };
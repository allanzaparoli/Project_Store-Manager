const productsModel = require('../models/products.model');

const allProducts = async () => {
  const products = await productsModel.allProducts();
  return products;
};

const getProductsById = async (id) => {
  const idProducts = await productsModel.getProductsById(id);
  if (!idProducts) return null;
  return idProducts;
};

module.exports = {
  allProducts,
  getProductsById,
};
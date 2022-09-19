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

const createProduct = async (name) => {
  const newProduct = await productsModel.createProduct(name);
  const { insertId } = newProduct;
  const result = {
    id: insertId,
    name,
  };
  return result;
};

const updateProduct = async (name, id) => {
  const idProducts = await productsModel.getProductsById(id);
  if (!idProducts) {
    return null;
  }
  const update = await productsModel.updateProduct(name, id);
  return update;
};

module.exports = {
  allProducts,
  getProductsById,
  createProduct,
  updateProduct,
};
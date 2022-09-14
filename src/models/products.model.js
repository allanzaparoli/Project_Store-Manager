const connection = require('../utils/connection');

const allProducts = async () => {
  const [products] = await connection.execute(
    `SELECT id,
    name FROM StoreManager.products ORDER BY id ASC`,
  );
  return products;
};

const getProductsById = async (id) => {
  const [[product]] = await connection.execute(
    `SELECT id, name FROM StoreManager.products
      where id = ${id};`,
  );
  return product;
};

module.exports = {
  allProducts,
  getProductsById,
};
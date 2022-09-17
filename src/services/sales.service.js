const salesModel = require('../models/sales.model');
const productsModel = require('../models/products.model');

const verifyProductId = async (productId) => {
  const product = await productsModel.getProductsById(productId);
  if (!product) return false;
  return true;
};

const createSales = async (salesArray) => {
  // verifica se o id do produto existe no banco de dados
  const verify = await Promise.all((salesArray.map(({ productId }) => verifyProductId(productId))));
  if (verify.includes(false)) return { error: true, status: 404, message: 'Product not found' };

  const { insertId } = await salesModel.newSales();
  salesArray.forEach(async (element) => {
    const { productId, quantity } = element;
    await salesModel.salesProducts(insertId, productId, quantity);
  });

  return { id: insertId, itemsSold: salesArray };
};

module.exports = {
  createSales,
};
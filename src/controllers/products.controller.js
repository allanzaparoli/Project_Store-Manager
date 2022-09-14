const productsService = require('../services/products.service');

const allProducts = async (_req, res) => {
  try {
    const products = await productsService.allProducts();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  try {
    const productsId = await productsService.getProductsById(id);
    if (!productsId) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(productsId);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  allProducts,
  getProductsById,
};
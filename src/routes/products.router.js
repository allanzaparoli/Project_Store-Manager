const express = require('express');
const productsController = require('../controllers/products.controller');

const router = express.Router();
// ## estamos em /products

// requisito 1
router.get('/', productsController.allProducts);
router.get('/:id', productsController.getProductsById);

module.exports = router;

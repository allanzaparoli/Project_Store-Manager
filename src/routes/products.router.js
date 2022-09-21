const express = require('express');
const productsController = require('../controllers/products.controller');
const validateName = require('../middlewares/validationName');

const router = express.Router();
// ## estamos em /products

// requisito 1
router.get('/', productsController.allProducts);
router.get('/:id', productsController.getProductsById);

// requisito 2
router.post('/', validateName, productsController.createProduct);

// requisito 10
router.put('/:id', validateName, productsController.updateProduct);

module.exports = router;
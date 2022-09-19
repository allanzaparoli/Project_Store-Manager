const express = require('express');
const salesController = require('../controllers/sales.controller');
const conditionSales = require('../middlewares/conditionSales');

const router = express.Router();

// requisito 6
router.post('/', conditionSales, salesController.createSales);

// requisito 8
router.get('/', salesController.listAllSales);
router.get('/:id', salesController.getSalesById);

module.exports = router;
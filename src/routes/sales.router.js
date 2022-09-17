const express = require('express');
const salesController = require('../controllers/sales.controller');
const conditionSales = require('../middlewares/conditionSales');

const router = express.Router();

// requisito 6
router.post('/', conditionSales, salesController.createSales);

module.exports = router;
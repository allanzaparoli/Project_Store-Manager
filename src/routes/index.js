// importar o express
const express = require('express');
// executar o router
const router = express.Router();
// importo os routers das rotas
const productsRouter = require('./products.router');
const salesRouter = require('./sales.router');
// definindo as rotas
router.use('/products', productsRouter);
router.use('/sales', salesRouter);

module.exports = router;
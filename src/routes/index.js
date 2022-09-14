// importar o express
const express = require('express');
// executar o router
const router = express.Router();
// importo os routers das rotas
const productsRouter = require('./products.router');

// definindo as rotas
router.use('/products', productsRouter);

module.exports = router;
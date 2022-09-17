const salesService = require('../services/sales.service');

const createSales = async (req, res) => {
  const salesArray = req.body;
  const newSales = await salesService.createSales(salesArray);
  if (newSales.error) {
    return res.status(newSales.status).json({ message: newSales.message });
  }
  return res.status(201).json(newSales);
};

module.exports = {
  createSales,
};

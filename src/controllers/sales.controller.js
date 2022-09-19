const salesService = require('../services/sales.service');

const createSales = async (req, res) => {
  const salesArray = req.body;
  const newSales = await salesService.createSales(salesArray);
  if (newSales.error) {
    return res.status(newSales.status).json({ message: newSales.message });
  }
  return res.status(201).json(newSales);
};

const listAllSales = async (_req, res) => {
  const result = await salesService.listAllSales();
  return res.status(200).json(result);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.getSalesById(id);
  if (result.error === true) {
    return res.status(result.status).json({ message: result.message });
  }
  return res.status(200).json(result);
};

module.exports = {
  createSales,
  listAllSales,
  getSalesById,
};

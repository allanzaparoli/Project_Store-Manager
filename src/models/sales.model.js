const connection = require('../utils/connection');

const newSales = async () => {
  const [result] = await connection.execute(
    `INSERT INTO StoreManager.sales (id, date)
    VALUES (null, now());`,
  );
  return result;
};

const salesProducts = async (id, productId, quantity) => {
  const [result] = await connection.execute(
    `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
      VALUES (?, ?, ?);`,
    [id, productId, quantity],
  );
  return result;
};

const listAllSales = async () => {
  const [sales] = await connection.execute(`
  SELECT sales.id AS saleId, sales.date, salesProdu.product_id AS productId,
  salesProdu.quantity 
  FROM StoreManager.sales AS sales
  INNER JOIN StoreManager.sales_products AS salesProdu
  ON sales.id = salesProdu.sale_id
  ORDER BY saleId ASC`);

  return sales;
};

const getSalesById = async (id) => {
  const [rows] = await connection
    .execute(`SELECT sales.id AS saleId, sales.date, salesProdu.product_id AS productId,
  salesProdu.quantity 
  FROM StoreManager.sales AS sales
  INNER JOIN StoreManager.sales_products AS salesProdu
  ON sales.id = salesProdu.sale_id
  WHERE sale_id = ?`, [id]);
  return rows;
};

module.exports = {
  salesProducts,
  newSales,
  listAllSales,
  getSalesById,
};
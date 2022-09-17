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
  const [sales] = await connection.execute('SELECT * FROM sales');
  return sales;
};

module.exports = {
  salesProducts,
  newSales,
  listAllSales,
};
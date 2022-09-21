const listAllProducts = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  }

];

const getById = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  }
];

const NewProduct = [
  {
    "id": 4,
    "name": "ProdutoX"
  }
];

const NewSale = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
];

const ListAllSales = [
  {
    "saleId": 1,
    "date": "2021-09-09T04:54:29.000Z",
    "productId": 1,
    "quantity": 2
  },
  {
    "saleId": 1,
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 2,
    "quantity": 2
  }
];

const ListAllSalesById = [
  {
    "date": "2021-09-09T04:54:29.000Z",
    "productId": 1,
    "quantity": 2
  },
  {
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 2,
    "quantity": 2
  }
];

const UpdateProduct = [
  {
    "name": "Martelo do Batman"
  }
];

const saleId = [
  {
    "quantity": 1
  }
];

const quantityNeg = [
  {
    "productId": 1,
    "quantity": -1
  }
];

module.exports = {
  listAllProducts,
  getById,
  NewProduct,
  NewSale,
  ListAllSales,
  ListAllSalesById,
  UpdateProduct,
  saleId,
  quantityNeg,
}
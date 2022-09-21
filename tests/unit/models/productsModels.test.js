const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/utils/connection');
const productsModel = require('../../../src/models/products.model');
const mock = require('../mocks');

describe('Testar lista de produtos', async () => {
  beforeEach(async () => {
    await sinon.stub(connection, 'execute').resolves(mock.listAllProducts)
  });
  afterEach(async () => await connection.execute.restore());

  it('Deve retornar um objeto', async () => {
    const result = await productsModel.allProducts();
    expect(result).to.be.a('object');
  });
})

describe('Testa produto com Id', () => {
  const product = [{}];
  beforeEach(async () => {
    await sinon.stub(connection, 'execute').resolves(product)
  });
  afterEach(async () => await connection.execute.restore());
  // it('Deve aparecer um objeto', async () => {
  //   const result = await productsModel.getProductsById('a')
  //   expect(result).to.be.a('object')
  // });
})


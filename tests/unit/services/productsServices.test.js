const sinon = require('sinon');
const { expect } = require('chai');
const productsModel = require('../../../src/models/products.model');
const productsService = require('../../../src/services/products.service');
const mock = require('../mocks');

describe('Testa lista de produtos', () => {
  beforeEach(async () => {
    sinon.stub(productsModel, 'allProducts').resolves(mock.listAllProducts)
  });
  afterEach(() => productsModel.allProducts.restore());
  it('Deve retornar um array', async () => {
    const result = await productsService.allProducts()
    expect(result).to.be.an('array')
  });
});

describe('Testa função getById', () => {
  beforeEach(async () => {
    sinon.stub(productsModel, 'getProductsById').resolves(mock.getById)
  });
  afterEach(async () => {
    await productsModel.getProductsById.restore()
  });

  it('Deve retornar um array', async () => {
    const result = await productsService.getProductsById('1')
    expect(result).to.be.an('array');
  });

  it('Deve retornar id e nome', async () => {
    const result = await productsService.getProductsById('1')
    expect(result).to.deep.equal(mock.getById);
  });
});
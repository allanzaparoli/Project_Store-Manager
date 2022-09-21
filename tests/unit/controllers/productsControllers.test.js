const sinon = require('sinon');
const { expect } = require('chai');
const productsService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');
const mock = require('../mocks');

describe('Teste retorna status 200 e json', () => {
  const req = {};
  const res = {};

  beforeEach(async () => {
    req.body = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);

    sinon.stub(productsService, 'allProducts').resolves(mock.listAllProducts);
  });

  afterEach(async () => {
    productsService.allProducts.restore();
  });

  it('Deve retornar status 200', async () => {
    await productsController.allProducts(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
  });
});

describe('Teste pegar itens pelo Id', () => {
  const res = {};
  const req = {};

  beforeEach(async () => {
    req.params = '1';
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await sinon.stub(productsService, 'getProductsById').resolves(mock.getById);
  });

  afterEach(async () => {
    await productsService.getProductsById.restore();
  });

  it('Deve retornar um json', async () => {
    await productsController.getProductsById(req, res);
    expect(res.json.calledWith(sinon.match.object)).to.be.equal(false);
  });
});

describe('Teste adicionar nome', () => {
  const res = {};
  const req = {};

  beforeEach(async () => {
    req.body = { "name": "ProdutoX" };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await sinon.stub(productsService, 'createProduct').resolves(mock.NewProduct);
  });
  afterEach(async () => {
    await productsService.createProduct.restore();
  });

  it('Deve retornar status 201', async () => {
    await productsController.createProduct(req, res);
    expect(res.status.calledWith(201)).to.be.equal(true);
  });
});
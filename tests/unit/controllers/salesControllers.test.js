const sinon = require('sinon');
const { expect } = require('chai');
const salesService = require('../../../src/services/sales.service');
const salesController = require('../../../src/controllers/sales.controller');
const mock = require('../mocks');

describe('Teste Criar Venda', () => {
  const res = {};
  const req = {};

  const itemSale = {
    "id": 1,
    "itemSold": mock.NewSale,
  }

  beforeEach(async () => {
    req.body = [
      {
        "productId": 1,
        "quantity": 1
      },
      {
        "productId": 2,
        "quantity": 5
      }
    ]
    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns()

    await sinon.stub(salesService, 'createSales').resolves(itemSale);
  });
  afterEach(async () => {
    await salesService.createSales.restore();
  });
  it('Deve retornar status 201', async () => {
    await salesController.createSales(req, res);
    expect(res.status.calledWith(201)).to.be.equal(true);
  });
  it('Deve retornar um json', async () => {
    await salesController.createSales(req, res);
    expect(res.json.calledWith(sinon.match.object)).to.be.equal(true);
  })
})
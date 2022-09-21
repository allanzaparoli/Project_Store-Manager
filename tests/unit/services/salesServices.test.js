const sinon = require('sinon');
const { expect } = require('chai');
const salesModel = require('../../../src/models/sales.model');
const salesService = require('../../../src/services/sales.service');
const mock = require('../mocks');

describe('Testa productId não existe', () => {
  it('Deve retornar um objeto', async () => {
    const result = await salesService.createSales(mock.saleId);
    expect(result).to.be.a('object');
  });
  it('Deve retornar um objeto com erro', async () => {
    const erro = { error: { code: 'badRequest', message: '"productId" is required' } }
    const result = await salesService.createSales(mock.saleId);
    expect(result).to.deep.equal(erro);
  });
})

describe('Testa quantidade não existe', () => {
  const sales = [
    {
      "productId": 5
    }
  ]
  it('Deve retornar um objeto', async () => {
    const result = await salesService.createSales(sales);
    expect(result).to.be.a('object');
  });
  it('Deve retornar um objeto com erro', async () => {
    const erro = { error: { code: 'badRequest', message: '"quantity" is required' } }
    const result = await salesService.createSales(sales);
    expect(result).to.deep.equal(erro);
  });
});

describe('Testa função getSalesBy', () => {
  beforeEach(async () => {
    await sinon.stub(salesModel, 'listAllSales').resolves(mock.ListAllSales)
  });
  afterEach(async () => {
    await salesModel.listAllSales.restore()
  });
  it('Deve retornar um array', async () => {
    const result = await salesService.listAllSales(1)
    expect(result).to.be.an('array')
  });
  it('Deve retornar o tamanho do listAllSales', async () => {
    const result = await salesService.listAllSales(1)
    expect(result).to.deep.equal([
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
    ])
  });
});

describe('Testa quantidade negativa', () => {
  const sales = [
    {
      "productId": 1,
      "quantity": -1
    }
  ]
  it('Deve retornar um objeto', async () => {
    const result = await salesService.createSales(sales);
    expect(result).to.be.a('object');
  });
  it('Deve retornar um objeto com erro', async () => {
    const erro = {
      error: {
        code: 'invalidDate',
        message: '"quantity" must be greater than or equal to 1',
      },
    };
    const result = await salesService.createSales(sales);
    expect(result).to.deep.equal(erro);
  });
});


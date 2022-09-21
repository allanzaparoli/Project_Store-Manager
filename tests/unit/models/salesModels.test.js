const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/utils/connection');
const salesModel = require('../../../src/models/sales.model');

describe('Teste function newSales', () => {
  const result = [{ insertId: 1 }];
  beforeEach(async () => {
    await sinon.stub(connection, 'execute').resolves(result);
  });
  afterEach(async () => {
    await connection.execute.restore();
  });
  it('Deve retornar um objeto', async () => {
    const result = await salesModel.newSales();
    expect(result).to.be.a('object');
  });
  // it('Deve retornar um objeto com uma id', async () => {
  //   const result = await salesModel.newSales();
  //   expect(result).to.deep.equal({id: 1});
  // });
})
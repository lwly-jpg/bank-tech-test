const Statement = require('./src/statement');

describe('Statement', () => {
  let statement;

  beforeEach(() => {
    const balance = 0;
    statement = new Statement(balance);
  });

  it('adds a transaction to the statement', () => {
    statement.addTransaction('credit', '21/12/2022', 20);
    expect(statement.formatStatement()).toEqual(['21/12/2022 || 20.00 || || || 20.00']);

  });

});

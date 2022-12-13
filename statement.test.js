const Statement = require('./src/statement');

describe('Statement', () => {
  let statement;

  beforeEach(() => {
    statement = new Statement;
  });

  it('adds a transaction', () => {
    statement.addTransaction('credit', '20/12/2022', 50, 75);
    expect(statement.transactions[0].date).toEqual('20/12/2022');
    expect(statement.transactions[0].credit).toEqual('50.00');
    expect(statement.transactions[0].debit).toEqual("||");
    expect(statement.transactions[0].balance).toEqual('75.00');
  });


});

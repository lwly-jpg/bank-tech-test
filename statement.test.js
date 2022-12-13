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

  it('adds multiple transactions', () => {
    statement.addTransaction('credit', '20/12/2022', 50, 75);
    statement.addTransaction('credit', '22/12/2022', 25, 100);
    statement.addTransaction('debit', '23/12/2022', 50, 50);
    expect(statement.transactions[0].date).toEqual('20/12/2022');
    expect(statement.transactions[1].credit).toEqual('25.00');
    expect(statement.transactions[2].debit).toEqual("50.00");
    expect(statement.transactions[1].balance).toEqual('100.00');
    expect(statement.transactions[2].credit).toEqual("||");
  });

  it('returns message if no transactions to format', () => {
    expect(statement.formatTransactions()).toEqual('No transactions in account history.')
  });

  it('returns formatted transactions when some have been added', () => {
    statement.addTransaction('credit', '20/12/2022', 50, 75);
    statement.addTransaction('credit', '22/12/2022', 25, 100);
    statement.addTransaction('debit', '23/12/2022', 50, 50);
    const result = 'date || credit || debit || balance\n20/12/2022 || 50.00 || || || 75.00\n22/12/2022 || 25.00 || || || 100.00\n23/12/2022 || || || 50.00 || 50.00';
    expect(statement.formatTransactions()).toEqual(result);
  });


});

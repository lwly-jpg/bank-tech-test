const Statement = require('../src/statement');

describe('Statement', () => {
  let statement;

  beforeEach(() => {
    statement = new Statement;
  });

  it('adds a transaction', () => {
    statement.addTransaction('credit', '20/12/2022', 50, 75);
    expect(statement.transactions[0].date).toEqual('20/12/2022');
    expect(statement.transactions[0].credit).toEqual('50.00');
    expect(statement.transactions[0].debit).toEqual(0);
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
    expect(statement.transactions[2].credit).toEqual(0);
  });

  it('throws error when transaction type is invalid', () => {
    expect(() => statement.addTransaction('cedit', '20/12/2022', 50, 75)).toThrow('Error - invalid transaction type.');
  });

  it('returns message if no transactions to format', () => {
    expect(statement.formatTransactions()).toEqual('No transactions in account history.')
  });

  it('returns formatted transactions when some have been added', () => {
    statement.addTransaction('credit', '20/12/2022', 50, 75);
    statement.addTransaction('credit', '22/12/2022', 25, 100);
    statement.addTransaction('debit', '23/12/2022', 50, 50);
    const result = 'date || credit || debit || balance\n23/12/2022 || || || 50.00 || 50.00\n22/12/2022 || 25.00 || || || 100.00\n20/12/2022 || 50.00 || || || 75.00';
    expect(statement.formatTransactions()).toEqual(result);
  });


});

const Transaction = require('./src/transaction');

describe('Transaction', () => {
  it('sets the amount of a deposit transaction', () => {
    const transaction = new Transaction;
    transaction.deposit(20);
    expect(transaction.getAmount()).toEqual(20);
  });

});
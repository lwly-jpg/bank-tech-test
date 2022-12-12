const Transaction = require('./src/transaction');

describe('Transaction', () => {
  it('sets the amount of a deposit transaction', () => {
    const transaction = new Transaction;
    transaction.deposit(20);
    expect(transaction.getAmount()).toEqual(20);
  });

  it('throws error if deposit is not integer', () => {
    const transaction = new Transaction;
    expect(() => transaction.deposit('reject me')).toThrow('Error - amount must be a valid number.');
  });


});
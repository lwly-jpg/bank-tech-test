const Transaction = require('./src/transaction');

describe('Transaction', () => {
  let transaction;

  beforeEach(() => {
    transaction = new Transaction;
    jest
    .spyOn(global.Date, 'now')
    .mockImplementation(() =>
      new Date('2022-12-25T11:01:58.135Z').valueOf()
    );
  });

  it('sets the amount of a transaction', () => {
    transaction.processTransaction(20);
    expect(transaction.getAmount()).toEqual(20);
  });

  it('sets the date of a transaction', () => {
    transaction.processTransaction(20);
    expect(transaction.getDate()).toEqual('25/12/2022')
  });

  it('throws error if transaction amount is not integer', () => {
    expect(() => transaction.processTransaction('reject me')).toThrow('Error - amount must be a valid number.');
  });


});
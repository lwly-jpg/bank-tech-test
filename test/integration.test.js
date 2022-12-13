const BankAccount = require('../src/bankAccount');

describe('BankAccount', () => {
  let myAccount;

  beforeEach(() => {
    myAccount = new BankAccount;
    jest
    .spyOn(global.Date, 'now')
    .mockImplementation(() =>
      new Date('2022-12-25T11:01:58.135Z').valueOf()
    );
  });

  describe('when a transaction is attempted', () => {

    it('throws error if deposit is not integer', () => {
      expect(() => myAccount.deposit('reject me')).toThrow('Error - amount must be a valid number.');
    });

    it('throws error if withdrawal is not integer', () => {
      expect(() => myAccount.withdraw('reject me')).toThrow('Error - amount must be a valid number.');
    });

  });

  it('prints out formatted statement to console', () => {
    myAccount.deposit(50);
    myAccount.withdraw(20);
    myAccount.deposit(5);
    const result = 'date || credit || debit || balance\n25/12/2022 || 50.00 || || || 50.00\n25/12/2022 || || || 20.00 || 30.00\n25/12/2022 || 5.00 || || || 35.00'
    expect(myAccount.printStatement()).toEqual(result);
  });

  it('prints out statement with message if there are no transactions', () => {
    expect(myAccount.printStatement()).toEqual('No transactions in account history.');
  });


});
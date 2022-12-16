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

    it('adds single transaction to statement', () => {
      myAccount.deposit(50);
      expect(myAccount.statement.transactions[0].date).toEqual('25/12/2022');
      expect(myAccount.statement.transactions[0].credit).toEqual('50.00');
      expect(myAccount.statement.transactions[0].debit).toEqual(0);
      expect(myAccount.statement.transactions[0].balance).toEqual('50.00');
    });

    it('adds multiple transactions to statement', () => {
      myAccount.deposit(50);
      myAccount.deposit(25);
      myAccount.withdraw(50);
      expect(myAccount.statement.transactions[0].date).toEqual('25/12/2022');
      expect(myAccount.statement.transactions[1].credit).toEqual('25.00');
      expect(myAccount.statement.transactions[2].debit).toEqual("50.00");
      expect(myAccount.statement.transactions[1].balance).toEqual('75.00');
      expect(myAccount.statement.transactions[2].credit).toEqual(0);
    });

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
    const result = 'date || credit || debit || balance\n25/12/2022 || 5.00 || || || 35.00\n25/12/2022 || || || 20.00 || 30.00\n25/12/2022 || 50.00 || || || 50.00'
    expect(myAccount.printStatement()).toEqual(result);
  });

  it('prints out statement with message if there are no transactions', () => {
    expect(myAccount.printStatement()).toEqual('No transactions in account history.');
  });


});
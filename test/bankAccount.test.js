const BankAccount = require('../src/bankAccount');

describe('BankAccount', () => {
  let myAccount;
  let consoleSpy;

  beforeEach(() => {
    myAccount = new BankAccount;
    consoleSpy = jest.spyOn(console, 'log');
    jest
    .spyOn(global.Date, 'now')
    .mockImplementation(() =>
      new Date('2022-12-25T11:01:58.135Z').valueOf()
    );
  });

  it('constructs with an empty balance of 0', () => {
    expect(myAccount.balance).toEqual(0);
  });

  describe('when a transaction is attempted', () => {
    it('increases balance when funds are deposited', () => {
      myAccount.deposit(20);
      expect(myAccount.balance).toEqual(20);
      expect(myAccount.getBalance()).toEqual('Your balance is: 20.00');
    });
  
    it('decreases balance when funds are withdrawn', () => {
      myAccount.deposit(20);
      myAccount.withdraw(10);
      expect(myAccount.balance).toEqual(10);
      expect(myAccount.getBalance()).toEqual('Your balance is: 10.00');
    });

    it('returns insufficient funds prompt if withdrawal is great than balance', () => {
      expect(myAccount.withdraw(20)).toEqual('Insuficient funds. Balance: 0.00');
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
    myAccount.printStatement();
    const result = 'date || credit || debit || balance\n25/12/2022 || 50.00 || || || 50.00\n25/12/2022 || || || 20.00 || 30.00\n25/12/2022 || 5.00 || || || 35.00'
    expect(consoleSpy).toHaveBeenCalledWith(result);
  });

  it('prints out statement with message if there are no transactions', () => {
    myAccount.printStatement();
    expect(consoleSpy).toHaveBeenCalledWith('No transactions in account history.');
  });


});
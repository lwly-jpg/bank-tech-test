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

    it('allows withdrawal if overdraft exists, up to overdraft limit', () => {
      myAccount.overdraft = 200;
      myAccount.withdraw(190)
      expect(myAccount.getBalance()).toEqual('Your balance is: -190.00 (overdraft)');
    });

    it('returns insufficient funds prompt if overdraft exists but withdrawal exceeds limit', () => {
      myAccount.overdraft = 200;
      expect(myAccount.withdraw(210)).toEqual('Insuficient funds. Balance: 0.00 (+200.00 overdraft limit)');
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
    const result = 'date || credit || debit || balance\n25/12/2022 || 50.00 || || || 50.00\n25/12/2022 || || || 20.00 || 30.00\n25/12/2022 || 5.00 || || || 35.00'
    expect(myAccount.printStatement()).toEqual(result);
  });

  it('prints out statement with message if there are no transactions', () => {
    expect(myAccount.printStatement()).toEqual('No transactions in account history.');
  });


});
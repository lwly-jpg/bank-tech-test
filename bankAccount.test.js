const BankAccount = require('./src/bankAccount');

describe('BankAccount', () => {
  it('constructs with an empty balance of 0', () => {
    const myAccount = new BankAccount;
    expect(myAccount.getBalance()).toEqual(0);
  });

  it('increases balance when funds are deposited', () => {
    const myAccount = new BankAccount;
    myAccount.deposit(20);
    expect(myAccount.getBalance()).toEqual(20);
  })
});
const BankAccount = require('./src/bankAccount');

describe('BankAccount', () => {
  let myAccount;

  beforeEach(() => {
    myAccount = new BankAccount;
  })

  it('constructs with an empty balance of 0', () => {
    expect(myAccount.getBalance()).toEqual(0);
  });

  it('increases balance when funds are deposited', () => {
    myAccount.deposit(20);
    expect(myAccount.getBalance()).toEqual(20);
  });

  it('decreases balance when funds are withdrawn', () => {
    myAccount.deposit(20);
    myAccount.withdraw(10);
    expect(myAccount.getBalance()).toEqual(10);
  });


});
const BankAccount = require('./src/bankAccount');

describe('BankAccount', () => {
  it('constructs with an empty balance of 0', () => {
    const myAccount = new BankAccount;
    expect(myAccount.getBalance()).toEqual(0);
  })
})
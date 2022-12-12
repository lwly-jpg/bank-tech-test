const BankAccount = require('./src/bankAccount');

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

  it('returns date with balance when account history is requested', () => {
    myAccount.deposit(20);
    expect(myAccount.getHistory()).toEqual(["25/12/2022 20.00"]);
  });

  it('returns account balance history with multiple transactions', () => {
    myAccount.deposit(20);
    myAccount.withdraw(10);
    myAccount.deposit(5);
    const result = ["25/12/2022 20.00", "25/12/2022 10.00", "25/12/2022 15.00"]
    expect(myAccount.getHistory()).toEqual(result);
  });

  it('prints out formatted statement to console', () => {
    myAccount.deposit(50);
    myAccount.withdraw(20);
    myAccount.deposit(5);
    myAccount.printStatement();
    expect(consoleSpy).toHaveBeenCalledWith('date || credit || debit || balance');
    expect(consoleSpy).toHaveBeenCalledWith('25/12/2022 || 50.00 || || || 50.00');
    expect(consoleSpy).toHaveBeenCalledWith('25/12/2022 || || || 20.00 || 30.00');
    expect(consoleSpy).toHaveBeenCalledWith('25/12/2022 || 5.00 || || || 35.00');
  });


});
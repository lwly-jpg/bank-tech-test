const Transaction = require('./transaction');
const Statement = require('./statement');

class BankAccount {
  constructor() {
    this.balance = 0;
    this.balanceHistory = [];
    this.statement = new Statement;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    const transaction = new Transaction;
    transaction.processTransaction(amount);
    this.balance += amount;
    this.statement.addTransaction('credit', transaction.date, transaction.amount, this.balance);
  }

  withdraw(amount) {
    const transaction = new Transaction;
    transaction.processTransaction(amount);
    this.balance -= amount;
    this.statement.addTransaction('debit', transaction.date, transaction.amount, this.balance);
  }

  printStatement() {
    console.log(this.statement.formatTransactions())
  }


}

module.exports = BankAccount;


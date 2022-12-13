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
    this.balance += amount;
    const transaction = new Transaction;
    transaction.processTransaction(amount);
    this.statement.addTransaction('credit', transaction.date, transaction.amount, this.balance);
  }

  withdraw(amount) {
    this.balance -= amount;
    const transaction = new Transaction;
    transaction.processTransaction(amount);
    this.statement.addTransaction('debit', transaction.date, transaction.amount, this.balance);
  }

  getHistory() {
    this.statement.transactions.forEach((transaction) => {
      this.balanceHistory.push(`${transaction.date} ${transaction.balance}`)
    });

    return this.balanceHistory;
  }

  printStatement() {
    console.log(this.statement.formatStatement())
  }


}

module.exports = BankAccount;


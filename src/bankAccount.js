const Transaction = require('./transaction');
const Statement = require('./statement');

class BankAccount {
  constructor() {
    this.balance = 0;
    this.balanceHistory = [];
    this.statement = new Statement;
  }

  // returns balance as unformatted number
  getBalance() {
    return `Your balance is: ${this.balance.toFixed(2)}`;
  }

  // checks amount type, generates date and adds transaction to statement
  deposit(amount) {
    const transaction = new Transaction;
    transaction.processTransaction(amount);
    this.balance += amount;
    this.statement.addTransaction('credit', transaction.date, transaction.amount, this.balance);
  }

  // checks amount type, generates date and adds transaction to statement
  withdraw(amount) {
    const transaction = new Transaction;
    transaction.processTransaction(amount);
    this.balance -= amount;
    this.statement.addTransaction('debit', transaction.date, transaction.amount, this.balance);
  }

  // prints formatted statement of transactions to the console
  printStatement() {
    console.log(this.statement.formatTransactions())
  }

}

module.exports = BankAccount;


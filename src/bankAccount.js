const Transaction = require('./transaction');
const Statement = require('./statement');

class BankAccount {
  constructor() {
    this.balance = 0;
    this.overdraft = 0;
    this.statement = new Statement;
  }

  // returns balance as unformatted number
  getBalance() {
    if (this.balance < 0) {
      return `Your balance is: ${this.balance.toFixed(2)} (overdraft)`;
    } else {
      return `Your balance is: ${this.balance.toFixed(2)}`;
    }
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
    if (amount > this.balance + this.overdraft) {
      return `Insuficient funds. Balance: ${this.balance.toFixed(2)}`
    } else {
      const transaction = new Transaction;
      transaction.processTransaction(amount);
      this.balance -= amount;
      this.statement.addTransaction('debit', transaction.date, transaction.amount, this.balance);
    }
  }

  // returns formatted statement of transactions
  printStatement() {
    return this.statement.formatTransactions();
  }

}

module.exports = BankAccount;


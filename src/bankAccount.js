const Transaction = require('./transaction');
const Statement = require('./statement');

class BankAccount {
  // initialises with balance of 0 and overdraft of 0
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

  // checks balance and overdraft funds before processing
  // checks amount type, generates date and adds transaction to statement
  withdraw(amount) {
    if (amount > this.balance + this.overdraft) {
      if (this.overdraft === 0) {
        return `Insuficient funds. Balance: ${this.balance.toFixed(2)}`
      } else {
        return `Insuficient funds. Balance: ${this.balance.toFixed(2)} (+${this.overdraft.toFixed(2)} overdraft limit)`
      }
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


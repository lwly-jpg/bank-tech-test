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
    console.log(this.balance)
    // this.setStatement('credit', transaction.date, transaction.amount.toFixed(2));
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
    console.log('date || credit || debit || balance');
    
    if (this.statement.transactions.length === 0) {
      console.log('No transactions in account history.');
    } else {
      this.statement.transactions.forEach((transaction) => {
        console.log(`${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`)
      });
    }

  }


}

module.exports = BankAccount;
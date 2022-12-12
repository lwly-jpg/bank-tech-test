const Transaction = require('./transaction');

class BankAccount {
  constructor() {
    this.balance = 0;
    this.balanceHistory = [];
    this.statement = [];
  }

  getBalance() {
    return this.balance;
  }

  getDate() {
    const date = new Date(Date.now());
    const todayGB = date.toLocaleDateString("en-GB");
    return todayGB;
  }

  setStatement(type, amount) {
    let creditAmount = null;
    let debitAmount = null;

    if (type === 'credit') {
      creditAmount = amount;
      debitAmount = "||"
    } else if (type === 'debit') {
      creditAmount = "||";
      debitAmount = amount;
    }

    this.statement.push({date: this.getDate(), credit: creditAmount, debit: debitAmount, balance: this.balance.toFixed(2)});
  }

  deposit(amount) {
    this.balance += amount;
    const transaction = new Transaction;
    transaction.processTransaction(amount);
    this.setStatement('credit', transaction.amount.toFixed(2));
  }

  withdraw(amount) {
    if (typeof amount !== 'number') {
      throw 'Error - amount must be a valid number.'
    } else {
      this.balance -= amount;
      this.setStatement('debit', amount.toFixed(2));
    }
  }

  getHistory() {
    this.statement.forEach((transaction) => {
      this.balanceHistory.push(`${transaction.date} ${transaction.balance}`)
    });

    return this.balanceHistory;
  }

  printStatement() {
    console.log('date || credit || debit || balance');
    
    if (this.statement.length === 0) {
      console.log('No transactions in account history.');
    } else {
      this.statement.forEach((transaction) => {
        console.log(`${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`)
      });
    }

  }


}

module.exports = BankAccount;
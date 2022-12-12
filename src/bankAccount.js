class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
    this.history = [];
    this.statement = [];
  }

  getBalance() {
    return this.balance;
  }

  getDate() {
    const date = new Date();
    const todayGB = date.toLocaleDateString("en-GB");
    return todayGB;
  }

  updateTransactions() {
    this.transactions.push({balance: this.balance.toFixed(2), date: this.getDate() });
  }

  deposit(amount) {
    this.balance += amount;
    this.updateTransactions();
    this.statement.push({date: this.getDate(), credit: amount.toFixed(2), debit: "||", balance: this.balance.toFixed(2)})
  }

  withdraw(amount) {
    this.balance -= amount;
    this.updateTransactions();
    this.statement.push({date: this.getDate(), credit: "||", debit: amount.toFixed(2), balance: this.balance.toFixed(2)})
  }

  getHistory() {
    this.transactions.forEach((transaction) => {
      this.history.push(`${transaction.date} ${transaction.balance}`)
    });

    return this.history;
  }

  printStatement() {
    console.log('date || credit || debit || balance');
    this.statement.forEach((transaction) => {
      console.log(`${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`)
    })

  }


}

module.exports = BankAccount;
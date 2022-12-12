class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
    this.history = [];
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
  }

  withdraw(amount) {
    this.balance -= amount;
    this.updateTransactions();
  }

  getHistory() {
    this.transactions.forEach((transaction) => {
      this.history.push(`${transaction.date} ${transaction.balance}`)
    });

    return this.history;
  }
}

module.exports = BankAccount;
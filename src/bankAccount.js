class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
    this.history = [];
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    const date = new Date();
    const todayGB = date.toLocaleDateString("en-GB");
    this.balance += amount;
    this.transactions.push({balance: this.balance.toFixed(2), date: todayGB });
  }

  withdraw(amount) {
    const date = new Date();
    const todayGB = date.toLocaleDateString("en-GB");
    this.balance -= amount;
    this.transactions.push({balance: this.balance.toFixed(2), date: todayGB });
  }

  getHistory() {
    this.transactions.forEach((transaction) => {
      this.history.push(`${transaction.date} ${transaction.balance}`)
    });

    return this.history;
  }
}

module.exports = BankAccount;
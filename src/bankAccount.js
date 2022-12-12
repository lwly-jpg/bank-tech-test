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

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({balance: this.balance.toFixed(2), date: this.getDate() });
  }

  withdraw(amount) {
    this.balance -= amount;
    this.transactions.push({balance: this.balance.toFixed(2), date: this.getDate() });
  }

  getHistory() {
    this.transactions.forEach((transaction) => {
      this.history.push(`${transaction.date} ${transaction.balance}`)
    });

    return this.history;
  }
}

module.exports = BankAccount;
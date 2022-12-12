class BankAccount {
  constructor() {
    this.balance = 0;
    this.history = [];
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    const date = new Date();
    const todayGB = date.toLocaleDateString("en-GB");
    this.balance += amount;
    this.history.push({amount: "20.00", date: todayGB });
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  getHistory() {
    return `${this.history[0].date} ${this.history[0].amount}`;
  }
}

module.exports = BankAccount;
class Transaction {
  constructor() {
    this.amount = 0;
    this.date = null;
  }

  getDate() {
    return this.date;
  }

  setDate() {
    const date = new Date(Date.now());
    const todayGB = date.toLocaleDateString("en-GB");
    return todayGB;
  }

  deposit(amount) {
    if (typeof amount !== 'number') {
      throw 'Error - amount must be a valid number.'
    } else {
      this.amount += amount;
      this.date = this.setDate();
    }
  }

  getAmount() {
    return this.amount;
  }
}

module.exports = Transaction;
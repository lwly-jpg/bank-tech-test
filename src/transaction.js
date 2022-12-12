class Transaction {
  constructor() {
    this.amount = 0;
  }

  deposit(amount) {
    if (typeof amount !== 'number') {
      throw 'Error - amount must be a valid number.'
    } else {
      this.amount += amount;
    }
  }

  getAmount() {
    return this.amount;
  }
}

module.exports = Transaction;
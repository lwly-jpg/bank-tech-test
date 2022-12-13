class Transaction {
  constructor() {
    this.amount = 0;
    this.date = null;
  }

// returns date of transaction
  getDate() {
    return this.date;
  }

  // returns amount of transaction as unformatted number
  getAmount() {
    return this.amount;
  }

  // returns current date in DD-MM-YYYY (en-GB) format
  setDate() {
    const date = new Date(Date.now());
    const todayGB = date.toLocaleDateString("en-GB");
    return todayGB;
  }

  // if amount is a number, sets transaction amount and date
  processTransaction(amount) {
    if (typeof amount !== 'number') {
      throw 'Error - amount must be a valid number.'
    } else {
      this.amount += amount;
      this.date = this.setDate();
    }
  }

}

module.exports = Transaction;



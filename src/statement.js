class Statement {
  constructor() {
    this.transactions = [];
    this.formattedStatement = ['date || credit || debit || balance'];
  }

  addTransaction(type, date, amount, balance) {
    let creditAmount = null;
    let debitAmount = null;

    if (type === 'credit') {
      this.balance += amount;
      creditAmount = amount.toFixed(2);
      debitAmount = "||"
    } else if (type === 'debit') {
      this.balance -= amount;
      creditAmount = "||";
      debitAmount = amount.toFixed(2);
    }

    this.transactions.push({date: date, credit: creditAmount, debit: debitAmount, balance: balance.toFixed(2)});

  }

  formatStatement() {
    if (this.transactions.length === 0) {
      return 'No transactions in account history.';
    } else {
      for (let i = 0; i < this.transactions.length; i++) {
        this.transactions.forEach(transaction => {
          this.formattedStatement.push(`${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`)
        })
      }
      return this.formattedStatement.join("\n");
    }
  }


}

module.exports = Statement;
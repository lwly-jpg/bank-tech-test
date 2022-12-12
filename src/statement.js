class Statement {
  constructor(balance) {
    this.balance = balance;
    this.statement = [];
    this.formattedStatement = [];
  }

  addTransaction(type, date, amount) {
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

    this.statement.push({date: date, credit: creditAmount, debit: debitAmount, balance: this.balance.toFixed(2)});

  }

  formatStatement() {
    if (this.statement.length === 0) {
      return 'No transactions in account history.';
    } else {
      for (let i = 0; i < this.statement.length; i++) {
        this.statement.forEach(transaction => {
          this.formattedStatement.push(`${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`)
        })
      }
    }

    return this.formattedStatement;
  }


}

module.exports = Statement;
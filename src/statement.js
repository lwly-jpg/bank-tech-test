class Statement {
  constructor() {
    this.transactions = [];
    this.formattedStatement = ['date || credit || debit || balance'];
  }

  // checks transaction type, formats amounts and adds to list of transactions
  addTransaction(type, date, amount, balance) {
    let creditAmount = null;
    let debitAmount = null;

    if (type === 'credit') {
      this.balance += amount;
      creditAmount = amount.toFixed(2);
      debitAmount = 0;
    } else if (type === 'debit') {
      this.balance -= amount;
      creditAmount = 0;
      debitAmount = amount.toFixed(2);
    } else {
      throw 'Error - invalid transaction type.';
    }

    this.transactions.push({date: date, credit: creditAmount, debit: debitAmount, balance: balance.toFixed(2)});

  }

  // formats transactions for statement printing
  formatTransactions() {
    if (this.transactions.length === 0) {
      return 'No transactions in account history.';
    } else {
        this.transactions.forEach(transaction => {
          if (transaction.credit === 0) {
            transaction.credit = "||"
          }

          if (transaction.debit === 0) {
            transaction.debit = "||"
          }
          
          this.formattedStatement.push(`${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`)
        });
      return this.formattedStatement.join("\n");
    }
  }


}

module.exports = Statement;
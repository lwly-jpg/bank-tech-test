# Bank Tech Test

## Overview
- This is a tech test assignment completed as part of my Makers Academy full-stack software engineering bootcamp.
- The aim was to showcase the Object-Oriented Design (OOD) and Test-Driven Development (TDD) principles I've learned during the course as part of a 'take-home' tech test.

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Approach
To address the specified requirements I:
- used JavaScript to build out the program, with the Jest testing framework for TDD (100% test coverage).
- built three classes to separate concerns following the single responsibility principle:
  1. **BankAccount** - handles core account functionality, balance checks, deposits, withdraws and statement printing; 
  2. **Transaction** - creates individual transactions, consisting of a date and an amount;
  3. **Statement** - processes data to create transaction objects and formats them for statement printing;

## How to run

### Installation
([Instructions to install / update](https://github.com/nvm-sh/nvm#installing-and-updating) Node Version Manager if required)

Clone this repo locally and install all dependencies of this project:
```bash
npm install
```

### Run code
Start Node.js in the terminal from root folder:
```bash
cd bank-tech-test
node
```

Run the below in Node.js:

```javascript
// Require BankAccount class and create a new instance of it
const BankAccount = require('./src/bankAccount');
const myAccount = new BankAccount;

// Call deposit and withdraw methods
myAccount.deposit(50);
myAccount.withdraw(25);

// Call printStatement to output transaction history to terminal
myAccount.printStatement();

// E.g. output in the terminal
"date || credit || debit || balance"
"13/12/2022 || 50.00 || || || 50.00"
"13/12/2022 || || || 25.00 || 25.00"
```

### Run tests

```bash
# Run all tests
jest

# Run all tests with test coverage report
jest --coverage

# Run specific test file (e.g. bankAccount)
jest ./test/bankAccount.test.js
```
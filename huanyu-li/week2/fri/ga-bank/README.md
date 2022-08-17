# Title: ATM App
---
## Update v2.0

- update the event listener in `atm.js` 

    - v2.0: 
    Only 1 listener is required to monitor 4 buttons (Inspired by the presentation from Dee)
    ```
    $("input[type='button']").on('click',atm.getData)
    ```


    - v1.0: 
    There are 4 listeners to minitor 4 buttons, same callback function 
    ```
    $("#checking-deposit").on('click', atm.getData);
    $('#checking-withdraw').on('click', atm.getData);
    $('#savings-deposit').on('click', atm.getData);
    $('#savings-withdraw').on('click', atm.getData);
    ```


## Features

- If there is no sufficient money, ATM will show message `Insufficient` with red font color, and the message will fade out after 3.0 seconds.
- If the balance is '0', the related `div` background will change to red color.
- ATM will check if the input is valid or not: the input must be a **positive number**.

## Structure
There are two `.js` files: (`atm.js`, `bank.js`)
- `atm.js`: This is a GUI code, which contains event handlers, getting the inputs from the webpage, and display function.

- `bank.js`: This is the banking code, which contains the account balance data, and calculation logic. 

- `atm.js` sends the following data to `bank.js`
    - `account`: checking or savings 
    - `action`: deposit or withdraw
    - `amount`

- `bank.js` sends the following data to `atm.js`
    - `balance` : ```balance: { checking: 0, savings: 0, isSufficient: true } // initial state```

---

### `atm.js`
This file will ```import {balance, assignTask} from './bank.js';```

This file contains: 4 events handlers, and `atm object` which has `atm.getData() function`, and `atm.display() function`

- Event handlers
    ```
    $("input[type='button']").on('click',atm.getData)
    ```

- Functions
    - `getData()`: get the inputs information from webpage and send the `account`, `action`, `amount` data to `bank.js`. 
        - `account`: get the value by `this.id.split('-')[0]`, and the value is `checking` or `savings`
        - `action`: get the value by `this.id.split('-')[1]`, and the value is `deposit` or `withdraw`
        - `amount`: get the value by `$('#' + account + '-amount') `, then convert it to `number` data type, then check if `amount` is `NaN`, then pass the data to `bank.js` to process

    - `display(args)`:  take `balance` from `bank.js` as the arguments. Updates the webpage `atm.html` according to `balance` data.
        - If there is no sufficient money, `atm.html` will shows alert information
        - If the balance is '0', the related `div` background will change to red color.

---

### `bank.js`

This file will `export balance` Object, and `export assignTask()` function

This file contains: `balance Object`, `assignTask() function`, and `const bank Object` which has `bank.deposit() fucntion` and `bank.withdraw() function`

- `balance(Object)`: store the account balance data
    ```const balance = { checking: 0, savings: 0, isSufficient: true } // initial state```

- `assignTask()`: assign the task according to the **action**: `deposit` or `withdraw`

- `bank.deposit()`: process the deposit action
    ```
    deposit: function (account, amount) {
        bank.balance[account] += amount;
        bank.balance.isSufficient = true;
    }, // deposit
    ```

- `bank.withdraw()`: process the withdraw action
    - insufficient balance: if the `withdraw amount` > `total account balance`, set `bank.balance.isSufficient = false`

    - deduct amount from two accounts
    ```
    bank.balance[anotherAccount] -= (amount - bank.balance[account]);
    bank.balance[account] = 0;
    bank.balance.isSufficient = true;
    ```

    - deduct amount from the current account
    ```
    bank.balance[account] -= amount
    bank.balance.isSufficient = true;
    ```

---


### Type

- Lab

### Summary

- This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
- You'll be selecting elements, manipulating HTML, and manipulating style along
with building out the logic using JavaScript.

### Objectives

- DOM selection, appending, removal, updating

### Specification

- Keep track of the checking and savings balances somewhere
- Add functionality so that a user can deposit money into one of the bank accounts.
- Make sure you are updating the display and manipulating the HTML of the page
so a user can see the change.
- Add functionality so that a user can withdraw money from one of the bank accounts.
- Make sure you are updating the display and manipulating the HTML of the page
so a user can see the change.
- Make sure the balance in an account can't go negative. If a user tries to
withdraw more money than exists in the account, ignore the transaction.
- When the balance of the bank account is $0 the background of that bank account
should be red. It should be gray when there is money in the account.
- What happens when the user wants to withdraw more money from the checking
account than is in the account? These accounts have overdraft protection, so if
a withdrawal can be covered by the balances in both accounts, take the checking
balance down to $0 and take the rest of the withdrawal from the savings account.
If the withdrawal amount is more than the combined account balance, ignore it.
- Make sure there is overdraft protection going both ways.
- Are there ways to refactor your code to make it DRYer?

--- 

# Title: GA ATM App

### Summary
- This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
- You'll be selecting elements, manipulating HTML, and manipulating style along
with building out the logic using JavaScript.

### Objectives:
- DOM selection, appending, removal, updating
- code organisation: separation of concerns, i.e. _display logic_ vs. _business logic_

### Specification:

* Keep track of the checking and savings balances somewhere
* Add functionality so that a user can deposit money into one of the bank accounts.
* Make sure you are updating the display and manipulating the HTML of the page
so a user can see the change.
* Add functionality so that a user can withdraw money from one of the bank accounts.
* Make sure you are updating the display and manipulating the HTML of the page
so a user can see the change.
* Make sure the balance in an account can't go negative. If a user tries to
withdraw more money than exists in the account, ignore the transaction.
* When the balance of the bank account is $0 the background of that bank account
should be red. It should be gray when there is money in the account.
* What happens when the user wants to withdraw more money from the checking
account than is in the account? These accounts have overdraft protection, so if
a withdrawal can be covered by the balances in both accounts, take the checking
balance down to $0 and take the rest of the withdrawal from the savings account.
If the withdrawal amount is more than the combined account balance, ignore it.
* Make sure there is overdraft protection going both ways.
* Are there ways to refactor your code to make it DRYer?
* **Avoid using the DOM to store your app data! This means you should try to store the account balances in JS variables and use them to update the DOM - don't query the HTML contents of a DOM element to find out what the current account balances are!**

___

#### Separation of Concerns

Spend some time thinking about the following before you even start writing code: can you separate 

- the GUI code (event handlers for form input or buttons) 

from 

- the banking code (deposit and withdrawal between accounts, checking for overdraft etc) 

as much as possible? 

Ideally you would be able to test all the banking functions from the console, and then connect them to the GUI code with the minimum amount of overlap or points of contact. 

_These two parts of the system (display logic and business logic) should know as little as possible about each other._
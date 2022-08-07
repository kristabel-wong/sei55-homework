// ========== Backend : Bank ===============


export const balance = {
    checking: 0,
    savings: 0,
    isSufficient: true
}
// initial balance

export const assignTask = function (account, action, amount) {
    // assign the task according to the action: deposit or withdraw
    if (action === 'deposit') {
        bank.deposit(account, amount)
    } else if (action === 'withdraw') {
        bank.withdraw(account, amount)
    } else {
        console.log(account, action, amount);
    }
} // assignTask


const bank = {

    deposit: function (account, amount) {
        // deposit to the account and display on ATM

        balance[account] += amount;
        balance.isSufficient = true;

    }, // deposit

    withdraw: function (account, amount) {

        const sumOfBalance = balance['savings'] + balance['checking'];

        const anotherAccount = account === 'savings' ? 'checking' : 'savings'

        if (amount > sumOfBalance) {
            // insufficient balance
            balance.isSufficient = false;

        } else if (amount > balance[account]) {
            // deduct from 2 accounts
            balance[anotherAccount] -= (amount - balance[account]);
            balance[account] = 0;
            balance.isSufficient = true;

        } else if (amount <= balance[account]) {
            // deduct from the current account
            balance[account] -= amount
            balance.isSufficient = true;
        } else {
            //debugger
            console.log(account, currentAccountBalance);
        }
    }, // withdraw
}


console.log(`%cLet me tell thee of the days of high adventure...`, 'font-family: fantasy; font-size: 14px;');

console.log(`JavaScript Bank`);

// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank

// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
// Accounts

const deposit = function (amount){
    this.balance = this.balance + amount;
    return this.balance; 
} // deposit()

const withdraw = function (amount){
    if(this.balance >= amount){
        this.balance = this.balance - amount;
    }else {
        console.log(`insufficient funds for withdrawal`);
    }
    return this.balance;
} // withdraw()

const bank = {
    accounts: [
                {
                    name: 'Jeff Bezos',
                    balance: 140500000000,
                    withdraw: withdraw,
                    deposit: deposit,
                },
                {
                    name: 'Elon Musk',
                    balance: 255200000000,
                    withdraw: withdraw,
                    deposit: deposit,
                },
                {
                    name: 'Bill Gates',
                    balance: 106500000000,
                    withdraw: withdraw,
                    deposit: deposit,
                },

    ],
    vault: function(){
        let totalInVault = 0;
        for(let i = 0; i<bank.accounts.length ; i++){
            totalInVault = totalInVault + bank.accounts[i].balance;
        }
        return totalInVault;
    }, //vault()
    addAccount: function(name, initialDeposit){
        let newAccount = {
            name: name,
            balance: initialDeposit,
            withdraw: withdraw,
            deposit: deposit
        }
        this.accounts.push(newAccount);
        return this.accounts.length;
    }, // addAccount()
    transfer: function(sender, amount, receiver){
        let output;
        for(let i = 0; i < this.accounts.length; i++){
            if(this.accounts[i].name === sender){
                // check the sender has sufficent funds
                if(this.accounts[i].balance >= amount){
                    output = `balance after withdrawal: ${this.accounts[i].withdraw(amount)}`;
                } else {
                    return `sender has insufficient funds`;
                }
            }
        }
        for(let i = 0; i < this.accounts.length; i++){
            if(this.accounts[i].name === receiver){
                output = output + `\nTransfer of ${amount} from ${sender} to ${receiver} successful \nnew balance: ${this.accounts[i].deposit(amount)}`;    
            } 
        }
        return output;
    } // transfer()
}



// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
console.log(`the vault has $ ${bank.vault()} in it.`);
console.log(`Jeff Bezos just deposited a million : ${bank.accounts[0].deposit(1000000)}`);
console.log(`the vault has $ ${bank.vault()} in it.`);
console.log(`Luke Hammer just opened account number: ${bank.addAccount('Luke Hammer', 50)} with 50 bucks`);
console.log(`the vault has $ ${bank.vault()} in it.`);
console.log(`Jeff Bezos wants to withdraw $100 : ${bank.accounts[0].withdraw(100)}`);
console.log(`Not to be outdone, Luke also wants to withdraw $100`);
console.log(bank.accounts[3].withdraw(100));
//Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
console.log(`Jeff transfers 100 bucks to Luke : ${bank.transfer('Jeff Bezos', 100, 'Luke Hammer')}`);

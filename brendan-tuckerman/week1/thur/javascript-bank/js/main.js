// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank
// There is only one bank. This bank is an object, which contains an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

const bank = {

    accounts: [
        {
            accountNumber: 101,
            firstName: "Alice",
            lastName: "Pung",
            currentBalance: 10000,
        },

        {
            accountNumber: 202,
            firstName: "Mike",
            lastName: "Tontino",
            currentBalance: 10,
        },

        {
            accountNumber: 323,
            firstName: "Sylvia",
            lastName: "Chan",
            currentBalance: 10000,
        },


    ], //end accounts

    calculateTotalFunds: function () { //returns a total count of all the money in the bank.
        let totalFunds = 0;
        for (let i = 0; i < this.accounts.length; i++) {
            const singleAccount = this.accounts[i];
            totalFunds += singleAccount.currentBalance;
        } return totalFunds;
    },  //end calculateTotal funds

    addNewAccount: function (accountNumber, firstName, lastName, openingBalance) {
        this.accounts.push({
            accountNumber: accountNumber,
            firstName: firstName,
            lastName: lastName,
            currentBalance: openingBalance,

        })
    }, //end new account

    findIndex: function (accountNumber) { //returns an index of a customer's last name
        for (let i = 0; i < this.accounts.length; i++) {
            const singleAccount = this.accounts[i];
            if (singleAccount['accountNumber'] === accountNumber) {
                return i;
            }

        }

    },

    depositFunds: function (accountNumber, depositAmount) {
        const whichAccount = this.findIndex(accountNumber);
        //add deposit amount
        this.accounts[whichAccount].currentBalance += depositAmount;
    },

    withdrawFund: function (acccountNumber, withdrawAmount) {
        const whichAccount = this.findIndex(acccountNumber);

        //withdraw amount if it does not pass 0$
        let balance = this.accounts[whichAccount].currentBalance;
        const finalBalance = balance - withdrawAmount;
        if (finalBalance >= 0) {
            this.accounts[whichAccount].currentBalance = finalBalance; //dont know why but this does not work using 'balance'
            return true;
        } else {
            console.log(`Insufficient Funds`);
            return false;
        }
    },

    transferFunds: function (originalAccountNum, destinationAccountNum, transferAmount) {
        if (this.withdrawFund(originalAccountNum, transferAmount)) { //test if there is enough money & withdraw
            this.depositFunds(destinationAccountNum, transferAmount); //deposit the money
        } else {
            console.log(`There are insufficient funds in account ${originalAccountNum} to procceed.`);
            return;
        }

    }, //end xferfunds  




}; //end bank


//Testing

console.log(`The total number of finds in the bank is ${bank.calculateTotalFunds()}`)

//Add new account
bank.addNewAccount(499, 'James', "Joyce", 10000000)
//check that new accout was added
console.log(`The current accounts are `, bank.accounts);

//Testing how to find an index of an account using findIndex
console.log(`Testing findIndex: `, bank.findIndex(323));

//Add $1000 to Chan's account 
bank.depositFunds(323, 1000);
console.log(`Chan's account should now total $11000 `, bank.accounts[2]['currentBalance']);

//Remove $8 from Tontino's account
bank.withdrawFund(202, 8)
console.log(`Tontino's account should now total $2 `, bank.accounts[1]['currentBalance']);

//Try to withdraw $1000 from Tontino. Insufficient funds
bank.withdrawFund(202, 1000)
console.log(`Tontino's account should now be overdrawn. `);
// Tips
// Don't overthink this. Shorter code is probably the answer.

// Bonus
// Ensure that the accounts cannot have negative values. DONE

// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
//Legit xfer
bank.transferFunds(323, 101, 1000)
console.log(`Testing valid xfer. Account 101 should be 11000, Account 323 should be 10000:`, bank.accounts[0]['currentBalance'], bank.accounts[2]['currentBalance']);

//invalid xfer
console.log(`Testing invvalid xfer:`);
bank.transferFunds(202, 101, 1000)  //expect "Insufficient funds"



// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.

// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:

// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:

// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.

// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
console.log(`=========CC Validation=========`);



const makeStringIntoArray = (str) => { //there is probably a built in method for this
    finalArray = [];
    for (letters in str) {
        if (str[letters] != "-") { //remove those pesky dashes 
            finalArray.push(parseInt(str[letters])) //turns strings into numbners
        }
    } return finalArray;
}

const oneNumberTypeCheck = (arr) => {
    return new Set(Object.values(arr)).size > 1;  //is there more than one type of number?
};

const lastDigitIsEven = (arr) => {
    return arr[arr.length-1] %2 === 0
}

const isSumAboveSixteen = (arr) => {
    return arr.reduce((x,y) => x+y) > 16;
};

const areCharactersValid = (arr) =>{
    const validChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let valid = true;  //probs a shorthand way to do this
    for (let i = 0; i < arr.length; i++) {
        const character = arr[i];
        
        if (!validChars.includes(character)) {
            valid  =  false;
        } 
        
    } return valid;
};

const validateCreditCard = (creditCardNum) => {
    ccNunmberArray = makeStringIntoArray(creditCardNum); //turn string into array for easier manipulation without dashes
    return oneNumberTypeCheck(ccNunmberArray) && //checks to see whether there is more than one type of number returns true
    lastDigitIsEven(ccNunmberArray) && //checks to see if the last digit is even returns true
    isSumAboveSixteen(ccNunmberArray) && //returns true if over 16
    areCharactersValid(ccNunmberArray);

};


// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
const createCardRecord = (creditCardNum) => {
    return {
        valid : validateCreditCard(creditCardNum),
        number: creditCardNum,
    }
}

//Testing validateCC:
//Numbers for testing
const validOne = '9999-9999-8888-0000';
const validTwo = '6666-6666-6666-1666';

const invalidOneNumber = '4444-4444-4444-4444'
const invalidNotSixteen = '1111-1111-1111-1110'
const invalidCharacters =  '992c-3211-9901-b11c'


console.log(`Testing a valid CC: ${validateCreditCard(validOne)}`);


console.log(`Testing an invalid cc due to one tpye of number: ${validateCreditCard(invalidOneNumber)}`);
console.log(`Testing an invalid cc due to sum < 16 validateCreditCard: ${validateCreditCard (invalidNotSixteen)}`)
console.log(`Testing an invalid cc due to invlalid characters: ${validateCreditCard (invalidCharacters)}`)

console.log(`Testing a true and false using create CreditCard:\n `, createCardRecord(validOne) , createCardRecord(invalidOneNumber) )




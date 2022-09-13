// https://gist.github.com/textchimp/be5cff64c320d0e0aa3008db0f3bfe85

// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:

// isSquare(rect) - Returns whether the rectangle is a square or not
// area(rect) - Returns the area of the rectangle
// perimeter(rect) - Returns the perimeter of the rectangle
// const rectangle = {
//   length: 4,
//   width: 4
// };
// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.
console.log("=====Part 1=====");
const rectangle = {
    length: 4,
    width: 4
};

const isSquare = function (obj) {
    return obj.length === obj.width
} // isSquare 

const areaRectangle = function (obj) {
    return obj.length * obj.width
} // area

const perimeter = function (obj) {
    return (obj.length + obj.width) * 2
} // perimeter

//check
console.log('isSquare(rectangle)', isSquare(rectangle));
console.log('areaRectangle(rectangle)', areaRectangle(rectangle));
console.log('perimeter(rectangle)', perimeter(rectangle));

// Part 2, Triangle
// Given a triangle object like the one below, write the following functions:

// isEquilateral(tri) - Returns whether the triangle is equilateral or not
// isIsosceles(tri) - Returns whether the triangle is isosceles or not
// area(tri) - Returns the area of the Triangle
// isObtuse(tri) - Returns whether the triangle is obtuse or not
// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.
console.log("=====Part 2=====");
const triangle = {
    sideA: 3,
    sideB: 4,
    sideC: 4
};

const isEquilateral = function (obj) {
    return (obj.sideA === obj.sideB) && (obj.sideB === obj.sideC)
} // isEquilateral

const isIsosceles = function (obj) {
    return (obj.sideA === obj.sideB || obj.sideA === obj.sideC || obj.sideB === obj.sideC)
} // isIsosceles

const areaTriangle = function (obj) {
    const p = (obj.sideA + obj.sideB + obj.sideC) / 2;
    return Math.sqrt(p * (p - obj.sideA) * (p - obj.sideB) * (p - obj.sideC)).toFixed(2)
} // areaTriangle -- Heron’s Formula

const isObtuse = function (obj) {
    const maxOfTwo = function (a, b) {
        return a > b ? a : b
    } // maxOfTwo, find the max number
    const arr = Object.values(obj); // turn values into array
    const longestSide = maxOfTwo(arr[0], arr[1]) > arr[2] ? maxOfTwo(arr[0], arr[1]) : arr[2]; // find the longest side
    const index = arr.indexOf(longestSide); // find the index of the longest side in array.
    arr.splice(index, 1); // delete the longest side in array
    return Math.pow(longestSide, 2) > Math.pow(arr[0], 2) + Math.pow(arr[1], 2) // c^2 > a^2 + b^2 ?
} // isObtuse -- c^2 > a^2 + b^2

//check
console.log('isEquilateral(triangle)', isEquilateral(triangle));
console.log('isIsosceles(triangle)', isIsosceles(triangle));
console.log('areaTriangle(triangle)', areaTriangle(triangle));
console.log('isObtuse(triangle)', isObtuse(triangle));

// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// // Input
// const cartForParty = {  
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };

// // Output
// cashRegister(cartForParty); // 60.55

console.log("=====The Cash Register=====");
const cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};

const cashRegister = function (obj) {
    const arr = Object.values(obj);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]) // turn string to number
    }
    return sum
} // cashRegister

//check
console.log('cashRegister(cartForParty)', cashRegister(cartForParty));

// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank
// There is only one bank. This bank is an object, which contains an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

// Tips
// Don't overthink this. Shorter code is probably the answer.

// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.
console.log("=====JavaScript Bank=====");
const bank = {
    accounts: [
        { name: 'jack', balance: 300 },
        { name: 'nike', balance: 800 },
        { name: 'adidas', balance: 500 },
    ],

    getSum: function () {
        let sum = 0;
        for (let i = 0; i < this.accounts.length; i++) {
            sum += this.accounts[i].balance
        }
        return sum;
    }, // getSum

    addAccount: function (accObj) {
        this.accounts.push(accObj)
        return this.accounts[this.accounts.length - 1]
    }, // addAccount

    deposit: function (name, amount) {
        for (let i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].name === name) {
                this.accounts[i].balance += amount
                return this.accounts[i]
            }
        }
    }, // deposit

    withdraw: function (name, amount) {
        for (let i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].name === name && this.accounts[i].balance > amount) { // check if the balance is sufficient
                this.accounts[i].balance -= amount
                return this.accounts[i] // balance is sufficient
            } else if (this.accounts[i].name === name) {
                return (`Hello ${name}, you have insufficient balance ($${this.accounts[i].balance})`); // balance is insufficient
            }
        }
    }, // withdraw 

    getAccList: function () {
        console.log('-----Bank Account List Generating-----');
        for (let i = 0; i < this.accounts.length; i++) {
            console.log(this.accounts[i]);
        }
        console.log(`-----Bank Account List Finish-----`);
        console.log(`----------------------------------`);
    }, // getAccList --> get the bank's account list

    transfer: function (sender, sendAmount, recipient) {
        for (let i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].name === sender) {
                this.withdraw(sender, sendAmount);
                console.log(`Sender: ${sender}, after transfer balance: $${this.accounts[i].balance}`);
            };
            if (this.accounts[i].name === recipient) {
                this.deposit(recipient, sendAmount)
                console.log(`Recipient: ${recipient}, after transfer balance: $${this.accounts[i].balance}`);
            }
        }
        return `Transfer Done`
    } // transfer

}
// story:
bank.getAccList();
console.log('Total balance in bank: ', bank.getSum());
console.log('Jay open a new account: ', bank.addAccount({ name: 'jay', balance: 500 }));
console.log('Jay deposit $200', bank.deposit('jay', 200));
console.log('Jay try to withdraw $1000: ', bank.withdraw('jay', 1000));
console.log('Jay try to withdraw $500: ', bank.withdraw('jay', 500));
console.log('Nike transfer $200 to Adidas:');
console.log(bank.transfer('nike', 200, 'adidas'));
bank.getAccList();

// // Credit Card Validation
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
console.log("=====Credit Card Validation=====");
const validateCreditCard = function (str) {
    const strOriginal = str;
    str = str.replaceAll('-', '');
    const strNumb = Number(str);
    let errorMessage = '';

    const isLength = function (str) {
        errorMessage = 'wrong_length';
        return str.length === 16
    } // checkLength

    const isNumb = function (str) {
        errorMessage = 'invalid_characters';
        return Number.isInteger(strNumb)
    } // isNumb

    const isEven = function (str) {
        errorMessage = 'odd_final_number';
        return str[str.length - 1] % 2 === 0
    } // isEven

    const isGreat = function (str) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += Number(str[i])
        }
        errorMessage = 'sum_less_than_16';
        return (sum > 16)
    } // isGreat

    const isDiff = function (str) {
        let arr = [str[0]];
        for (let i = 1; i < str.length; i++) {
            if (str[i] !== str[0]) {
                arr.push(str[i])
            }
        }
        errorMessage = 'only_one_type_of_number';
        return arr.length > 1
    } // isDiff -- different: true, all same:false

    // const isValid = isGreat(str) && isNumb(str) && isEven(str) && isLength(str) && isDiff(str);
    const isValid = isLength(str) && isNumb(str) && isEven(str) && isGreat(str) && isDiff(str);

    if (isValid) {
        return {
            valid: isValid,
            number: strOriginal
        }
    } else {
        return {
            valid: isValid,
            number: strOriginal,
            error: errorMessage,
        }
    }

} // validateCreditCard

//check --> **Caution: the error message has priority
console.log('----------check valid----------');
console.log('9999-9999-8888-0000', validateCreditCard('9999-9999-8888-0000'));
console.log('6666-6666-6666-1666', validateCreditCard('6666-6666-6666-1666'));
console.log('----------check invalid--------');
console.log('a923-3211-9c01-1112', validateCreditCard('a923-3211-9c01-1112'));
console.log('4444-4444-4444-4444', validateCreditCard('4444-4444-4444-4444'));
console.log('1111-1111-1111-1110', validateCreditCard('1111-1111-1111-1110'));
console.log('6666-6666-6666-6661', validateCreditCard('6666-6666-6666-6661'));




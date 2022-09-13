
// Geometry Function Lab
// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:

// isSquare(rect) - Returns whether the rectangle is a square or not
// area(rect) - Returns the area of the rectangle
// perimeter(rect) - Returns the perimeter of the rectangle
const rectangle = {
  length: 4,
  width: 4
 };
// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, 
// and use that object to make the calculations.
//const length = rectangle.length; //get value of the length
//const width = rectangle.width; //get value to the width
const isSquare = function (rect) {
    if (rect.length === rect.width) {
    return 'It is a square'
    }
}; //function isSquare

const area = function (rect) {
    return rect.length * rect.width
} //function area

const perimeter = function (rect) {
    return (rect.length * 2) + (rect.width * 2);
}


console.log(isSquare (rectangle));
console.log(area (rectangle));
console.log(perimeter (rectangle));


// Part 2, Triangle
// Given a triangle object like the one below, write the following functions:

// isEquilateral(tri) - Returns whether the triangle is equilateral or not
// isIsosceles(tri) - Returns whether the triangle is isosceles or not
// area(tri) - Returns the area of the Triangle
// isObtuse(tri) - Returns whether the triangle is obtuse or not
const triangle = {
   sideA: 3,
   sideB: 4,
   sideC: 4
};
// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, 
// and which you will use for your calcuations.
const isEquilateral = function (tri) {
    if (tri.sideA === tri.sideB === tri.sideC) {
        return 'It is equilateral'
    } else {
        return 'It is not equilateral'
    }
}

const isIsosceles = function (tri) {
    if ((tri.sideA === tri.sideB ) || (tri.sideB === tri.sideC) || (tri.sideA === tri.sideC)) {
        return 'It is isosceles'
    } else {
        return 'It is not isosceles'
    }
}

const areaOfTri = function (tri) {
    const s = (tri.sideA + tri.sideB + tri.sideC)/2;
    return Math.sqrt(s * ((s - tri.sideA) * (s - tri.sideB) * (s - tri.sideC)));
}

const isObtuse = function (tri) {
    const squareA = Math.pow(tri.sideA);
    const squareB = Math.pow(tri.sideB);
    const squareC = Math.pow(tri.sideC);
    if (((squareA + squareB) < squareC) || ((squareB + squareC) < squareA) || ((squareA + squareC) < squareB)) {
        return 'It is obtuse'
    } else {
        return 'It is not obtuse'
    }
}

console.log(isEquilateral(triangle));
console.log(isIsosceles(triangle));
console.log(areaOfTri(triangle));
console.log(isObtuse(triangle));

// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. 
// The bank has many accounts and the following capabilities that you need to write.

// Bank
// There is only one bank. This bank is an object, which contains an array of accounts. 
// The bank needs a method that will return the total sum of money in the accounts. 
// It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. 
// There is no need to create additional functions of the bank to delete accounts, etc.

let bank = {
    accounts: [
        {name: 'Eva', balance: 300},
        {name: 'Porter', balance: 500},
    ],
    addAccount: function (oneAccount) {
        this.accounts.push(oneAccount); 
    }, // method of add account
    totalBalance: function () {
        let sum = 0;
        for (let i = 0; i < this.accounts.length; i++) {
            sum += this.accounts[i].balance;
        }
        return `Total balance is ${sum}` 
    }, //method of total balance
    deposit: function (name, amount) {
        for (let i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].name === name) {
                userAcct = this.accounts[i];
                let currentBlance = amount + userAcct.balance;
                console.log(`'Deposit successful, you current balance is ${currentBlance}.`);
            }; 
    } // for loop to find account
    }, // method of deposit
};
bank.addAccount({name: 'Mia', balance: 700});
console.log(bank.accounts);
console.log(bank.totalBalance());
console.log(bank.deposit('Mia', 500));



// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts
// Accounts have a current balance and owner's name. 
// You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.


// Bonus (not done yet)
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

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

const cartForParty = {  
       banana: "1.25",
       handkerchief: ".99",
       Tshirt: "25.01",
       apple: "0.60",
       nalgene: "10.34",
       proteinShake: "22.36"
     };

const cashRegistry = function(){
    let sum = 0;
    for (const key in cartForParty) {
        sum += Number(cartForParty.key);   
    }
    console.log(`Total: ${sum}`);
};
console.log(cashRegistry());

   


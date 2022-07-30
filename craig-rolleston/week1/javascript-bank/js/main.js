console.log("Geometry and Banks!");

// Part 1, Rectangle

// Given a rectangle object like the one below, write the following functions:

//     isSquare(rect) - Returns whether the rectangle is a square or not
//     area(rect) - Returns the area of the rectangle
//     perimeter(rect) - Returns the perimeter of the rectangle

const rectangle = {
  length: 4,
  width: 5,
};

// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.

const isSquare = function(shape) {
    if (shape.length === shape.width) {
        console.log(true);
    } else {
       console.log(false); 
    }
};
isSquare(rectangle);

const area = function() {

}




// Part 2, Triangle

// Given a triangle object like the one below, write the following functions:

//     isEquilateral(tri) - Returns whether the triangle is equilateral or not
//     isIsosceles(tri) - Returns whether the triangle is isosceles or not
//     area(tri) - Returns the area of the Triangle
//     isObtuse(tri) - Returns whether the triangle is obtuse or not

// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.




// The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
// cashRegister(cartForParty); // 60.55

let totalPrice = 0;

const cashRegister = function (shoppingCart) {

    for (const key in shoppingCart) { 
            const element = shoppingCart[key];
            
        }
}






// JavaScript Bank

// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
// Bank

// There is only one bank. This bank is an object, which contains an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.


// Accounts

// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
// Tips

// Don't overthink this. Shorter code is probably the answer.


const bestBank = {
    
    // The bank has many accounts. Accounts should be objects that all share a set of common functionality.

    clientAccounts: [ 
        { name: 'Barry', balance: 499 }, // account[0]
        { name: 'Janice', balance: 28000}, // account[1]
        { name: 'Jay-Z', balance: 13000000000}, // account[2]
    ],
    addAccount: function(accName, startingBalance) {
        const newAccount = {name: accName, balance: startingBalance};
        this.clientAccounts.push(newAccount); // this adds account
    },
    getTotalBalance: function() {
        let sum = 0;
        for (let i = 0; i < this.clientAccounts.length; i++) {
            console.log(this.clientAccounts[i].balance);
            sum += this.clientAccounts[i].balance;
        } // for total balance
        return `The total balance is ${sum}`
    },
    
};
    bestBank.addAccount('Sarah', 5000);
    console.log(bestBank.clientAccounts);
    console.log(bestBank.getTotalBalance());

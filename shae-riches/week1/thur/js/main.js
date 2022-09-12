// Geometry Function Lab

// Part 1, Rectangle

// Given a rectangle object like the one below, write the following functions:

//     isSquare(rect) - Returns whether the rectangle is a square or not
//     area(rect) - Returns the area of the rectangle
//     perimeter(rect) - Returns the perimeter of the rectangle

const rectangle = {
    length: 4,
    width: 4
  };

// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.


const isSquare = function(submittedShape) {
    if ( submittedShape.length === submittedShape.width ) {
        console.log(true)
    } else {
        console.log(false)
    }
}
isSquare(rectangle);

const quadArea = function(submittedShape) {
    const shapeArea = submittedShape.length*submittedShape.width;
    console.log(shapeArea)
}
quadArea(rectangle);

const perimiter = function(submittedShape) {
    const shapePerimiter = submittedShape.length*2 + submittedShape.width*2;
    console.log(shapePerimiter)
}
perimiter(rectangle);





// Part 2, Triangle

// Given a triangle object like the one below, write the following functions:

//     isEquilateral(tri) - Returns whether the triangle is equilateral or not
//     isIsosceles(tri) - Returns whether the triangle is isosceles or not
//     area(tri) - Returns the area of the Triangle
//     isObtuse(tri) - Returns whether the triangle is obtuse or not
// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.
// js-homework-5.md


const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function(submittedShape){
    if (submittedShape.sideA === submittedShape.sideB && submittedShape.sideA === submittedShape.sideC){
        console.log(true)
    } else {
        console.log(false)
    }
}
isEquilateral(triangle)

const isIsosceles = function(submittedShape){
    if (submittedShape.sideA === submittedShape.sideB || submittedShape.sideA === submittedShape.sideC || submittedShape.sideB === submittedShape.sideC ){
        console.log(true)
    } else {
        console.log(false)
    }
}
isIsosceles(triangle);

const triArea = function(submittedShape){
    const heronsFormulaOutput = (submittedShape.sideA + submittedShape.sideB + submittedShape.sideC)/2;
    console.log(heronsFormulaOutput)
}
triArea(triangle);


const isObtuse = function(submittedShape){
    const obtuseDetectionForumla = [
        submittedShape.sideA**2 ,
        submittedShape.sideB**2 ,
        submittedShape.sideC**2 ] 
        // 9,16,16
    if ( obtuseDetectionForumla[0] + obtuseDetectionForumla[1] < obtuseDetectionForumla[2] ||
         obtuseDetectionForumla[1] + obtuseDetectionForumla[2] < obtuseDetectionForumla[0] ||
         obtuseDetectionForumla[2] + obtuseDetectionForumla[0] < obtuseDetectionForumla[1] ){
        console.log(true)
    } else {
        console.log(false)
    }
}
isObtuse(triangle)






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

// // Output
// cashRegister(cartForParty); // 60.55
// js-homework-bank.md

let totalPrice = 0;

const cashRegister = function( shoppingCart ){
    
    for (const key in shoppingCart) {
    totalPrice += shoppingCart[key];
    }

console.log(totalPrice)
}

// console.log(cashRegister(cartForParty));


// const itemPrices = Object.values( shoppingCart ) ;
//     // console.log(itemPrices)




// JavaScript Bank

// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
// Bank

// There is only one bank. This bank is an object, which contains an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.



// debugger

const theBank = {

    accountsList : [
        
        { ownerName: " A ", accountBalance: 140} ,

        { ownerName: " B ", accountBalance: 20} 

    ],


    totalFunds: 0,

    calculateTotal: function () {
       
        for ( i = 0 ; i < this.accountsList.length-1; i++ ){
            let currentAccountBalance = this.accountsList[i].accountBalance;
            this.totalFunds += currentAccountBalance;
            
        }
        // console.log(this.totalFunds)

    },


    addAccount: function (ownerName , accountBalance) {

        const newAccount= {
            ownerName: ownerName ,
            accountBalance: accountBalance 
        }

        this.accountsList.push(newAccount);

    },

}

theBank.calculateTotal();

const theBankTotalFunds = theBank.calculateTotal();
    
theBank.addAccount( "C" , 400 );

console.log(theBank.accountsList);

console.log(theBankTotalFunds);



// addAccount()

// Accounts

// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
// Tips

// Don't overthink this. Shorter code is probably the answer.









//Bonus

//     Ensure that the accounts cannot have negative values.
//     Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

// Additional

// Begin exploring the JavaScript Koans. Fork, clone and start trying them.
// 

//Credit Card Validation

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

//     Number must be 16 digits, all of them must be numbers
//     You must have at least two different digits represented (all of the digits cannot be the same)
//     The final digit must be even
//     The sum of all the digits must be greater than 16

// The following credit card numbers are valid:

//     9999-9999-8888-0000
//     6666-6666-6666-1666

// The following credit card numbers are invalid:

//     a923-3211-9c01-1112 invalid characters
//     4444-4444-4444-4444 only one type of number
//     1111-1111-1111-1110 sum less than 16
//     6666-6666-6666-6661 odd final number

// Example

// validateCreditCard('9999-9999-8888-0000'); // Returns: true

// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.

// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }

// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
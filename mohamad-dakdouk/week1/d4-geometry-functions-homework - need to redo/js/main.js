console.log(`Geometry`);

// # Exercises: Geometry Function Lab

// Part 1, Rectangle

// Given a rectangle object like the one below, write the following functions:

// isSquare(rect) - Returns whether the rectangle is a square or not

// area(rect) - Returns the area of the rectangle
// perimeter(rect) - Returns the perimeter of the rectangle
// const rectangle = { length: 4, width: 4 };

// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.


   		
const isSquare = function (length, width){
    
        const areaRect = (length * width) / 2;
        const preimeterRect = 2 * length + 2 * width;
        const rectangle = {
            length: 4,
            width: 4,
        };
        
        if (length === width){
            console.log (`Square`);
       } else {
        console.log (`Rectangle`)
       }
    }
        isSquare(4, 4)


// Part 2, Triangle

// Given a triangle object like the one below, write the following functions:

// isEquilateral(tri) - Returns whether the triangle is equilateral or not == A = B =! C
// isIsosceles(tri) - Returns whether the triangle is isosceles or not = A = B =C
// area(tri) - Returns the area of the Triangle = Side A ^2 -(0.5 * side C)^2  (math.pow(number.expoent))
//math.sqrt() area
// isObtuse(tri) - Returns whether the triangle is obtuse or not == a / b/ or c - does not calculate 
// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.
// Raw
// js-homework-5.md


const triangle = function (sideA, sideB, sideC){
    const isEquilateral  
    const height = math.sqrt( math.pow(sideA, 2) - math.pow((sideC * 0.5), 2));
    const area = 
    const triangle = {
        sideA : 3,
        sideB: 4,
        sideC: 4,
    }
    if ()

   // console.log( Math.sqrt((Math.pow(1, 2) - Math.pow((2*0.5), 2)));
                        
                         
                         

}



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
// Raw
// js-homework-bank.md
// JavaScript Bank

// Please explain OBJECTS and KEYS again!!

const cartForParty = {  
    banana: 1.25,
    handkerchief: .99,
    Tshirt: 25.01,
    apple: 0.60,
    nalgene: 10.34,
    proteinShake: 22.36
    };
 
let cashRegister = 0;
for ( const key in cartForParty) {
  cashRegister += cartForParty[key];
};
  
  
  
//   const value of Object.values(cartForParty)){
//   sum += value;
//  };

console.log(cashRegister);






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



const bank = {
  
    accounts: [
      { name: 'jack', balance: 300 },  // bank.accounts[0]
      { name: 'mike', balance: 100 },  // bank.accounts[1]
    ],​
    addAcount: function( oneAccount){
        // const accName = {bank.accounts.name;
        // const startingBalance= bank.accounts.balance;
        // accounts.push({accName: bank.accounts.name, startingBalance: bank.accounts.balance});
        this.accounts.push(oneAccount);
        return this.accounts[this.accounts.length-1];
    }// method to add account
     // this. save you from talking from the all the object, so relative to not include bank.
     totalBalance: function (){
        let sum = 0;
        for (let i = 0; i < this.accounts.length; i++) {
            sum += this.accounts[i].balance;
            // Above shows how you add the balance you need to acces the account first. 
            
        }
        return `Total balance is ${sum}`
     }   
    }      
    console.log.addAcount({name: `Mia`, balance: 800});

    // deposit ////
    withdraw: function (name, amount){
        for (let i =0; i < this.accounts.length; i++){
            if (this.account[i].name === name && this.accounts[i].balance > amount)
        }
    }
    



    accName(`Joe`);
    startingBalance( 200);

     // const accName = accounts.name;
        // const startingBalance = accounts.name.balance;
        // for ( const key in accounts){
        //     console.log(key, accounts[key.addAcount] );

    accName(`Joe`);
    startingBalance( 200);



        for (let i = 0; i < accounts.length; i++) {
            const element = accounts[i];
            if( accName === this.accounts.name){

            }
        }

      
        // push a new object onto this.accounts  using above args
    }, // addAcount()
      
    getTotalBalance: function(){
       // loop over this.accounts and add up each [i].balance
    }, // getTotalBalance()
  ​
  }; // bank

// add accounts 
// total balance
// add deposits
// withdraw deposits
// total balance 

// Bonus

// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
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

// Get from lecture slides::::::
















// Simon Says

// Create a function in JS that takes an input and returns Simon's response as follows:

// Simon answers 'Sure.' if you ask him a question.
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
// He says 'Fine. Be that way!' if you address him without actually saying anything.
// He answers 'Whatever.' to anything else.
// The input will not contain any numbers.
// Examples:

// simonSays("Hello, how are you?"); // => "Sure."
// simonSays("Hello, how are you!"); // => "Whatever"
// simonSays(""); // => "Fine. Be that way!"
// simonSays("HEYYYYY"); // => "Woah, chill out!"

const simonSays = function (response){
    if (response.length === 0){
        console.log(`Fine. Be that way!`);
   } else if (response === indexOf(`?`)){
        console.log(`Sure`);
   } else if ( response.toUpperCase() === response){
    console.log(`Woah, chill out!`);
   } else {
    console.log(`Waiting....`)
   };
}

simonSays(`YO`)



const simonSays = function (message){
    
    // why did you add the let response, and not use message ??
    // Why did you do double 
    let response = "Whatever .";
    // for (let i = 0; i < message.length; i++) {
    //     if (message[i] === "?"){
    //         console.log('there is a question')
    //         response = "Sure"

    if (message[message.length-1] === "?"){
        response = "Sure";
    }
    else if (message.trim () === ""){
        response = "Fine. be that way";
    }
    else if (message === message.toUpperCase()){
        response = "Woah, chill out!";

    }
    else {
        response = "Whatever";
    }

}

simonSays ("")


// bonus



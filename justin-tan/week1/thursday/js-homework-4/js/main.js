// Geometry Function Lab
// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:

// isSquare(rect) - Returns whether the rectangle is a square or not

const rectOne = {
    length: 4,
    width: 4
  };
  
  const rectTwo = {
      length: 7,
      width: 3,
  }
  
  const isSquare = function (rect) {
      if (rect.length === rect.width) {
          return `Rectangle is a square`
      } else {
          return `Rectangle is not a square`
      }
  }
  
  console.log( isSquare(rectOne) )
  console.log( isSquare(rectTwo) )


// area(rect) - Returns the area of the rectangle

const area = function (rect) {
    const areaRec = rect.length * rect.width
    return areaRec
}

console.log( area(rectOne) );
console.log( area(rectTwo) );

// perimeter(rect) - Returns the perimeter of the rectangle


const perimeter = function (rect) {
    const perim = ( rect.length * 2 ) + ( rect.width * 2 )
    return perim
}  

console.log( perimeter(rectOne) );
console.log( perimeter(rectTwo) );


// const rectangle = {
//   length: 4,
//   width: 4
// };
// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.


//============================================================


// Part 2, Triangle
// Given a triangle object like the one below, write the following functions:

// isEquilateral(tri) - Returns whether the triangle is equilateral or not

const triangleOne = {
    sideA: 3,
    sideB: 4,
    sideC: 4
  };
  
const triangleTwo = {
    sideA: 5,
    sideB: 6,
    sideC: 9,
  };
  
  
const isEquilateral = function (tri) {
    if (tri.sideA === tri.sideB === tri.sideC) {
        return `It is equilateral triangle`
    } else {
        return `It is not equilateral triangle`
    }
}
  
console.log( isEquilateral(triangleOne) )
console.log( isEquilateral(triangleTwo) )


// isIsosceles(tri) - Returns whether the triangle is isosceles or not

const isIsosceles = function (tri) {
    const A = tri.sideA
    const B = tri.sideB
    const C = tri.sideC

    if ( (A === B) || (A === C) || (B === C) ) {
        return `It is isosceles triangle`
    } else {
        return `It is not isosceles triangle`
    }
}

console.log( isIsosceles(triangleOne) )
console.log( isIsosceles(triangleTwo) )


// area(tri) - Returns the area of the Triangle

const areaTri = function (tri) {
    const A = tri.sideA
    const B = tri.sideB
    const C = tri.sideC
    const S = (A + B + C) / 2  //Half of perimeter Formula
    const areaTri = Math.sqrt( S * (S - A) * (S - B) * (S - C) )
    return `Area of triangle is ${areaTri}`
}

console.log( areaTri(triangleOne) )
console.log( areaTri(triangleTwo) )


// isObtuse(tri) - Returns whether the triangle is obtuse or not

const isObtuse = function (tri) {
    //formula for identifying obtuse triangle is A*A + B*B = C*C
    const A = tri.sideA * tri.sideA
    const B = tri.sideB * tri.sideB
    const C = tri.sideC * tri.sideC
    if ( ( A + B < C) || ( A + C < B) || (B + C < A) ) { 
        return `It is an obtuse triangle`
    } else {
        return `It is not an obtuse triangle`
    }
}

console.log( isObtuse(triangleOne) )
console.log( isObtuse(triangleTwo) )


// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.


console.log( `=======================================================`)




// js-homework-5.md
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

let total = 0

const cashRegister = function (cart) {
for (const key in cart) { 
    total += parseFloat( cart[key])
    console.log(total)
    }
}

cashRegister(cartForParty)


// const cashRegister = function (cart) {

//     const itemPrice = Object.values(cart)
//     const itemPriceNum = itemPrice.map(Number)
//     console.log(itemPriceNum.length)
//     console.log(itemPriceNum)

//     let totalPrice = 0

//     for (let i = 0; i < itemPriceNum.length; i++) {
//         console.log(i)
//         // totalPrice = totalPrice + itemPriceNum[i]
//         // return totalPrice
//     }
// }

console.log( `=======================================================`)



// js-homework-bank.md
// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.


// Bank
// There is only one bank. This bank is an object, which contains an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

const bank = {

    account1: { name: "John", balance: 9000 },

    account2: { name: "Pat", balance: 40000 },

    account3: { name: "Lisa", balance: 50000},

    displayTotal: function () { //method for calculating total balance
        let sum = 0
        for (const key in bank) {
            
            const totalBalance = bank[key].balance

            sum += totalBalance
            console.log(`Total balance is ${sum}`)
        }
    },

    addAccount: function (name, balance) { //method for adding accs
        const bankKeysLength = Object.keys( bank ).length -4
        //setting account number

        const accNum = `account${bankKeysLength + 1}`
        //setting account name

        bank[accNum] = {} //creating empty account
        bank[accNum].name = name
        bank[accNum].balance = balance
    },

    withdrawals: function (accNum, amount) {
        const accBalance = bank[accNum].balance - amount
        console.log(accBalance)
        return accBalance
    },

    deposit: function (accNum, amount) {
        let accountBalance = bank[accNum].balance
        let fundBalance = accountBalance + amount
        accountBalance = fundBalance
        console.log(accountBalance)
        return accountBalance
    }
}


console.log(bank.addAccount("Paul", 3000))
console.log(bank.addAccount("Kim", 50300))


bank.withdrawals(`account2`, 5000)
bank.deposit(`account3`, 4000)

bank.displayTotal()

console.log(bank)





// const bank = {
//     account1: ["John", 23000],
//     account2: ["Lisa", 60720],
//     account3: ["Pat", 8200],
//     displayTotal: function () { //function to display total balance
//         let sum = 0
        
//         for (const key in bank) {
//         const accMoney = bank[key][1]
        
//         sum += accMoney
//         console.log(sum)

//         }
//     }
//     addAccounts: function (name, amount) {

//     }
// }

// bank.displayTotal()

// {name: }


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
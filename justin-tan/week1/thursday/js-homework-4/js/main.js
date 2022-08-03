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


const cashRegister = function (cart) {
    let total = 0
    const prices = []
    for (const key in cart) { 
        total += parseFloat( cart[key])

    }
    console.log(`The total is ${total}`)
} // end of cash register

cashRegister(cartForParty)

console.log( `=======================================================`)



// js-homework-bank.md
// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.


// Bank
// There is only one bank. This bank is an object, which contains an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.


const bank = {
    accList: [
        {name: 'Tom', balance: 5000},
        {name: 'Pat', balance: 13000},
        {name: 'Lisa', balance: 900},       
    ],

    addAcount: function (accName, startingBalance) {
        const newAcc = {name: accName, balance: startingBalance}
        this.accList.push(newAcc)
        return `New account has been created with name: ${accName}, and deposit of ${startingBalance}`
        // console.log(this.accList)
    },

    getTotalBalance: function() {
        let total = 0
        for (i = 0; i < this.accList.length; i++) {
            let accBalance = this.accList[i].balance
            total += accBalance
        }
        console.log(`Total sum of money in bank is ${total}`)
    },

    deposit: function(name, depositAmount) {
        for (i = 0; i < this.accList.length; i++) {
            let accName = this.accList[i].name
            // console.log(accName)
            let accBalance = this.accList[i].balance

            if (accName === name) {
                let newBalance = accBalance + depositAmount
                this.accList[i].balance = newBalance        
                return this.accList[i].balance  
                     
            }
        }
    },

    withdrawal: function(name, withdrawAmount) {
        for (i = 0; i < this.accList.length; i++) {
            let accName = this.accList[i].name
            let accBalance = this.accList[i].balance
            // console.log(accName)
            if (accName === name) {
                if (accBalance < withdrawAmount) {
                    return `${name} have insufficient funds`
                } else {
                    let newBalance = accBalance - withdrawAmount
                    this.accList[i].balance = newBalance        
                    return this.accList[i].balance   
                }   
            }
        }
    },

    transfer: function(nameSender, nameRecipient, transferAmount) {
        this.withdrawal(nameSender, transferAmount )
        this.deposit(nameRecipient, transferAmount)
        return `${nameSender} transferred $${transferAmount} to ${nameRecipient}`
    },

}


//Bank activity

console.log( bank.addAcount('Jon', 7500) )  //Jon created an account with deposit of 7500

console.log( bank.deposit("Tom", 500) )   //Tom deposited 500 to his account

console.log( bank.withdrawal("Jon", 4000) ) //Jon withdrew 4000 from his account

console.log( bank.withdrawal("Lisa", 5000) )   //Lisa withdrew 5000, but insufficient funds to do so

console.log( bank.transfer("Pat", "Lisa", 5000) ) //Pat transferred to Lisa 5000

console.log( bank.withdrawal("Lisa", 5000) ) // Lisa now has sufficient funds to withdraw 5000

console.log( bank.getTotalBalance() ) // Get the total amount of funds the bank now has

console.log( bank.accList) // List of account name with their respective balance



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

console.log( `=======================================================`)


// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:


const validator = {

    removeDashFromCard: function (cardNum) {        
        let numCardWithoutDash = []
        for (let i = 0; i < cardNum.length; i++) {
            // console.log(card[i])
            if (cardNum[i] !== "-") {
                numCardWithoutDash.push(cardNum[i])
            }
        }
        return numCardWithoutDash
    },
    
    convertCardNumToInt: function(card) {
        let numCard = []
        for (i = 0; i < card.length; i++) {       
            numCard.push(parseInt(card[i]))
        }
        console.log(numCard)
        return numCard
    },

    invalidChar: function(cardNumInt) {
        if ( cardNumInt.includes(NaN) ) {
            return `Invalid`
        } else {
            return `Valid`
        }
    },

    onlyOneChar: function(cardNumInt) {
        for (i = 1; i < cardNumInt.length; i++) {
            if (cardNumInt[i] !== cardNumInt[0] ) {
                return `Valid`
            } 
        }
        return 'Invalid'
    },

    sumLessThan16: function(cardNumInt) {
        let total = 0
        for (i = 0; i < cardNumInt.length; i++) {
            total += cardNumInt[i]
        }
            if (total < 16) {
                return `Invalid`
            } 
        return `Valid`
    },

    lastNumOdd: function(cardNumInt) {
        const lastDigit = cardNumInt[cardNumInt.length - 1]
        if (lastDigit % 2 === 1) {
            return `Invalid`
        }
        return `Valid`
    },

    cardValidator: function(cardNum) {
        const cardNumWithoutDash = this.removeDashFromCard(cardNum)
        const convertCardToInt = this.convertCardNumToInt(cardNumWithoutDash)
        if ( this.invalidChar (convertCardToInt) === "Valid" &&
             this.onlyOneChar (convertCardToInt) === "Valid" &&
             this.sumLessThan16 (convertCardToInt) === "Valid" &&
             this.lastNumOdd (convertCardToInt) === "Valid") {
             return `This card number ${cardNum} is valid`
             }
            
            return `This card number ${cardNum} is invalid`

    }

};


console.log (validator.cardValidator("1111-2222-3333-4444"))  // Card is valid

console.log (validator.cardValidator("1111-b222-a333-4n44"))  // Card is invalid due to invalid characters

console.log (validator.cardValidator("1111-1011-0000-0000"))  // Card is invalid due to total sum of < 16

console.log (validator.cardValidator("8888-8888-8888-8888"))  // Card is invalid due to only one number

console.log (validator.cardValidator("1111-2222-3333-4445"))  // Card is invalid due to last number being odd



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





// // console.log ( validateCreditCard("9a99-9999-8888-0000") )


console.log (" Objects Homework updated")

// Geometry Function Lab
// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:

const rectangle = {
  length: 4,
  width: 4,
};

// isSquare(rect) - Returns whether the rectangle is a square or not

const isSquare = function (rectangle) {
 if (rectangle.length === rectangle.width){
  return `It is a square with length of ${rectangle.length} and width of ${rectangle.width}.`
 } else {
  return `It is not a square`
 }
};

console.log(isSquare(rectangle))

// area(rect) - Returns the area of the rectangle
const area = function (rectangle){
  return rectangle.length * rectangle.width
};

console.log(area(rectangle))


// perimeter(rect) - Returns the perimeter of the rectangle
const perimeter = function(rectangle){
  return (2*(rectangle.length) + 2 * (rectangle.width))
}

console.log(perimeter(rectangle))

// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.
//_____________
// Part 2, Triangle
const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
// Given a triangle object like the one below, write the following functions:

// isEquilateral(tri) - Returns whether the triangle is equilateral or not
const isEquilateral = function (triangle){
  if (triangle.sideA === triangle.sideB === triangle.sideC){
    return `It is an equilateral triangle`; 
  } else {
    return `It is not an equilateral triangle`
    }
}

console.log(isEquilateral(triangle))

// isIsosceles(tri) - Returns whether the triangle is isosceles or not
const isIsosceles = function (triangle){
  if (triangle.sideA === triangle.sideB !== triangle.sideC){
    return `It is an isosceles triangle`; 
  } else if (triangle.sideA === triangle.sideC !==triangle.sideB){ 
    return `It is an isosceles triangle`; 
  } else if (triangle.sideB === triangle.sideC !==triangle.sideA){ 
    return `It is an isosceles triangle`; 
  } else {
    return `It is not an isosceles  triangle`
    }
}

console.log(isIsosceles(triangle))

// area(tri) - Returns the area of the Triangle
const areaTriangle = function (triangle){
  return (triangle.sideA*triangle.sideB*triangle.sideC)/2
};

console.log(areaTriangle(triangle))

// isObtuse(tri) - Returns whether the triangle is obtuse or not
const isObtuse = function (triangle){
  if (isIsosceles === true){
    return `It is not an obtuse triangle!`
  } else if (isEquilateral === true){
    return `It is not an obtuse triangle!`
  } else {
    return  `it is an obstuse triangle!`
  }
};

console.log(isObtuse(triangle))


// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calculations
//_______________________________________

// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// // Input
const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};


 //purpose is building a cash register for calculating totals of any object(shopping cart). 
//object.values to get the price of the items (keys)

const cashRegister = function (cart){
  // const arrayOfPrices = Object.values(cart);//gives me an array of prices in value section
  // console.log(arrayOfPrices)
  let totalPrice = 0;
    // for (let i = 0; i < arrayOfPrices.length; i++) {
    //   let priceOfItem = arrayOfPrices[i]
    //   totalPrice += Number(priceOfItem) // turn string to number; pas
    //   console.log(totalPrice);
    // }
    for (const item in cart){
      let priceOfItem = cart[item]//saving price into a variable
      console.log(priceOfItem)
      totalPrice += Number(priceOfItem) // turn string to number; pas
      console.log(totalPrice);
    }
    return totalPrice
};

  console.log(cashRegister(cartForParty))



// // Output
// cashRegister(cartForParty); // 60.55 



//_________________________________
// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.




//to do:
//1. add accounts
//2. show the total balance
//3. make some deposits and withdrawals
//4. show the new total balance.

// Bank
// There is only one bank. This bank is an object, which contains an array of accounts. 
// Tips
// Don't overthink this. Shorter code is probably the answer.

// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
const bank = {
  accounts: [
    {name: "Ben", balance: 200},//account[0]
    {name: "Kikki", balance: 100},//account[1]
    {name: "Bear", balance: 500},//account[2]
  ],
  addAccounts: function(name, balance){
    this.accounts.push( {name:name, balance:balance})//adding object type into an array
  },
  totalBalance: function (){
    let totalBalance = 0;
    for (let i = 0; i <this.accounts.length; i++) {
      const account =this.accounts[i];
      totalBalance += account.balance
    }
    return totalBalance;
  },
  deposit: function (name,amount){
    //need to loop through an array of accounts to get the account holder's name
    //need to update account's balance
    for (let i = 0; i <this.accounts.length; i++) {
      const account =this.accounts[i];
      if (account.name === name){
        account.balance += amount
        return account;
      }
    }
  },
  withdrawals: function (name,amount){
    //need to loop through an array of accounts to get the account holder's name
    //need to update account's balance
    for (let i = 0; i <this.accounts.length; i++) {
      const account =this.accounts[i];
      if (account.name === name && account.balance > amount ){
        account.balance -= amount;
        return account;
      } else if (account.name === name && account.balance < amount ){
        return `We are unable to withdraw $ ${amount} from your account that has balance of $ ${account.balance}.`
      }
    }
  },
}//bank object 
console.log(bank.totalBalance())  
console.log(bank.deposit("Kikki", 100)); 
console.log(bank.deposit("Kikki", 100)); 
console.log(bank.withdrawals ("Ben", 300)); 
  
  
  

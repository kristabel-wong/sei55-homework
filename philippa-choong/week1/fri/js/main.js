console.log (" Objects Homework")

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


const cashRegister = function (shoppingCart){
  let totalPrice = 0;
 //get each price from key. loop an object/ gives me a list of price .
  for (const itemInCart in shoppingCart){
    let priceOfCurrentItem = shoppingCart[itemInCart]
    totalPrice = totalPrice + priceOfCurrentItem
  }
  return totalPrice
};

console.log(cashRegister(cartForParty))

// totalItems

// for (const banana in object) {
//   console.log(`${property}: ${object[property]}`);
// }


// const cashRegister = function(cartForParty){
//   return (cartForParty.banana)
// }; 

// // Output
// cashRegister(cartForParty); // 60.55 


//_________________________________
// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank
// There is only one bank. This bank is an object, which contains an array of accounts. 
const bank = {
  accounts: [9000, 5000, 1000]
}
// The bank needs a method that will return the total sum of money in the accounts. 
// bank.showMeTheMoney() => 15000
//show how much money is in the bank
const showMeTheMoney = function (){
  let totalAmountInBank = 0;
  for (const accountBalance in bank.accounts){
    totalAmountInBank = totalAmountInBank + accountBalance 
  }
  return totalAmountInBank
};

console.log(showMeTheMoney(bank))

// It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.





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

// The Calculator
// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."


const squareNumber = function (aNumber) {
  const squaredResult = aNumber * aNumber;
  console.log(`The result of squaring the number ${aNumber} is ${squaredResult}`);
  return;
};

squareNumber(5)
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function (aNumber) {
  const halfedResult = aNumber / 2;
  console.log(`Half of ${aNumber} is ${halfedResult}`);
  return;
};

halfNumber(10)
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function (numberOne, numberTwo) {
  const percentResult = (numberOne / numberTwo) * 100;
  return(`${numberOne} is ${percentResult}% of ${numberTwo}`);
  
};

percentOf(4,8)

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
const areaOfCircle = function (radius) {
  const areaOfCircleResult = radius * Math.PI;
  return `The area for a circle with radius ${radius} is ${areaOfCircleResult.toFixed(2)}.`;

};

areaOfCircle(4)

// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier (i.e. those functions should return values which are used for the next step of calculations):

//2.1 Take half of the number and store the result.

const halfNumberPartTwo = function (aNumber) {
  return aNumber / 2;
}

// 2.2 Square the result of #1 and store that result.
const squareResultPartTwo = function (aNumber){
  return aNumber * aNumber; 
}

// 2.3 Calculate the area of a circle with the result of #2 as the radius.
const areaOfCirclePartTwo = function (aNumber){
  return aNumber * aNumber * Math.PI;
}
//2.4 Calculate what percentage that area is of the squared result (#3).
const percentOfPartTwo = function (aNumber){
  return aNumber * 100 + "%"
}


const partTwoSolution = function (aNumber){
  const resultOne = halfNumberPartTwo(aNumber); //5
  const resultTwo = squareResultPartTwo(resultOne); //25
  const resultThree = areaOfCirclePartTwo(resultTwo);
  const resultFour = percentOfPartTwo(resultThree);
  console.log(resultFour)
  return; 
}//

partTwoSolution(10)


//_______________________________________________________________
// js-homework-2.md
// Strings
// These exercises will test your knowledge of string function and conditionals. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// Some of these are challenging and require extra research or a good memory of the pre-work. Don't despair if you get stuck!




// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = function (anAmount){
  if (anAmount >= 1 && anAmount !== 1000000){
    console.log(`${anAmount} dollars`);
  } else if (anAmount === 1000000){
    console.log(`1000000 dollars (pinky)`);
  }
  return; 
};


// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!


const mixUp = function(stringOne,stringTwo){
  const stringOneStart = stringOne.substring(0,2);
  const stringOneEnd = stringOne.substring(2);
  const stringTwoStart = stringTwo.substring(0,2);
  const stringTwoEnd = stringTwo.substring(2);
  return `${stringTwoStart}${stringOneEnd} ${stringOneStart}${stringTwoEnd}`
   
};

console.log(mixUp("hello","lovely"))

// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

// fixStart('babble'): 'ba**le'
const fixStart = function(string){
  let alterString = string
  return string
}



// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

//   verbing('walk'): 'walking'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'




// Not Bad
// Create a function called notBad that takes a single argument, a string.

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:

//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

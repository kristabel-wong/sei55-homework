
// // //https://gist.github.com/textchimp/798d0760354f9eb7d4906e284dad9f95
// // // The Calculator

// // // Part 1

// // // Write a function called squareNr that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// const squareNr = function( inputNumber ){
//     console.log("The result of squaring the number "+ inputNumber + " is "+ (inputNumber*inputNumber));// use input number*itself or ^2
// };
// squareNr(3);

// // // // // alternative way to write above 
// // const otherSquareNumber = function(inputNumber) {
// //     const numberSquared = math.pow(inputNumber,2);
// //     console.log(`The result of squaring the number ${inputNumber} is ${numberSquared}.`);
// //     return numberSquared;
// // };
// // otherSquareNumber(3)

// // // // // Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

// const halfNumber = function(inputNumber){
//   const NumberIsHalved = inputNumber/2;
//   console.log(`Half of ${inputNumber} is ${NumberIsHalved}.`);
//   return NumberIsHalved;
// };

// halfNumber(5);


// // Alternative way of writing 
// //const halfNumber = function( aNumber ){
// //     console.log("Half of "+ aNumber + " is "+ (aNumber/2));
// // };
// // halfNumber(5);

// // // // Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

// const percentOf = function( firstNum, secondNum ){
//     console.log(firstNum+ " is " + (firstNum/secondNum*100) +"%"+ " of " +secondNum);
// };
// percentOf(2,4);


// // // // Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// // // // Bonus: Round the result so there are only two digits after the decimal.

// const areaOfCircle = function( radiusNumber ){
//     console.log("The area for a circle with radius "+radiusNumber +" is " + (Math.PI*(radiusNumber*radiusNumber)));// A = π r(^2); 
// };
// areaOfCircle(2);



// // // // Part 2
// // // // Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier (i.e. those functions should return values which are used for the next step of calculations):

// // // //Didn't use existing functions. instead created a new function to start Part 2.. sorry! Should be the same principles???
// const storePrevious = function(randoNumber){
//     result = randoNumber;
//     return result;

// };

// const sumRando = storePrevious(12);
// console.log(sumRando);

// // // // Take half of the number and store the result.

// const halfSum = (sumRando/2);
// console.log(halfSum);

// // // // Square the result of #1 and store that result.

// const squareThatNumber = (halfSum*halfSum);
// console.log(squareThatNumber);

// // // // Calculate the area of a circle with the result of #2 as the radius.

// const calculateAreaOfCircle = (Math.PI*(squareThatNumber*squareThatNumber));//A=πr^2

// console.log(calculateAreaOfCircle);


// // // // Calculate what percentage that area is of the squared result (#3).

// const percentageAndSquare = ((squareThatNumber/calculateAreaOfCircle)*100);
// console.log(percentageAndSquare);//?????hmmmmm, not sure about this?? 


// // // //the short way 
// const part2Calc = function(inputnumber){
//     const half = number / 2;
//     const square = squareNumber( half ); // call the earlier function
//     const area  = .... // area function call here 
//   };
// part2Calc()


// // // Strings
// // // DrEvil
// // // Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

// // //   DrEvil(10): 10 dollars
// // //   DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = function (amt){
  if (amt === 1000000){
    console.log((amt)+ " dollars (pinky)");
  } else 
    console.log((amt)+ " dollars");
};
DrEvil(1000000);


// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

// //this was demo'd in class, didn't get to it but need to understand 
// const mixUp = function(stringOne, stringTwo) {
//   const stringOneStart = stringOne.substring(0,2);
//   const stringOneEnd = stringOne.substring(2); // this behaves diff
//   const stringTwoStart = stringTwo.substring(0,2);
//   const stringTwoEnd = stringTwo.substring(2);
//   return `${stringTwoStart}${stringOneEnd} ${stringOneStart}${stringTwoEnd}`

// };

// console.log(mixUp("hello", "lovely"));
// The Calculator
// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.


//squareNumber function
const squareNumber = function(num) {
    const result = num * num 
    return result
} //only formulas in function

const numToSquare = 6 //set variable for editable arguments
const squareNumOne = `The result of squareing the number ${numToSquare} is ${squareNumber(numToSquare)}`; //set variable for calling function with strings
console.log(squareNumOne);



//halfNumber function

const halfNumber = function(num) {
    const result = num/2 
    return result
} //only formulas in function

const numToHalf = 23 //set variable for editable arguments
const  halfNumOne = `Half of ${numToHalf} is ${halfNumber(numToHalf)}`; //set variable for calling functions with strings
console.log(halfNumOne);



//percentOf function

const percentOf = function(num1, num2) {
    const fraction = (num1/num2).toFixed(4)
    const resultPercentage = `${fraction * 100}`
    return `${num1} is ${resultPercentage}% of ${num2}`
} //this specific function returns final result with string which will be applied for the calculator function at the last

const percentA = percentOf(12,33); //function calling
console.log(percentA);



//areaOfCircle

const areaOfCircle = function(rad) {
    const result = Math.PI * rad * rad
    return result
} //only formulas in function

const circleRad = 20 //set variable for editable arguments
const areaCircleA = `The area for a circle with radius ${circleRad} is ${areaOfCircle(circleRad)}` //set variable for calling functions with strings
console.log(areaCircleA);



// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier (i.e. those functions should return values which are used for the next step of calculations):

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).




const theCalculator = function(num) {
    const funcHalfNum = halfNumber(num) 
    //result of half number function is the given argument
    const funcSquareNum = squareNumber(funcHalfNum) 
    //result from function above input as argument for square num function
    const funcCircleArea = areaOfCircle(funcSquareNum) 
    //result from function above input as argument for circle area function
    const endResult = percentOf(funcCircleArea, funcSquareNum)
    return endResult
}

const megaCalcA = theCalculator(23);
console.log(megaCalcA);




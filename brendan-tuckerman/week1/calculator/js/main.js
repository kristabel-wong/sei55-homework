// The Calculator

// Part 1

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = ( num ) => {
    const squared = num * num;
    console.log(`The result of squaring the number ${num} is ${squared}.`)
    return squared;
}; //close squareNumber


// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = ( num ) => {
    const halved = num / 2;
    console.log (`Half of ${num} is ${halved}.`);
    return halved;
}; //close halfNumber


// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = ( firstNumber, secondNumber ) => {
    const percent = Number((firstNumber/secondNumber * 100).toFixed(2));
    console.log(`${firstNumber} is ${percent}% of ${secondNumber}`);
    return percent;
}; // close percentOf



// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
const areaOfCircle = (radius) => {
    pi = Math.PI;
    area = Number((pi * (radius * radius)).toFixed(2));
    console.log((`The area for a circle with radius 2 is ${area}`));
    return area;
}; // end areaOfCircle


// Part 2

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier (i.e. those functions should return values which are used for the next step of calculations):

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const calculateOperations = (number) => {
    const numberHalved = halfNumber(number);
    const halvedSquared = squareNumber(numberHalved);
    const squaredArea = areaOfCircle(halvedSquared);
    const percentile = percentOf(squaredArea, halvedSquared);
    return percentile;
}; //end calculate operations

//testing

const testRun = calculateOperations(5);
console.log(testRun);
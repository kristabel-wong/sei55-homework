
console.log("Function Homework");

// The Calculator
// Part 1

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
function squareNumber(numOne){
    const resultOne = numOne * numOne;
    const stringOne = `The result of squaring the number ${numOne} is ${resultOne}.`;
    console.log(stringOne);
    return resultOne;    
};// squareNumber()


// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(numTwo){
    const resultTwo = numTwo/2;
    const stringTwo = `Half of ${numTwo} is ${resultTwo}.`;
    console.log(stringTwo);
    return resultTwo;
}; // halfNumber()


// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
function percentOf(numThreeFirst, numThreeSec){
    const percentThree = (numThreeFirst / numThreeSec * 100).toFixed(1);
    const stringThree = `${numThreeFirst} is ${percentThree}% of ${numThreeSec}.`;
    console.log(stringThree);
    return percentThree;
}; //percentOf()


// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle(radiusFour){
    const areaFour = (Math.PI * (radiusFour ** 2)).toFixed(2);
    const stringFour = `The area for a circle with radius ${radiusFour} is ${areaFour}.`;
    console.log(stringFour);
    return areaFour;
}; //areaOfCircle()


// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier (i.e. those functions should return values which are used for the next step of calculations):

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

function partTwo(numPartTwo){
    const stepOne = halfNumber(numPartTwo);
    const stepTwo = squareNumber(stepOne);
    const stepThree = areaOfCircle(stepTwo);
    const stepFour = percentOf(stepThree, stepTwo);
}; //partTwo()


// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million.

function DrEvil(numDrEvil){
    if (numDrEvil === 1000000){
        const afterMillion = `${numDrEvil} dollars (pinky)`;
        return afterMillion;
    }
    else{      
        const beforeMillion = `${numDrEvil} dollars`;
        return beforeMillion;
    }
}; //DrEvil()













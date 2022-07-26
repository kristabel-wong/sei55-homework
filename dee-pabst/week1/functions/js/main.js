console.log(`Let me tell thee of the days of high adventure...`);

console.log(`The Calculator`);

// Part 1
//     Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function (num){
    console.log(`The result of squaring the number ${num} is ${num**2}.`);
return num**2;
};
squareNumber(2);
squareNumber(3);
squareNumber(4);

//     Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function(num){
    console.log(`Half of ${num} is ${num/2}`);
    return num/2;
};
halfNumber(15);
halfNumber(18);
halfNumber(666);

//     Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (numOne, numTwo){
const result = (numOne / numTwo) * 100;
return `${numOne} is ${result}% of ${numTwo}`;
};

console.log(percentOf(66,100));
console.log(percentOf(6,10));
console.log(percentOf(3599,1000000));
console.log(percentOf(1,1));
console.log(percentOf(100,1));

//     Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//     Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function(rad){
const area = 3.14 * (rad * rad);
console.log(`The area for a circle with a radius of ${rad} is ${area.toFixed(2)}.`);
return area.toFixed(2);
} 

areaOfCircle(33);
areaOfCircle(2);
areaOfCircle(170);
areaOfCircle(4000);


// Part 2

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier (i.e. those functions should return values which are used for the next step of calculations):

const partTwo = function (num){
    // Take half of the number and store the result.
    const halfTheNumber = halfNumber(num);
    // Square the result of #1 and store that result.
    const squareIt = squareNumber(halfTheNumber);
    // Calculate the area of a circle with the result of #2 as the radius.
    const calculateAreaOfCircle = areaOfCircle(squareIt);
    // Calculate what percentage that area is of the squared result (#3).
    const result = percentOf(calculateAreaOfCircle, squareIt);
    return result;
}

console.log(partTwo(5));
console.log(partTwo(7.5));
console.log(partTwo(100));



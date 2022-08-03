// <!-- # Strings

// These exercises will test your knowledge of string function and conditionals. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// **Some of these are challenging and require extra research or a good memory of the pre-work. Don't despair if you get stuck!**

// ## DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ``` -->
const drEvil = function (anAmount){
    if (anAmount > 1 && anAmount !== 1000000){
        console.log (`${anAmount} dollars`);
    } else if (anAmmount === 1000000){
        console.log(`1000000 dollars (pinky)`);
    }
    return;
};



// ## MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```

// ## FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```

// ## Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('walk'): 'walking'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```

// ## Not Bad

// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```

// # The Calculator

// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and **return** the result. It should also log a string like "The result of squaring the number 3 is 9."
// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and **return** the result. It should also log a string like "Half of 5 is 2.5.".
// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and **return** the result. It should also log a string like "2 is 50% of 4."
// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and **return** the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.

const squareNumber = function(inputNumber){
    const numberSquared = inputNumber * inputNumber;
    return numberSquared;
}

const newVariable = squareNumber(3);

console.log(`.......`)



// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier (i.e. those functions should return values which are used for the next step of calculations):
// 1. Take half of the number and store the result.
// 2. Square the result of #1 and store that result.
// 3. Calculate the area of a circle with the result of #2 as the radius.
// 4. Calculate what percentage that area is of the squared result (#3).


const part2 = function(inputNumber){
    const halvedNumber = halfNumber(inputNumber);
    const squaredHalvedNumber = squareNumber(halvedNumber);
    areaOfCircle(squaredHalvedNumber);
    percentage(areaOfCricle(squaredHalvedNumber).toFixed(2), )
}






// Variables and Primitive Data Types

// The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title. Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

const numberOfChildren = 8;
const partnerName = 'Jen';
const loc = 'Sydney';
const jobTitle = 'chimney sweep';

//const fortuneOutput = 'You will be a ' + jobTitle + 'in' + geographiclocation + ' and married to' + partnersName + 'with' + numberOfChildren;

const fortuneOutput = `You will be a ${jobTitle} in ${loc}, and married to ${partnerName} with ${numberOfChildren}`;

console.log(fortuneOutput);

console.log('........................')



// The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.


const currentYear = 2022;
const birthYear = 1999;
const ageAfterBirthday = currentYear - birthYear;
const ageBeforeBirthday = ageAfterBirthday -1; 

const ageOutput = `They are either ${ageAfterBirthday} or ${ageBeforeBirthday}`;

console.log(ageOutput);

console.log(`..............`);

// The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

const currentAge = 100;
const maxiumAge = 200;
const amountPerDay = 5;

const remainingYears = maxiumAge - currentAge;
const daysPerYear = 365.25;
const remainingDays = remainingYears * daysPerYear;
const totalSnacksRequired = remainingDays * amountPerDay;

console.log(`You will need ${totalSnacksRequired} to last you until the ripe old age of ${maxiumAge}.`);

console.log("..................");




// The Temperature Converter

// It's hot out! Let's make a converter.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."


const celsiusTemp = 47;

const farenheitEquivalentTemp = celsiusTemp * 1.8 + 32;

console.log (` ${celsiusTemp} C  is ${farenheitEquivalentTemp} F`);

console.log("..........");





















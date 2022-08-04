// // The Calculator
// // Part 1

// //Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function(inputNumber){
    const numberIsSquared = inputNumber*inputNumber;
    return numberIsSquared;
}   // closes squareNumber
// const newVariable = squareNumber(3);
// console.log('The result of squaring the'+inputNumber+' is '+newVariable+'.');
//     //OR

//     const otherSquareNumber = function(inputNumber){
//         const numberIsSquared = Math.pow(inputNumber,2);
//         console.log(`The result of squaring the number ${inputNumber} is ${numberIsSquared}.`);
//         return numberIsSquared;
//     }   // closes otherSquareNumber
// otherSquareNumber(5);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function(inputNumber){
    const numberIsHalved = inputNumber/2;
    console.log(`Half of ${inputNumber} is ${numberIsHalved}.`);
    return numberIsHalved;
}   // closes halfNumber
halfNumber(10);


// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentage = function(percentageOf , number){
    const percentageOfNumber =  (percentageOf/number)*100;
    console.log(`${percentageOf} is ${percentageOfNumber.toFixed(1)}% of ${number}.`)
    return percentageOfNumber;
}   // closes percentageOfNumber      
percentage(25 , 300);


// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function(inputRadius){
    const radiusSquared = Math.pow(inputRadius,2);
    const π = Math.PI;
    const circleArea = π*radiusSquared;
    console.log(`The area for a circle with a radius ${inputRadius} is ${circleArea.toFixed(2)}.`);
    return circleArea;
}   // closes areaOfCircle
areaOfCircle(5); 


// Part 2

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier (i.e. those functions should return values which are used for the next step of calculations):
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const part2 = function(inputNumber){
    const halvedNumber = halfNumber(inputNumber);
    const squaredHalvedNumber = squareNumber(halvedNumber);
    areaOfCircle(squaredHalvedNumber);
    percentage(areaOfCircle(squaredHalvedNumber).toFixed(2) , squaredHalvedNumber);
   
} // closesPart2
part2(45);
  

// Strings
// These exercises will test your knowledge of string function and conditionals. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// Some of these are challenging and require extra research or a good memory of the pre-work. Don't despair if you get stuck!

// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const drEvil = function(dollarAmount){
    if (dollarAmount === 1000000){
        return `${dollarAmount} dollars (pinky)`
    } else {
        return `${dollarAmount} dollars`
    }
}   // closes drEvil
drEvil(1000000);
console.log(drEvil(1000000));

// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function(stringA , stringB){
    const sliceStringA = stringA.slice(0,2);
    const sliceStringB = stringB.slice(0,2);
    const newStringA = sliceStringB + stringA.slice(2);
    const newStringB = sliceStringA + stringB.slice(2);
    return `${newStringA} ${newStringB}`
}   //closes mixUp

console.log(mixUp('horse' , 'antelope'));


// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

// if (`${remainingStringInput}`.includes(`${firstCharacter}`) ){
//     break 
// }  

// fixStart('babble'): 'ba**le'

const fixStart = function(stringInput){
    const firstCharacter = stringInput.slice(0,1);
    let remainingStringInput = stringInput.slice(1);

    while ( `${remainingStringInput}`.includes(`${firstCharacter}`) ){
        remainingStringInput = remainingStringInput.replace(/`${firstCharacter}`/ , '*');
    }   //closes while
    
    const stringOutput = firstCharacter + remainingStringInput;
    console.log(stringOutput);
    return stringOutput;
}   //closes fixStart

fixStart('babble');

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


// Exercises: if/else statements
// Which number's bigger?
// Write a function named greaterNum that:

// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

// The World Translator
// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

// The Grade Assigner
// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F" (for example, scores above 90 receive an "A", scores between 90 and 80 receive a "B", and so on).
// Call that function for a few different scores and log the result to make sure it works.



// The Pluralizer
// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different combinations of noun & number, and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
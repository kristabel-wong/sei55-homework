
console.log("Conditionals Homework");

// Which number's bigger?
// Write a function named greaterNum that:

// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(numOne, numTwo){
    if (numOne > numTwo){
        resultOne = numOne;
    }
    else{
        resultOne = numTwo;
    }
    const strOne = `The greater number of ${numOne} and ${numTwo} is ${resultOne}.`
    console.log(strOne);
    return resultOne;
}; //greaterNum()

const callOne = greaterNum(1,4);
const callTwo = greaterNum(10,3);

console.log('------------------------------------------');

// The World Translator
// Write a function named helloWorld that:

// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(lanCode){
    if (lanCode === 'es'){
        return 'Hola Mundo';
    }
    else if (lanCode === 'de'){
        return 'Hallo Welt';
    }
    else{
        return 'Hello, World';
    }

}; //helloWorld()

const callThree = helloWorld('es');
console.log(callThree);
const callFour = helloWorld('de');
console.log(callFour);
const callFive = helloWorld('en');
console.log(callFive);

console.log('------------------------------------------');

// The Grade Assigner
// Write a function named assignGrade that:

// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F" (for example, scores above 90 receive an "A", scores between 90 and 80 receive a "B", and so on).
// Call that function for a few different scores and log the result to make sure it works.

const assignGrade = function(numScore){
    if (numScore >= 90){
        return 'A';
    }
    else if(numScore >= 80){
        return 'B';
    }
    else if(numScore >= 70){
        return 'C';
    }
    else if(numScore >= 60){
        return 'D';
    }
    else{
        return 'F';
    }
}; //assignGrade()

const callSix = assignGrade(90);
console.log(callSix);
const callSeven = assignGrade(86);
console.log(callSeven);
const callEight = assignGrade(30);
console.log(callEight);

console.log('------------------------------------------');

// The Pluralizer
// Write a function named pluralize that:

// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different combinations of noun & number, and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

let outputOne;
const pluralize = function(numPlu, nounPlu){
    if (numPlu === 1 || numPlu === 0){
        outputOne = `${numPlu} ${nounPlu}`;
    }
    else if(nounPlu === 'sheep'){
        outputOne = `${numPlu} sheep`;
    }
    else if(nounPlu === 'goose' && (numPlu === 1 || numPlu === 0)){
        outputOne = `${numPlu} goose`;
    }
    else if(nounPlu === 'goose' && numPlu !== 1 && numPlu !== 0){
        outputOne = `${numPlu} geese`;
    }
    else{
        outputOne = `${numPlu} ${nounPlu}s`
    }
    return outputOne;
}; //pluralize()

const callNine = pluralize(2,'goose');
console.log(callNine);
const callTen = pluralize(3,'dog');
console.log(callTen);





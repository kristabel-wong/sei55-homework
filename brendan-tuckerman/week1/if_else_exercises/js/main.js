// Exercises: if/else statements
// Which number's bigger?
// Write a function named greaterNum that:

// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
const greaterNum = ( numOne, numTwo ) => {
    
    let message = `The greater of ${numOne} and ${numTwo} is `
    if (numOne > numTwo) {
        console.log(`${message}${numOne}.`);
        return numOne;
    } else if (numTwo > numOne) {
        console.log(`${message}${numTwo}.`);
        return numTwo;
    } else {
        return ('These numbers are equal');
    }
}; //end greaterNum

//Testing greaterNum
greaterTestOne = greaterNum(3,4);
greaterTestTwo = greaterNum(8, 5);
greaterTestThree = greaterNum(0,0);
console.log(`greaterNum tests:\n ${greaterTestOne} \n ${greaterTestTwo} \n${greaterTestThree}`);


// The World Translator
// Write a function named helloWorld that:

// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

const helloWorld = ( language ) => {
    
    switch (language){
        case 'es':
            return "Hola Mundo";
        case 'de':
            return "Hallo Welt";
        case 'ba':
            return "Hallo Dunia";
         default:
            return 'Hello World';
        };
    
}//end helloWorld

//testing helloWorld
const helloTestOne = helloWorld('es');
const helloTestTwo = helloWorld('de');
const helloTestThree = helloWorld('ba');
const helloTestNoLanguage = helloWorld();

console.log(`helloWorld tests: \n ${helloTestOne} \n ${helloTestTwo} \n ${helloTestThree} \n ${helloTestNoLanguage}.`);

// The Grade Assigner
// Write a function named assignGrade that:

// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F" (for example, scores above 90 receive an "A", scores between 90 and 80 receive a "B", and so on).
// Call that function for a few different scores and log the result to make sure it works.
const assignGrade = ( score ) => {
    if (score > 90) {
        return "A";
    } else if (75 < score && score < 89  ) {
        return "B";
    } else if (60 < score  && score < 74) {
        return "C";
    } else if (45 < score && score < 59) {
        return "D";
    } else if (score < 44) {
        return "F";
    } else {
        return 'No score submitted';
    }
}; //end of assignGrade

//assigngrade Testing
const scoresOne = assignGrade(50); // expect "D"
const scoresTwo = assignGrade(99); // expect "A"
const scoresThree = assignGrade(61); // expect "C"
const  scoresFour = assignGrade() //expect 'No score sumbitted'

console.log(`Testing for assignGrade: \n ${scoresOne} \n ${scoresTwo} \n ${scoresThree} \n ${scoresFour}`);

// The Pluralizer
// Write a function named pluralize that:

// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different combinations of noun & number, and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

const pluralizeThat = (noun, num) => {
    
   

    if (num === 1 || noun === "deer") { //too much hardcoding
        return num + " " + noun + ".";
    
    } else if (noun === "goose" && num > 1) {
        return num + " geese."
    } else if (noun === "mouse") {
        return num + " mice.";
    } else if (num > 1){
        return num + " " + noun + "s."
    };  
    


}; //end of pluralise that


// pluraliseThat tests
const deerTest = pluralizeThat("deer", 10); //expect "10 Deer"
const oneGooseTest = pluralizeThat("goose", 1) //expect "1 goose";
const twoGooseTest = pluralizeThat("goose", 2) //expect "2 geese."
const pigTest = pluralizeThat("pig", 100) // expect 100 pigs.

console.log(`pluraliseThat tests: \n ${deerTest} \n ${oneGooseTest} \n ${twoGooseTest} \n${pigTest}`);


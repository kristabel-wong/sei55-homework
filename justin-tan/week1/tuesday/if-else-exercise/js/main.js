
// Exercises: if/else statements
// Which number's bigger?
// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

const greaterNum = function(num1, num2) {
    if (num1 > num2) {
        return `The greater number of ${num1} and ${num2} is ${num1}`
    } else {
        return `The greater number of ${num1} and ${num2} is ${num2}`
    }
}

const firstGreaterNum = greaterNum(4,10);
const secondGreaterNum = greaterNum(10,5);



// The World Translator
// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

const helloWorld = function(lang) {
    if (lang === "es") {
        return "Hola Mundo"
    } else if (lang === "fr") {
        return "Bonjour le monde"
    } else if (lang === "th") {
        return "สวัสดีชาวโลก" 
    } else {
        return "Hello World"
    }
}

//set variable for each argument
const langSpanish = helloWorld("es");
const langFrench = helloWorld("fr");
const langThai = helloWorld("th");
const langOthers = helloWorld("");

//log command
console.log(langSpanish);
console.log(langFrench);
console.log(langThai);
console.log(langOthers);


// The Grade Assigner
// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F" (for example, scores above 90 receive an "A", scores between 90 and 80 receive a "B", and so on).
// Call that function for a few different scores and log the result to make sure it works.

const assignGrade = function(numScore) {
    if (numScore > 90) {
        return "A"
    } else if (numScore < 90 && numScore > 80) {
        return "B"
    } else if (numScore < 80 && numScore > 70) {
        return "C"
    } else if (numScore < 70 && numScore > 60) {
        return "D"   
    } else {
        return "F"
    }
}

//set variable for each argument
const resultOne = assignGrade(99);
const resultTwo = assignGrade(87);
const resultThree = assignGrade(75);
const resultFour = assignGrade(61);
const resultFive = assignGrade(53);

//log command
console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);
console.log(resultFour);
console.log(resultFive);


// The Pluralizer
// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different combinations of noun & number, and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

const pluralizer = function (animalNoun, number) {
    const singleAnimal = `${number} ${animalNoun}` // variable for just one amount of an animal
    
    if (animalNoun === "mouse" && number > 1) { //start line for collective noun
        return `${number} mice` 
    } else if (animalNoun === "mouse" && number === 1) {
        return singleAnimal  
    } else if (animalNoun === "wolf" && number > 1) {
        return `${number} wolves`
    } else if (animalNoun === "wolf" && number === 1) { //end line for collective noun
        return singleAnimal
    } else if (number > 1) {
        return `${number} ${animalNoun}s`
    } else if (number < 1) {
        return singleAnimal
    }
}

//set variable for each argument
const pluralOne = pluralizer("cow", 8);
const pluralTwo = pluralizer("snake", 1);
const pluralThree = pluralizer("mouse", 3);
const pluralFour = pluralizer("mouse",1);
const pluralFive = pluralizer("wolf", 9);
const pluralSix = pluralizer("wolf", 1)

//log command
console.log(pluralOne);
console.log(pluralTwo);
console.log(pluralThree);
console.log(pluralFour);
console.log(pluralFive);
console.log(pluralSix);


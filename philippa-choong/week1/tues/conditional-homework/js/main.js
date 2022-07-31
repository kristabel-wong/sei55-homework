// Exercises: if/else statements
// Which number's bigger?
// Write a function named greaterNum that:

// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
const greaterNumber = function (numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return(`The greater number of ${numberOne} and ${numberTwo} is ${numberOne}.`);
  } else {
    return(`The greater number of ${numberOne} and ${numberTwo} is ${numberTwo}.`);
  }
  
}; //greaterNumber()

console.log(greaterNumber(4, 2));
console.log(greaterNumber(1, 5));

// The World Translator
// Write a function named helloWorld that:

// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

const helloWorld = function (aLanguageCode) {
  if (aLanguageCode === "es") {
    return("Hello, World");
  } else if (aLanguageCode === "de") {
    return("Hello, World");
  } else if (aLanguageCode === "en") {
    return("Hello, World");
  }
};
helloWorld("es");
helloWorld("de");
helloWorld("en");

// The Grade Assigner
// Write a function named assignGrade that:

// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F" (for example, scores above 90 receive an "A", scores between 90 and 80 receive a "B", and so on).
// Call that function for a few different scores and log the result to make sure it works.
const assignGrade = function (aNumberScore) {
  if (aNumberScore < 90) {
    return("Grade A");
  } else if (aNumberScore < 80) {
    return("Grade B");
  } else if (aNumberScore < 70) {
    return("Grade C");
  } else if (aNumberScore < 50) {
    return("Grade D");
  } else if (aNumberScore < 40) {
    return("Grade F");
  }
  ;
};

console.log(assignGrade(79));
console.log(assignGrade(58));


// The Pluralizer
// Write a function named pluralize that:

// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different combinations of noun & number, and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

const pluralize = function (aNoun, aNumber) {
  if (aNumber === 1) {
    return(`${aNumber} ${aNoun}`);
  } else if (aNumber > 1 && aNoun !== "sheep" && aNoun !== "goose") {
    return(`${aNumber} ${aNoun}s`);
  } else if (aNoun === "sheep" && aNumber >= 2) {
    return(`a flock of sheeps`);
  } else if (aNoun === "goose" && aNumber >= 2) {
    return(`a gaggle of geese`);
  }
  
};

console.log(pluralize("sheep", 5));
console.log(pluralize("cat", 1));
console.log(pluralize("dog", 5));
console.log(pluralize("goose", 4));

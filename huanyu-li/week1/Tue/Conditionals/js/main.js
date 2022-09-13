// Formating output
const printDividingLine = function (title) {
    console.log(`----------${title}----------`)
};

// Which number's bigger?
// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

printDividingLine("Which number's bigger?");
const greaterNum = function (numb1, numb2) {
    return numb1 > numb2 ? numb1 : numb2;
}

const callGreaterNum1 = greaterNum(10, 30);
console.log(1, `The greater number of 10 and 30 is ${callGreaterNum1}.`);

const callGreaterNum2 = greaterNum(50, 20);
console.log(2, `The greater number of 50 and 20 is ${callGreaterNum2}.`);



// The World Translator
// Write a function named helloWorld that:

// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.
printDividingLine("The World Translator");
const helloWorld = function (arg = 'en') {
    if (arg === 'en') {
        return 'Hello, World';
    } else if (arg === 'es') {
        return 'Hola Mundo';
    } else if (arg === 'de') {
        return 'Hallo Welt';
    } else {
        return 'Sorry the language is not supported';
    }
}

console.log('en: ', helloWorld('en'));
console.log('es: ', helloWorld('es'));
console.log('de: ', helloWorld('de'));
console.log('default: ', helloWorld());

// The Grade Assigner
// Write a function named assignGrade that:

// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F" (for example, scores above 90 receive an "A", scores between 90 and 80 receive a "B", and so on).
// Call that function for a few different scores and log the result to make sure it works.

printDividingLine("The Grade Assigner");
const assignGrade = function (arg) {
    if (arg > 90) {
        return 'A'
    } else if (arg >= 80) {
        return 'B'
    } else if (arg >= 70) {
        return 'C'
    } else if (arg >= 60) {
        return 'D'
    } else {
        return 'F'
    }
}
console.log(95, assignGrade(95));
console.log(80, assignGrade(80));
console.log(79, assignGrade(79));
console.log(64, assignGrade(64));
console.log(55, assignGrade(55));

// The Pluralizer
// Write a function named pluralize that:

// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different combinations of noun & number, and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
printDividingLine("The Pluralizer");
const pluralize = function (noun, numb) {
    if (numb > 1) {
        if (noun === 'sheep' || noun === 'geese') {
            return numb + " " + noun
        } else {
            return numb + " " + noun + "s"
        }

    } else {
        return numb + " " + noun
    }
};
console.log(pluralize(`dog`, 1));
console.log(pluralize(`cat`, 5));
console.log(pluralize('sheep', 3));
console.log(pluralize('geese', 6));
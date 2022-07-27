console.log(`Let me tell thee of the days of high adventure...`);
console.log(`Exercises: if/else statements`);

// Which number's bigger?
// Write a function named greaterNum that:
//     takes 2 arguments, both numbers.
//     returns whichever number is the greater (higher) number.
//     Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

const greaterNum = function (numOne, numTwo){
    let result;
    if(numOne > numTwo ){
        result = `The greater number of ${numOne} and ${numTwo} is ${numOne}.`;
    } else if( numOne < numTwo){
        result = `The greater number of ${numOne} and ${numTwo} is ${numTwo}.`;
    } else {
        result = `I can't decide which is the greater number of ${numOne} and ${numTwo}.`;
    }
    return result;
};

console.log(greaterNum(1,2));
console.log(greaterNum(2,2));


console.log(`The World Translator`);

// Write a function named helloWorld that:
//     takes 1 argument, a language code (e.g. "es", "de", "en")
//     returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
//     Call that function for each of the supported languages and log the result to make sure it works.

const helloWorld = function(languageCode){
let greeting;
    if(languageCode === 'en'){
        greeting = `Hello, world`;
    } else if (languageCode === 'de'){
        greeting = `Hallo, Welt`;
    } else if (languageCode === 'fr'){
        greeting = `Bonjour, le monde`;
    } else if (languageCode === 'ru'){
        greeting = `Privet, mir`;
    } else {
        greeting = `I don't know that language code. Try another.`;
    }
    return greeting
};

console.log(helloWorld('en'));
console.log(helloWorld('fr'));
console.log(helloWorld('de'));
console.log(helloWorld('ru'));

console.log(`The Grade Assigner`);

// Write a function named assignGrade that:
//     takes 1 argument, a number score.
//     returns a grade for the score, either "A", "B", "C", "D", or "F" (for example, scores above 90 receive an "A", scores between 90 and 80 receive a "B", and so on).
//     Call that function for a few different scores and log the result to make sure it works.

const assignGrade = function (score){
    let grade;
    if(score > 100){
        grade = `F`; // cheated!
    } else if (score >= 90 && score <= 100){
        grade = `A`;
    } else if (score >= 80 && score < 90){
        grade = `B`;
    } else if (score >= 70 && score < 80){
        grade = `C`;
    } else if (score >= 60 && score < 70){
        grade = `D`;
    } else if (score < 60){
        grade = `F`
    }
    return `Your score ${score}%, has earned you a grade of ${grade}.`
};

console.log(assignGrade(59));
console.log(assignGrade(60));
console.log(assignGrade(61));
console.log(assignGrade(79));
console.log(assignGrade(80));
console.log(assignGrade(81));
console.log(assignGrade(100));
console.log(assignGrade(101)); //boundary testing :)

console.log(`The Pluralizer`);

// Write a function named pluralize that:

//     takes 2 arguments, a noun and a number.
//     returns the number and pluralized form, like "5 cats" or "1 dog".
//     Call that function for a few different combinations of noun & number, and log the result to make sure it works.
//     Bonus: Make it handle a few collective nouns like "sheep" and "geese".

const pluralize = function (noun, number){
  let suffix = ``;
  let animal = noun;
  if (noun === `sheep`|| noun === `fish` || noun === `deer` || noun === `moose`){
    
    }else if(noun === `goose` && number > 1){
    animal = `geese`;
    }else if(number > 1 || number === 0){
    suffix = `s`
  }
  return number +` `+ animal + suffix;
}

console.log(pluralize(`dog`, 2));
console.log(pluralize(`cat`, 1));
console.log(pluralize(`fish`, 0));
console.log(pluralize(`bird`, 10));
console.log(pluralize(`whale`, 2));
console.log(pluralize(`goose`, 1));
console.log(pluralize(`goose`, 2));

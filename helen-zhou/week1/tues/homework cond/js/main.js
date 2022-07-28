// // https://gist.github.com/textchimp/cf6a0f5babb2e86c21204b08d27b347b
//Exercises: if/else statements
// // Which number's bigger?
// // Write a function named greaterNum that:

// // takes 2 arguments, both numbers.
// // returns whichever number is the greater (higher) number.
// // Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

// const greaterNum = function(num1, num2){
//   if (num1 > num2) {  
//     return num1;
//   } else {  
//     return num2;
//   }
// };

// console.log(greaterNum(5,10))
// console.log(greaterNum(15,7))


// // // The World Translator
// // // Write a function named helloWorld that:

// // // takes 1 argument, a language code (e.g. "es", "de", "en")
// // // returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// // // Call that function for each of the supported languages and log the result to make sure it works.


// const helloWorld = function (language) {
//   if (language === 'ge'){
//     return 'Hallo Welt';
//   } else if (language === 'fr') {
//     return 'Bonjour le monde';
//   } else {
//     return "Hello World";
// }
// };

// console.log(helloWorld('ge'));
// console.log(helloWorld('fr'));
// console.log(helloWorld('en'));


// // The Grade Assigner
// // Write a function named assignGrade that:

// // takes 1 argument, a number score.
// // returns a grade for the score, either "A", "B", "C", "D", or "F" (for example, scores above 90 receive an "A", scores between 90 and 80 receive a "B", and so on).
// // Call that function for a few different scores and log the result to make sure it works.

// const assignGrade = function(numScore) {
//     if (numScore > 90) {
//       return 'A'; 
//     } else if (numScore > 80) {
//       return 'B';
//     } else if (numScore > 70) {
//       return 'C';
//     } else if (numScore > 60) {
//       return 'D';
//     } else {
//       return 'F';
//     }
// };
// console.log(`Your grade is 55 is ${assignGrade(55)}`);
// console.log(`Your grade is 60 is ${assignGrade(60)}`);
// console.log(`Your grade is 91 is ${assignGrade(91)}`);




// // The Pluralizer
// // Write a function named pluralize that:

// // takes 2 arguments, a noun and a number.
// // returns the number and pluralized form, like "5 cats" or "1 dog".
// // Call that function for a few different combinations of noun & number, and log the result to make sure it works.
// // Bonus: Make it handle a few collective nouns like "sheep" and "geese".

const pluralize = function (aNoun, aNumber) {
  if (aNumber === 1 || aNoun === 'deer' || aNoun === 'geese'|| aNoun === 'sheep'|| aNoun === 'fish') {  
      return aNumber + ' ' + aNoun;
  } else {  
      return aNumber + ' ' + aNoun + 's';
  }

}; 

console.log(`I have ` + pluralize('dog', 1));
console.log(`I have ` + pluralize('fish', 4));
console.log(`I have ` + pluralize('cat', 4));

// Strings

// These exercises will test your knowledge of string function and conditionals. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// Some of these are challenging and require extra research or a good memory of the pre-work. Don't despair if you get stuck!

// DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
const DrEvil = (amount) => {
    if (amount === 1000000) {
        return `${amount} dollars (pinky)`;
    } else {
        return `${amount} dollars.`
    }
}; //end DrEvil

//testing 
const evilTest = DrEvil(100);
const trulyEvil = DrEvil(1000000);
console.log(`Evil test: ${evilTest}`);
console.log(`Truly evil test: ${trulyEvil}`);



// MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = (stringOne, stringTwo) => {
    const firstLetterOne = stringOne[0]; //id first letter of string 1
    const firstLetterTwo = stringTwo[0]; //id first letter of string 2
    const sliceOne = firstLetterTwo + stringOne.slice(1); //'cut out' remiander and add 1st letter
    const sliceTwo = firstLetterOne + stringTwo.slice(1); //cut out' remainder and add 1st letter
    return sliceOne + " " + sliceTwo; 
}; // end of mixUp

//mixUp testing
const testStringOne = "Bad";
const testStringTwo = "Fish";
const mixTest = mixUp(testStringOne, testStringTwo);
console.log(`mixTest result: ${mixTest}`);


// FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

// fixStart('babble'): 'ba**le'
const fixStart = ( str ) => {
    let newWord = ""; //establish empty string to be returned
    newWord += str[0]; //add the first letter to the final string
    for (let i = 1; i < str.length; i++) { //iterate over remaining letters
        if (str[i] !== str[0]) {
            newWord += str[i];
        } else {
            newWord += '*'; //change to * if letter is same as initial letter
        };
    }; return newWord;
}; //end of fixStart

//testing fixStart
const fixStartTest = fixStart('bobby');
console.log(`fixStart test: ${fixStartTest}`);


// Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

//   verbing('walk'): 'walking'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

const verbing = ( str ) => {
    if (str.length < 3) {
        return str;
    } else {
        if (str.slice(str.length - 3, str.length) === 'ing') { //identify -ing words
            return str + 'ly'; //add +ly
        } else {
            return str + 'ing'; //add +ing
        }

    }

}; //end of verbing

//Testing verbing
const verbTestOne = verbing("go");
const verbTestTwo = verbing("jumping");
const verbTestThree = verbing("sleep");

console.log(`Verb test one: ${verbTestOne}`);
console.log(`Verb test two: ${verbTestTwo}`);
console.log(`Verb test three: ${verbTestThree}`);


// Not Bad

// Create a function called notBad that takes a single argument, a string.

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:

//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

const notBad = ( str ) => {
    const notLocation = str.search("not");
    const badLocation = str.search("bad");

    if (notLocation < badLocation && notLocation != -1) { //bad follows not, so replace with good
        let cutString = str.slice(0, notLocation); //cut out everything up to not
        cutString += "good!";
        return cutString;
    } else { //p.s. -1 is not found in .search()
        return str;
    };
}; //end notBad

//notBad testing
const notBadTestOne = notBad('This dinner is not that bad!');
const notBadTestTwo = notBad('This movie is not so bad!');
const notBadTestThree = notBad('This dinner is bad!')

console.log(notBadTestOne);
console.log(notBadTestTwo);
console.log(notBadTestThree);

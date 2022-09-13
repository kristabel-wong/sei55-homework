// Strings
// These exercises will test your knowledge of string function and conditionals. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// Some of these are challenging and require extra research or a good memory of the pre-work. Don't despair if you get stuck!

// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const drEvil = function(money) {
    if (money === 1000000) { // only 1mil figure will show pinky
        return `${money} dollars (pinky)`
    } else {
        return `${money} dollars`
    }
}

console.log( drEvil(1000000) );
console.log( drEvil(4923) );



// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function(word1, word2) {
    const word1FirstTwo = word1.slice(0,2)  //extract word1 first 2 letter
    const word2FirstTwo = word2.slice(0,2)  //extract word2 first 2 letter
    const word1AfterFirstTwo = word1.slice(2)  //extract after first 2 word1 letters
    const word2AfterFirstTwo = word2.slice(2)  //extract after first 2 word2 letters
    return `${word2FirstTwo}${word1AfterFirstTwo} ${word1FirstTwo}${word2AfterFirstTwo}`   //concat them together
}

const test = mixUp("Jon", "Snow");
console.log(test)


// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

// fixStart('babble'): 'ba**le'

const fixStart = function(word) {

}



// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

//   verbing('walk'): 'walking'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

const verbing = function(word) {
    if (word.slice(-3) === "ing") {
        return word.concat("ly")
    } else if (word.length >=3) {
        return word.concat("ing") 
    } else if (word.length < 3) {
        return (word)
    }
}

const testWordOne = verbing("running");
const testWordTwo = verbing("eat");
const testWordThree = verbing("ah");

console.log(testWordOne);
console.log(testWordTwo);
console.log(testWordThree);



// Not Bad
// Create a function called notBad that takes a single argument, a string.

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:

//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
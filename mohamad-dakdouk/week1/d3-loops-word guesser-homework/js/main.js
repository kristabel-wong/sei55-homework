
// # Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').

// const hangman = ["\_","F", "O", "X"];
// const guess = ("\_", "\_", "\_");
// console.log( hangman);



// // - Write a function called guessLetter that will:

// const guessLetter = function (){


// }


// Need a line of code that will compare, then if it matches to the letters it "pops" out the letters of the guess game

// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.

// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

// ---

// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

console.log(`simple answer`);

const secretWord = [`F`, `O`, `X`];
const guessedLetters = [`_`, `_`, `_`];

const guessLetter = function (letter) {
FOR (let i = 0; i< secretWord.length ; i++){
    if(secretWord[i] === letter){

        guessedLetters[i] = letter;
    }
}
let guessProgress = ``;
for (let i =0 ; i < guessedLetters.length; i++){
    guessProgress = guessProgress + guessedLetters[i];

}
console.log (guessProgress);
if(guessedLetters.includes(`_`) === false){
    console.log(`You win. `)

}

};

guessLetters (`O`);













// Warmup: Leap Years

// Write a function that will take any given year and return a boolean value, whether it is a leap year or not. Remember that a leap year is:

// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!
// How to structure it - we want a custom function called isLeapYear which returns true or false.

// Below 

// function isLeapYear (year1) {
//    const leapYear = year1 / 4;
//    const leapHund = year1 / 100;
//    const leapFour = year1 / 400;
//     if ( leapYear % 2 == 0){
//     } else if ( leapHund % 2 !== 0){
//     } else if ( leapFour % 2 == 0 ){
//     console.log ( `${year1} is a leap year`)
//     } else {
//         console.log(`${year1} is not a leap year`)
//     }

// }
// isLeapYear(0);

// Answer

const isDivisbleBy = function(num, divisor){
    return num % divisor === 0;
}

const isLeapYears = function (year) {

    if (isDivisbleBy (year, 4)) {
        // also not divisible by 100 OR divisble by 400
        if (!isDivisbleBy(year, 100) || isDivisbleBy(year. 400))
        {
            return true
        }
    }
}

onsole.log(1997, isLeapYears(1997))
console.log(1996, isLeapYears (1996))


// another short example

const isLeap2 = function (year) {
if ( (year % 4 === 0) && ((year % 100 !==0) || (year % 400 === 0))) {
    return true;
} else {
    return false;
}
};

console.log (1990)


const isLeapYears = function (year){
    if (year % 4 === 0) { //divisiable by 4
        if ( year % 100 !== 0 || year % 400 ===0 ) {
            return true
        }
        return false
    }
}

console.log(1997, isLeapYears(1997))
console.log(1996, isLeapYears (1996))



// Solution from Luke OFFICAL
// # Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').

// # Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').

const secretWordLetters = [`T`, `E`, `S`,`T`];
const guessedLetters = [`_`, `_`, `_`, `_`];



// // - Write a function called guessLetter that will:

// const guessLetter = function (){

const guessLetter = function( userGuess){

    console.log(`in guessLetter(), argument userGuess = ${userGuess}`);

// We need to make sure to track our progress. Use this variable to remember what happens in the loop, overall - any matches 
let correctGuessMode = false;

// - Take one argument, the guessed letter.
// - Iterate through the word letters and 

    for (let i = 0; i < secretWordLetters.length; i++) {

        // this below part is what confuses me but just look at what it replaces..... 
        const currentSecretLetter = secretWordLetters[i];
        console.log(i, `currentSecretLetter: ${currentSecretLetter}`);  
      
        //  see if the guessed letter is in there.
        if (currentSecretLetter === userGuess){
            console.log(`Match`);

     // - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
            guessedLetters [i] = userGuess;
    // The below basically shows you what the update is, as the Guess is was used and the GussedLetters should have been updated..
            console.log(`correct guess for ${userGuess}! ${guessedLetters}`);

            correctGuessMode = true;
            // break function will stop double T for being used, instead two seperate guesses. 
       // break;

        } 
        
        // This else is not good as it can give you a false negative. 
        // else {
        //     console.log (`Incorrect guess for ${userGuess}`);
        // }
            if ( correctGuessMode === false){
                console.log(``);
            }
            
    };

// Need a line of code that will compare, then if it matches to the letters it "pops" out the letters of the guess game


    console.log(`Current game state: ${guessedLetters}`);

};

guessLetter( `E`);






// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.

// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.




// // - Write a function called guessLetter that will:

// const guessLetter = function (){


// }


// Need a line of code that will compare, then if it matches to the letters it "pops" out the letters of the guess game

// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


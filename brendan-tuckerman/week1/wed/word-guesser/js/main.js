// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
console.log("=======GUESSLETTER=======");
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

//testing Arrays
const lettersOfSecretWord = ["q", "u", "i", "x", "o", "t", "i", "c"];
const lettersGuessed = [ "_", "_", "_", "_", "_","_","_","_", ];

// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
 const guessLetter = ( guess ) => {
   
    if (lettersOfSecretWord.includes( guess )) { //is the letter somewhere in the word? 
        
        for(let i = 0; i < lettersOfSecretWord.length; i++) { // then iterate over the letters and display correct guesses      
            if (lettersOfSecretWord[i] === guess){ //change the blank to the letter if correct.
                lettersGuessed[i] = guess;
                console.log(`Correct! ${lettersGuessed}`);  
                } 
            } 
            
    } else { //handle wrong answer
        console.log( `There is no ${guess} in the word. Try again.` )
    }
        
    if(!lettersGuessed.includes( "_" )) { //check if game has been won.
        const finalWord = lettersGuessed.join("");
        return(`Congratulations, you win. The word was "${finalWord}"`)
    }

    
 }; //end guessLetter

//guessLetter testing
const guessTestOne  = guessLetter('x') //expect  [ "_", "_", "_", "x", "_","_","_","_", ];
const guessTestTwo  = guessLetter('b'); //expect  [ "_", "_", "_", "_", "_","_","_","_", ];

console.log(`A guess of 'x' returns: ${guessTestOne}`); //expect  [ "_", "_", "_", "x", "_","_","_","_", ];
console.log(`A guess of 'b' returns: ${guessTestTwo}`); //expect undefined

guessLetter('q'); //solve the puzzle
guessLetter('u');
guessLetter('i');
guessLetter('o');
guessLetter('t');
guessLetter('i'); 
console.log(guessLetter('c')); //expect win game message


// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
console.log('============WHEEL OF FORTUNE ==========');
//global variables
const wheelWord = ["t", "i", "m", "e"];
const wheelGuesses = ["_", "_", "_" , "_"];
let reward = 0;

const wheelOfFortune = ( guess ) => {
    const randomReward = Math.floor(Math.random() * 100);
   
    if (wheelWord.includes( guess )) { //is the letter somewhere in the word? 
        
        for(let i = 0; i < wheelWord.length; i++) { // then iterate over the letters and display correct guesses      
            if (wheelWord[i] === guess){ //change the blank to the letter if correct.
                wheelGuesses[i] = guess;
                reward += randomReward;
                console.log(`Correct! You win $${randomReward}, and your total is ${reward}.  ${wheelGuesses}`);  
            } 
        } //end for
            
    } else { //handle wrong answer
        reward -= randomReward;
        console.log( `There is no ${guess} in the word. You lose $${randomReward}, and your total is ${reward}.` )
    }
        
    if(!wheelGuesses.includes( "_" )) { //check if game has been won.
        const finalWord = wheelGuesses.join("");
        
        console.log(`Congratulations, you win. The word was "${finalWord}". You win a total of $${reward}`);
        reward = 0;
        return reward; //is this needed?
    }

    
 }; //end guessLetter

//guessLetter testing
const wheelTestOne  = wheelOfFortune('m') //expect  [ "_", "_", "m", "_"] + reward +
const wheelTestTwo  = wheelOfFortune('b'); //expect  [ "_", "_", "m", "_"] + reward -

console.log(`A guess of 'm' returns: ${wheelTestOne}`); //expect  [ "_", "_", "_", "x", "_","_","_","_", ];
console.log(`A guess of 'b' returns: ${wheelTestTwo}`); //expect undefined

wheelOfFortune('e'); //solve the puzzle
wheelOfFortune('t');
console.log(wheelOfFortune('i'));



// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
console.log("============HANGMAN==========");
//Global variables
const hangmanWord = ["q", "u", "i", "x", "o", "t", "i", "c"];
const hangmanGuess = [ "_", "_", "_", "_", "_","_","_","_", ];
let numberOfGuesses = 0;

const playHangman = ( guess ) => {
   
    if (hangmanWord.includes( guess )) { //is the letter somewhere in the word? 
        
        for( let i = 0; i < hangmanWord.length; i++ ) { // if yes, then iterate over the letters and display correct guesses      
            if ( hangmanWord[i] === guess ){ //change the blank to the letter if correct.
                hangmanGuess[i] = guess;
                console.log(`Correct! ${hangmanGuess}`);  //display current guesses
            } 
        } 
            
    } else { //handle wrong answer
        console.log( `There is no ${guess} in the word. Try again. You have ${ 6 - numberOfGuesses } guesses remaining.` )
        numberOfGuesses ++;
    }
        
    if( !hangmanGuess.includes( "_" ) ) { //check if game has been won or lost.
        const finalWord = hangmanGuess.join("");
        return( `Congratulations, you win. The word was "${finalWord}"` )
    } else if (numberOfGuesses >= 6)  {
        const finalWord = hangmanWord.join("");
        return( `Bad luck, you lose. The word was "${finalWord}"` )
    }
    
}; //end guessLetter

//guessLetter testing
const hangmanTestOne  = playHangman('x') //expect  log [ "_", "_", "_", "x", "_","_","_","_", ];
const hangmanTestTwo  = playHangman('b'); //expect  log [ "_", "_", "_", "_", "_","_","_","_", ];

console.log(`A guess of 'x' returns: ${hangmanTestOne}`); //expect undefined & log  [ "_", "_", "_", "x", "_","_","_","_", ];
console.log(`A guess of 'b' returns: ${hangmanTestTwo}`); //expect undefined & log "There is no b..."

playHangman('z'); //get it wrong
playHangman('p');
playHangman('v');
playHangman('s');
playHangman('r');
console.log(playHangman('r')); //expect lose game message



// Array and Functions Bonus Material

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers =  ( numOne, numTwo ) => {
    if (numOne === numTwo) {
        return 'Equal';
    } else if (numOne > numTwo) {
        return numOne;
    } else {
        return numTwo;
    }
}; //end maxOfTwoNumbers

//maxOfTwoNumbers Testing

console.log(`maxOfTwoNumbers test one (8,3): ${maxOfTwoNumbers(8, 3)}`); //expect 8
console.log(`maxOfTwoNumbers test two (2, 11): ${maxOfTwoNumbers(2, 11)} `); //expect 11
console.log(`maxOfTwoNumbers test three: (5,5): ${maxOfTwoNumbers(5,5)} `);  //expect 'equal'


// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = ( numOne, numTwo, numThree ) => {
    let largestNumber= 0;
    const numberArray = [ numOne, numTwo, numThree ];
    for ( let i = 0; i < numberArray.length; i++ ) {
        if (numberArray[i] > largestNumber) {
            largestNumber = numberArray[i]; // can I do this on one line?
        } 
    } return largestNumber;
}; //end maxOfThree

//Testing  maxOfThree
console.log(`maxofThree test (2, 100, 3.256667): ${maxOfThree( 2, 100, 3.25667 )}`); //expect 100


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const vowels = ["a", "e", "i", "o", "u"]; //GLOBAL

const vowelChecker = ( letter ) => {
    return vowels.includes(letter);
}; //end vowel checker

//vowelChecker Test
console.log(`vowelChecker test one ('o'): ${vowelChecker('o')}`); //expect true
console.log(`vowelChecker test two ('r'): ${vowelChecker('r')}`); //expect false

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
testArray = [6, 7, 3 ];

const sumArray = ( array ) => {
    let sum = 0;
    array.forEach(value => { sum += value }); //this is in the forEach docs but not super readable
    return sum;
}; //end sumArray

//sumArray Test
console.log(`sumArray test [6, 7, 3]: ${sumArray(testArray)}`); //expect 28

//multiply array
const multiplyArray = ( array ) => {
    let sum = 1;
    array.forEach(value => { sum *= value });  //as above, but multiplied.
    return sum;
};

console.log(`multiplyArray test [6, 7, 3]: ${multiplyArray(testArray)}`); // expect 126

// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
const userString = "welcome to hollywood"; //testing string
const reverseString = (string) => {
    let reversedString  = "";
    for (let i = string.length - 1; i >= 0; i-- ){ //iterate each letter in reverse;
        reversedString += string[i];
    } return reversedString
}; //end reverseString

//reverseString testing
console.log(`reverseString testing ['welcome to hollywood']: ${reverseString(userString)}`); //expect string doowylloh ot emoclew"


// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
const wordList = ["cat", "mouse", "owl"]; //test array

const findLongestWord = (wordList) => {
    let longestWord = "";
    for (word in wordList) { //iterate over the array
        if (wordList[word].length > longestWord.length) { //test the length of each word 
            longestWord = wordList[word]; //record the current longest
        }  
    } return longestWord;
     
}; // end findLongestWord

//Wordlist testing
console.log(`findLongestWord results ["cat", "mouse", "owl"]: ${findLongestWord(wordList)}`);


// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

//testing Array
const testWords = ["cat", "mouse", "dog", "chicken"];

const filterLongWords =  (array, number) => {
    longWords = [];
    for (word in array) {
        let i = array[word]
        if (i.length > number){ //test whether each word is longer than number
            longWords.push(i); //add those that meet the test to longWords
        }
    } return longWords;
}; //end filterLongWords

//filterLongWords testing
console.log(`filterLongWords test  ["cat", "mouse", "dog", "chicken"]: ${filterLongWords(testWords, 3)} `); // expect ["mouse"], ["chicken"] 


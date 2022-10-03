// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').


const wordGuess = ["A", "R", "R", "A", "Y"]
const toGuess = ["_", "_", "_", "_", "_"]


// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


const guessLetter = function (letter) {

    for (let i = 0; i < wordGuess.length; i++) {
        // console.log(wordGuess[i])

        if (wordGuess[i] === letter) {
            toGuess[i] = letter
        } 
    }

    if ( toGuess.includes("_") === false && wordGuess.includes(letter) ) {
        return `${toGuess}, congratulations you win the word guess!`
        

    } else if ( wordGuess.includes(letter) === false) {
        return `Try to guess another letter`

    } else if ( wordGuess.includes(letter) ) {
        return `${toGuess}, congratulations you guessed a letter!`
        
    }

}

console.log(guessLetter("A"))
console.log(guessLetter("R"))
console.log(guessLetter("E"))
console.log(guessLetter("T"))
console.log(guessLetter("Y"))


// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.


const fortuneWordGuess = ["A", "R", "R", "A", "Y"]
const fortuneToGuess = ["_", "_", "_", "_", "_"]

let reward = 0

const wheelFortune = function (letter) {
    let letterGuessed = 0
    const randomAmount = Math.floor( Math.random() * 100 )

    for (let i = 0; i < fortuneWordGuess.length; i++) {
        // console.log(fortuneWordGuess[i])

        if (fortuneWordGuess[i] === letter) {
            fortuneToGuess[i] = letter
            letterGuessed ++
        } 
    }

    if ( fortuneToGuess.includes("_") === false && fortuneWordGuess.includes(letter) ) {
        return `${fortuneToGuess}, congratulations you win the word guess! Your total win amount is $${reward}!`
        
    } else if ( fortuneWordGuess.includes(letter) === false) {
        reward -= randomAmount
        return `Try to guess another letter. You are deducted ${randomAmount} from your reward. Your total reward is now ${reward}`

    } else if ( fortuneWordGuess.includes(letter) ) {
        reward += randomAmount * letterGuessed
        return `${fortuneToGuess}, congratulations you guessed a letter! You are rewarded ${randomAmount} with a letter guessed multiplier of ${letterGuessed} ! Your total reward is now ${reward}`
        
    }

}

console.log(wheelFortune("A"))
console.log(wheelFortune("R"))
console.log(wheelFortune("E"))
console.log(wheelFortune("T"))
console.log(wheelFortune("Y"))


// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.


const hangmanWordGuess = ["A", "R", "R", "A", "Y"]
const hangmanToGuess = ["_", "_", "_", "_", "_"]

let chancesLeft = hangmanToGuess.length 


const hangman = function (letter) {


    for (let i = 0; i < hangmanWordGuess.length; i++) {
        // console.log(hangmanWordGuess[i])

        if (hangmanWordGuess[i] === letter) {
            hangmanToGuess[i] = letter

        }
    }

    if ( hangmanToGuess.includes("_") === false && hangmanWordGuess.includes(letter) ) {
        return `${hangmanToGuess}, congratulations you guessed the word before the man is hanged!`

    } else if ( hangmanWordGuess.includes(letter) === false && chancesLeft === 0) {
        return `Sorry you have used up all your chances. You lost the game.    >-->-o-----|  `
        
    } else if ( hangmanWordGuess.includes(letter) === false) {
        chancesLeft --
        return `Try to guess another letter. You have ${chancesLeft} chances left`

    } else if ( hangmanWordGuess.includes(letter) ) {
        return `${hangmanToGuess}, congratulations you guessed a letter!`
        
    }

}

console.log(hangman("A"))
console.log(hangman("R"))
console.log(hangman("E"))
console.log(hangman("T"))
console.log(hangman("S"))
console.log(hangman("U"))
console.log(hangman("M"))
console.log(hangman("N"))
// console.log(hangman("Y"))



// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.




console.log(`%cLet me tell thee of the days of high adventure...`, 'font-family: fantasy;');
console.log(`Homework: The Word Guesser`);

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

//     Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
//     Write a function called guessLetter that will:
//     Take one argument, the guessed letter.
//     Iterate through the word letters and see if the guessed letter is in there.
//     If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
//     When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
//     It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
//     Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

console.log(`Simple version`);
console.log(`==============`)
const secretWord = ['F','O','X'];
const guessedLetters = ['_','_','_'];

const guessLetter = function(letter){
  for (let i = 0; i < secretWord.length ; i++){
    if(secretWord[i] === letter){
      // matches this letter in the secret word
      guessedLetters[i] = letter;
    }
  }
  let guessProgress = ``;
  for (let i = 0 ; i < guessedLetters.length ; i++){
    guessProgress = guessProgress + guessedLetters[i];
  }
  console.log(guessProgress);
  if(guessedLetters.includes('_')===false){
    console.log(`You win. Congratulations, you guessed the word!`);
  }
}; // guessLetter()

guessLetter('O');
guessLetter('B');
guessLetter('F');
guessLetter('D');
guessLetter('E');
guessLetter('X');
console.log(`==============`)

// Bonus: Make it more like Wheel of Fortune:

//     Start with a reward amount of $0
//     Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
//     When they guess the word, log their final reward amount.

console.log(`Wheel of Fortune Version`);
console.log(`==============`)
let prizeMoney = 0
const wheelAmounts = [100, 200, 400, 600, 800, 1000];

const puzzle = ['M','O','O','N'];
const correctGuesses = ['_','_','_','_'];
const contestestantGuesses = [];

const wheelOfFortune = function(letter){
  // already guessed letters
  if(contestestantGuesses.includes(letter)){
    console.log(`You guessed ${letter} already.`);
    return;
  }else{
    // not in there - add to guessed list
    contestestantGuesses.push(letter);
  }

  let multipleCorrectLetterCount = 0;
  
  // assign random prize money amount - spin the wheel
  let wheelWedge = wheelAmounts[Math.floor(Math.random() * wheelAmounts.length)];
  console.log(`You spun up $${wheelWedge}`);

  // check if guessed letter appears in the puzzle
  for (let i = 0; i < puzzle.length ; i++){
    if(puzzle[i] === letter){
      // correct!
      correctGuesses[i] = letter;
      // 
      multipleCorrectLetterCount = multipleCorrectLetterCount + 1;
    }
  }
  // award prizemoney (or penalise for no correct letters)
  if(multipleCorrectLetterCount === 0){
    prizeMoney = prizeMoney - wheelWedge;
  } else {
    prizeMoney = prizeMoney + multipleCorrectLetterCount * wheelWedge;
  }

  // build guessed letters of the puzzle into a string
  let guessProgress = ``;
  for (let i = 0 ; i < correctGuesses.length ; i++){
    guessProgress = guessProgress + correctGuesses[i];
  }

  // display the contestants progress and prize money
  console.log(`correct guesses: ${guessProgress}`);
  console.log(`prize purse: $${prizeMoney}`);
  if(correctGuesses.includes('_')===false){
    console.log(`You won. Congratulations, you guessed the word!`);
  }
  return `wheel of fortune`;
}; // wheelOfFortune()

wheelOfFortune('A');
wheelOfFortune('M');
wheelOfFortune('M');
wheelOfFortune('O');
wheelOfFortune('N');



// Bonus: Make it like Hangman:

//     Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
//     Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
//     Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.


console.log(`Hangman Version`);
console.log(`==============`)
let hangManBodyParts = 6;
const riddle = ['H','O','U','S','E'];
const correctLetters = ['_','_','_','_','_'];
const alreadyGuessedLetters = [];

const hangMan = function(letter){
  // already guessed letters
  if(alreadyGuessedLetters.includes(letter)){
    console.log(`You guessed ${letter} already.`);
    return;
  }else{
    // not guessed before - add to list
    alreadyGuessedLetters.push(letter);
  }

  // check if guessed letter appears in the puzzle
  let isGuessCorrect = false;
  for (let i = 0; i < riddle.length ; i++){
    if(riddle[i] === letter){
      // correct!
      correctLetters[i] = letter;
      isGuessCorrect = true;
    }
  }
  if(isGuessCorrect === false){
      console.log(`Penalty`);
      // penalise the contestant -1 body part of the hangman
      hangManBodyParts = hangManBodyParts - 1;
      // check if the contestant lost
      if (hangManBodyParts === 0){
        console.log(`You Lost`);
        console.log(`______`);
        console.log(`|    |`);
        console.log(`|    0`);
        console.log(`|   /|\\`);
        console.log(`|    |`);
        console.log(`|   / \\`);
        console.log(`|`);
        console.log(`|`);
        console.log(`--------`);
    }
  }

  // build guessed letters of the puzzle into a string
  let guessProgress = ``;
  for (let i = 0 ; i < correctLetters.length ; i++){
    guessProgress = guessProgress + correctLetters[i];
  }

  // display the contestants progress and prize money
  console.log(`correct guesses: ${guessProgress}`);
  if(correctLetters.includes('_')===false){
    console.log(`You won. Congratulations, you beat the hangman!`);
  }
  return `hangman`;
}; // hangMan()

// hangMan('A');
// hangMan('B');
// hangMan('C');
// hangMan('D');
hangMan('E');
hangMan('E');
// hangMan('F');
// hangMan('G');
hangMan('H');
hangMan('O');
hangMan('U');
hangMan('S');
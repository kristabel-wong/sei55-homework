
console.log("W1 D3 Array Homework");

//The Word Guesser

/* ------------------------ without bonus ------------------------------ */

// const wordLetter = ['D', 'O', 'G', 'G'];
// const wordLength = wordLetter.length;
// let userGuessLetter = new Array(wordLength);

// function guessLetter(gLetter){
//     for (let i = 0; i < wordLength; i++){
//         if (gLetter === wordLetter[i]){
//             userGuessLetter[i] = gLetter;
//             console.log('Congratulations! You find a new letter!');         
//         }
//     } //for

//     // decide if the user guess the right number
//     function isFound(){
//         for (let i = 0; i < wordLength; i++){
//             if (gLetter === wordLetter[i]){
//                 userGuessLetter[i] = gLetter;
//                 return true       
//             }
//         } //for
//         return false;
//     }; //isFound

//     if (isFound() === false){
//         return console.log('No match this time, keep guessing.');        
//     }


//     // compare two arrays are same or not
//     function isEqual(){
//         for (let j = 0; j < wordLength; j++){
//             if (userGuessLetter[j] !== wordLetter[j]){
//                 return false
//             }
//         }
//         return true
//     }; //isEqual()

//     if (isEqual()){
//         console.log('Hooray! You win this game!');
//     } else{
//         console.log('Not finish, keep guessing.');
//     }

// }; //guessLetter()

/* ------------------------ toFixed question ------------------------------ */

// const wordLetter = ['D', 'O', 'G', 'G'];
// const wordLength = wordLetter.length;
// let userGuessLetter = new Array(wordLength);
// let reward = 0;

// function guessLetter(gLetter){

//     //set a reward betweed 0 to 100
//     const rewardRandom = Math.round((Math.random()*100) * 100) / 100;

//     for (let i = 0; i < wordLength; i++){
//         if (gLetter === wordLetter[i]){
//             userGuessLetter[i] = gLetter;
//             console.log('Congratulations! You find a new letter!');  
//             reward = Math.round((reward + rewardRandom) * 100) / 100;
//         }
//     } //for

//     // decide if the user guess the right number
//     function isFound(){
//         for (let i = 0; i < wordLength; i++){
//             if (gLetter === wordLetter[i]){
//                 userGuessLetter[i] = gLetter;
//                 return true       
//             }
//         } //for
//         return false;
//     }; //isFound

//     if (isFound() === false){  
//         reward = Math.round((reward - rewardRandom) * 100) / 100;  
//         return console.log('No match this time, keep guessing.'); 
//     }

//     // compare two arrays are same or not
//     function isEqual(){
//         for (let j = 0; j < wordLength; j++){
//             if (userGuessLetter[j] !== wordLetter[j]){
//                 return false
//             }
//         }
//         return true
//     }; //isEqual()

//     if (isEqual()){
//         console.log(`Hooray! You win this game! Your total reward is ${reward}`);
//     } else{
//         console.log('Not finish, keep guessing.');
//     }

// }; //guessLetter()

/* ------------------------ with bonus1 ------------------------------ */

// const wordLetter = ['D', 'O', 'G', 'G'];
// const wordLength = wordLetter.length;
// let userGuessLetter = new Array(wordLength);
// let reward = 0;

// function guessLetter(gLetter){

//     //set a reward betweed 0 to 100
//     const rewardRandom = Math.random()*100;

//     for (let i = 0; i < wordLength; i++){
//         if (gLetter === wordLetter[i]){
//             userGuessLetter[i] = gLetter;
//             console.log('Congratulations! You find a new letter!');  
//             reward = reward + rewardRandom;
//         }
//     } //for

//     // decide if the user guess the right number
//     function isFound(){
//         for (let i = 0; i < wordLength; i++){
//             if (gLetter === wordLetter[i]){
//                 userGuessLetter[i] = gLetter;
//                 return true       
//             }
//         } //for
//         return false;
//     }; //isFound

//     if (isFound() === false){  
//         reward = reward - rewardRandom;  
//         return console.log('No match this time, keep guessing.'); 
//     }


//     // compare two arrays are same or not
//     function isEqual(){
//         for (let j = 0; j < wordLength; j++){
//             if (userGuessLetter[j] !== wordLetter[j]){
//                 return false
//             }
//         }
//         return true
//     }; //isEqual()

//     if (isEqual()){
//         console.log(`Hooray! You win this game! Your total reward is ${reward.toFixed(2)}`);
//     } else{
//         console.log('Not finish, keep guessing.');
//     }

// }; //guessLetter()


/* ------------------------ with bonus2 ------------------------------ */

const wordLetter = ['D', 'O', 'G', 'G'];
const wordLength = wordLetter.length;
let userGuessLetter = new Array(wordLength);
let userGuessTrack = new Array();
let reward = 0;
let wrongNum = 0;

function guessLetter(gLetter){

    //store the tracked letter
    for (let i = 0; i < userGuessTrack.length; i++){
        if (gLetter === userGuessTrack[i]){
            return console.log('You have guessed this one before.')
        }
    }
    userGuessTrack.push(gLetter);

    //set a reward betweed 0 to 100
    const rewardRandom = Math.random()*100;

    for (let i = 0; i < wordLength; i++){
        if (gLetter === wordLetter[i]){
            userGuessLetter[i] = gLetter;
            console.log('Congratulations! You find a new letter!');  
            reward = reward + rewardRandom;
        }
    } //for

    // decide if the user guess the right number
    function isFound(){
        for (let i = 0; i < wordLength; i++){
            if (gLetter === wordLetter[i]){
                userGuessLetter[i] = gLetter;
                return true       
            }
        } //for
        return false;
    }; //isFound

    if (isFound() === false){  
        reward = reward - rewardRandom;  
        wrongNum += 1;
        if (wrongNum === 6){
            return console.log('You lost! hangman');
        }
        return console.log(`No match this time, you still have ${6-wrongNum} chances, keep guessing.`); 
    }


    // compare two arrays are same or not
    function isEqual(){
        for (let j = 0; j < wordLength; j++){
            if (userGuessLetter[j] !== wordLetter[j]){
                return false
            }
        }
        return true
    }; //isEqual()

    if (isEqual()){
        console.log(`Hooray! You win this game! Your total reward is ${reward.toFixed(2)}`);
    } else{
        console.log('Not finish, keep guessing.');
    }

}; //guessLetter()


/* ------------------------ some changes after homework tutorial ------------------------------ */

// const wordLetter = ['D', 'O', 'G', 'G'];
// const wordLength = wordLetter.length;
// let userGuessLetter = new Array(wordLength);
// let userGuessTrack = new Array();
// let reward = 0;
// let wrongNum = 0;

// function guessLetter(gLetter){

//     //store the tracked letter
//     for (let i = 0; i < userGuessTrack.length; i++){
//         if (gLetter === userGuessTrack[i]){
//             return console.log('You have guessed this one before.')
//         }
//     }
//     userGuessTrack.push(gLetter);

//     // Use this variable to remember what happens in the loop, overall -
//     // were ANY of the letters in the secret word a match with the user's guess
//     let correctGuessMade = false;

//     //set a reward betweed 0 to 100
//     const rewardRandom = Math.random()*100;

//     for (let i = 0; i < wordLength; i++){
//         if (gLetter === wordLetter[i]){
//             userGuessLetter[i] = gLetter;
//             console.log('Congratulations! You find a new letter!');  
//             reward = reward + rewardRandom;
//             correctGuessMade = true; // so we can check after the loop is finished
//         }
//     } //for

//     // ONLY after the loop has finished checking ALL the letters in the word,
//     // and NONE of them matched the userGuess, can you say it was an incorrect guess
//     if (correctGuessMade === false){
//         reward = reward - rewardRandom;  
//         wrongNum += 1;
//         if (wrongNum === 6){
//             return console.log('You lost! hangman!!!!!');
//         }
//         return console.log(`No match this time, you still have ${6-wrongNum} chances, keep guessing.`); 
//     }


//     // // decide if the user guess the right number
//     // function isFound(){
//     //     for (let i = 0; i < wordLength; i++){
//     //         if (gLetter === wordLetter[i]){
//     //             userGuessLetter[i] = gLetter;
//     //             return true       
//     //         }
//     //     } //for
//     //     return false;
//     // }; //isFound

//     // if (isFound() === false){  
//     //     reward = reward - rewardRandom;  
//     //     wrongNum += 1;
//     //     if (wrongNum === 6){
//     //         return console.log('You lost! hangman');
//     //     }
//     //     return console.log('No match this time, keep guessing.'); 
//     // }


//     // compare two arrays are same or not
//     function isEqual(){
//         for (let j = 0; j < wordLength; j++){
//             if (userGuessLetter[j] !== wordLetter[j]){
//                 return false
//             }
//         }
//         return true
//     }; //isEqual()

//     if (isEqual()){
//         console.log(`Hooray! You win this game! Your total reward is ${reward.toFixed(2)}`);
//     } else{
//         console.log('Not finish, keep guessing.');
//     }

// }; //guessLetter()




 
/* ------------------------ Array and Functions Bonus Material ------------------------------ */

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

function maxOfTwoNumbers(num1, num2){
    if(num1 > num2){
        return num1;
    } else{
        return num2;
    }
}

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

let mediaNum
function maxOfThree(twoNum1, twoNum2, twoNum3){
    if(twoNum1 > twoNum2){
        mediaNum = twoNum1;
    } else{
        mediaNum = twoNum2;
    }

    if(mediaNum > twoNum3){
        return mediaNum;
    } else{
        return twoNum3;
    }
}

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(charac){
    if (charac === 'a' || charac === 'e' || charac === 'i' || charac === 'o' || charac === 'u'){
        return true;
    }
    return false;
}


// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

function sumArray(arraySum){
    let sum = 0;
    for(let i = 0; i < arraySum.length; i++){
        sum = sum + arraySum[i];
    }
    return sum;
}

function multiplyArray(arrayMulti){
    let multipy = 1;
    for(let i = 0; i < arrayMulti.length; i++){
        multipy = multipy * arrayMulti[i];
    }
    return multipy;
}





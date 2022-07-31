const targetLetters = ['F', 'O', 'X'];
const guessedLetters = ['_', '_', '_'];
const inputLetters = [];
let rewardAmount = 0;
let hangman = 0;

const wheelFortune = function () {
    return Math.floor(Math.random() * 101);
}

const guessLetter = function (letter) {
    letter = letter.toUpperCase();

    if (hangman > 4) {
        console.log(`💀💀💀 You lost 💀💀💀, hangman: ${hangman + 1} / 6`);
    } else {
        if (inputLetters.includes(letter)) {
            console.log(`You tried this letter ('${letter}') before, now the guessed letters are ${guessedLetters}, hangman: ${hangman} / 6`);
        } else {
            inputLetters.push(letter);
            if (targetLetters.includes(letter)) {

                const letterPosition = targetLetters.indexOf(letter);
                guessedLetters[letterPosition] = letter;
                rewardAmount += wheelFortune();

                if (guessedLetters.join() === targetLetters.join()) {
                    console.log(`🎉🎉🎉Congratulations🎉🎉🎉,the answer is ${targetLetters.join('')}, reward amount is ${rewardAmount}, hangman: ${hangman} / 6`);
                } else {
                    console.log(`🎉Congratulations🎉,now the guessed letters are ${guessedLetters}, reward amount is ${rewardAmount}, hangman: ${hangman} / 6`);
                }
            } else {
                hangman += 1;
                rewardAmount -= wheelFortune();
                console.log(`The input letter is not in there, please try again, reward amount is ${rewardAmount}, hangman: ${hangman} / 6`);
            }
        }



    }

}

//Array and Functions Bonus Material
const maxOfTwoNumbers = function (numb1, numb2) {
    return numb1 > numb2 ? numb1 : numb2;
}
// console.log(maxOfTwoNumbers(34,67));
//67

const maxOfThree = function (numb1, numb2, numb3) {
    return Math.max(numb1, numb2, numb3)
}
// console.log(maxOfThree(12,43,54));
//54

const isVowel = function (char) {
    const set = ['a', 'e', 'i', 'o', 'u'];
    return set.includes(char)
}
// console.log(isVowel('a'));
// console.log(isVowel('k'));
//true
//false

const sumArray = function (arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element
    });
    return sum;
}
// console.log(sumArray([1,2,3,4]));
//10

const multiplyArray = function (arr) {
    let sum = 1;
    arr.forEach(element => {
        sum *= element
    });
    return sum;
}
// console.log(multiplyArray([1,2,3,4]));
// 24

//Bonus
const reverseString = function (str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr
}
// console.log(reverseString('asdfghjkl'));
//lkjhgfdsa

const findLongestWord = function (arr) {
    let longestWord = '';
    for (let i = 0; i < arr.length - 1; i++) {
        longestWord = arr[i].length > arr[i + 1].length ? arr[i] : arr[i + 1]
    }
    return longestWord;
}
// console.log( findLongestWord(['abc','zzabczz','xabcx']) );
// zzabczz

const filterLongWords = function (arr, numb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > numb) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}
// console.log(filterLongWords(['abc','zzabczz','xabcx'],4));
// ['zzabczz', 'xabcx']
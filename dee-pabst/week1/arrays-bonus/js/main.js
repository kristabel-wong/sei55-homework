console.log(`%cLet me tell thee of the days of high adventure...`, 'font-family: fantasy; font-size: 14px;')
console.log(`Array and Functions Bonus Material`);

//     Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function(first, second){
  let largest;
  if (first > second){
    largest = first;
  } else {
    largest = second;
  }
  return largest
} // maxOfTwoNumbers()

console.log(`5, 10: ${maxOfTwoNumbers(5,10)}`);
console.log(`38, 2: ${maxOfTwoNumbers(38,2)}`);
console.log(`43, 43: ${maxOfTwoNumbers(43,43)}`);

//     Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (first, second, third){
  let largest;
  if (first > second){
    largest = first;
  } else {
    largest = second;
  }
  if(third > largest){
    largest = third;
  }
  return largest
} // maxOfThree()

console.log(`1,1,2 - largest of the three is: ${maxOfThree(1,1,2)}`);
console.log(`1,7,2 - largest of the three is: ${maxOfThree(1,7,2)}`);
console.log(`43,7,2 - largest of the three is: ${maxOfThree(43,7,2)}`);

//     Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const checkVowel = function(letter){
  let isVowel = false;
  if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'y'){
    isVowel = true;
  }
  return isVowel;
} // checkVowel()

console.log(`is a a vowel? : ${checkVowel('a')}`);
console.log(`is b a vowel? : ${checkVowel('b')}`);
console.log(`is y a vowel? : ${checkVowel('y')}`);


//     Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function (arrayToSum){
  let result = 0;
  for (let i = 0; i < arrayToSum.length ; i++){
    result = result + arrayToSum[i];
  }
  return result;
} // sumArray()

console.log(`the sum of the array [1,2,3,4] is: ${sumArray([1,2,3,4])}`);
console.log(`the sum of the array [3,3,3,3] is: ${sumArray([3,3,3,3])}`);


const multiplyArray = function (arrayToMultiply){
  let result = 0;
  for (let i = 0; i < arrayToMultiply.length ; i++){
   if(i === 0){
    result = arrayToMultiply[i];
   } else {
    result = result * arrayToMultiply[i];
   }
  }
  return result;
} // multiplyArray()

console.log(`The product of the array [1,2,3,4] is: ${multiplyArray([1,2,3,4])}`);
console.log(`The product of the array [8,4,2,1] is: ${multiplyArray([8,4,2,1])}`);

// Bonus

//     Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(aString){
  let result = ``;
  for(let i = aString.length-1 ; i > 0 ; i--){
    // console.log(`i = ${i}`);
    // console.log(aString[i]);
    result = result + aString[i];
  }
  return result;
}

console.log(`reverseString("jag testar") = ${reverseString("jag testar")}`);

//     Write a function findLongestWord that takes an array of words and returns the length of the longest one.
const findLongestWord = function(arrayOfWords){
  let longestWord = arrayOfWords[0];
  for(let i = 1 ; i < arrayOfWords.length ; i++){
    if(arrayOfWords[i].length > longestWord.length){
      longestWord = arrayOfWords[i];
    }
  }
  return longestWord;
} // findLongestWord()

const arrayOfWords = ['antidisestablishmentarianism','crush', 'love', 'jealosy', 'hippopotomonstrosesquippedaliophobia', 'underdeveloped'];
console.log(`the longest word in the array is: ${findLongestWord(arrayOfWords)}`);

//     Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

const filterLongWords = function (words, minWordLength){
  const longWords = [];
  for(let i = 0; i < words.length ; i++){
    if(words[i].length > minWordLength){
      longWords.push(words[i]);
    }
  }
  return longWords;
} // filterLongWords()

console.log(`words longer than 5 letters: ${filterLongWords(arrayOfWords, 7)}`);
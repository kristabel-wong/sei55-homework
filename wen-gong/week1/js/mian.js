var wordLetter = ['F','O','X'];
var yourGuess = ['_', '_', '_'];

function guessLetter(letter){
     var youAreRight = false;
     var youAreWrong = false;
     for (var i = 0; i < wordLetter.length; i++){

           if (wordLetter[i] == letter){
              yourGuess[i] = letter;
              youAreRight = true;
           }
    
            if(yourGuess[i] == '_'){
               youAreWrong = true;

      
            }
}
if(youAreRight){
    console.log('You are right!');
    console.log(yourGuess.join(''));
    if(!youAreWrong){
        console.log('You win!!!');
    }
}else{
    console.log('That not right!');
}

}


guessLetter('F');
guessLetter('O');
guessLetter('L');
guessLetter('X');
console.log(___________);

console.log(`Wheel of Fortune Version`);
console.log(`=======`);




// function maxOfTwoNumbers() = 





const favoriteColor = [
"pink",
"red",
"yellow",
"white",
"black",

];
for (let i = 0; i<favoriteColor.length; i++) {
const choice = favoriteColor[i-1];
console.log(`My #${i+1} choice is ${favoriteColor[i]}`);

}


const rainbowColors = [];

    rainbowColors.push("orange");
    rainbowColors.unshift("red");
    rainbowColors.push("yellow");
    rainbowColors.push("green", "blue", "indigo", "violet")





console.log(rainbowColors);
console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors[rainbowColors.length-1]);
console.log(rainbowColors.indexOf("blue"));

twoColors = rainbowColors.slice(1,3);
var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
cutNums = nums.slice(0,3);
cutNums2 = nums.slice(6,9);
newNum = cutNums + "," + cutNums2;
console.log(newNum);


var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
newArrey = arrOfArrs[0];

console.log(newArrey[0]);

arrey = arrOfArrs[1];
console.log(arrey);
const indexOfThird = arrey.indexOf("third");
console.log(arrey[indexOfThird]);


     
for (i = 0; i < arrey.length; i++) {
  console.log(arrey[i])
     
 }          

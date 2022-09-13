// Exercises: Arrays
// Your top choices
// Create an array to hold your top five choices of something (colors, presidents, whatever). If you choose movies, the right top choice is "Satantango".

// Loop through the array and for each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number.


const satanTango = ["Better Call Saul", "Inception", "Sherlock", "Oldboy", "Black Mirror"];

for (let i = 0; i <= satanTango.length - 1 ; i++) {
    const suffix = i + 1
    if ( i === 0 ) {
        console.log ( `My ${suffix}st choice is ${satanTango[i]}` )
    } else if (i === 1) {
        console.log ( `My ${suffix}nd choice is ${satanTango[i]}` )
    } else if (i === 2) {
        console.log ( `My ${suffix}rd choice is ${satanTango[i]}` )
    } else {
        console.log ( `My ${suffix}th choice is ${satanTango[i]}` )
    }
};


console.log( `===================================================================`)

// Extra Challenges to Achieve Array Mastery
// Starting with an empty array called rainbowColors:

// Add "orange" to the end of the array
// Add "red" to the start of the array
// Add "yellow" to the end
// Add "green", "blue", "indigo", and "violet" to the end of the array
// Try and do this using one method

const rainbowColors = [];
rainbowColors.push( "orange") ;
rainbowColors.unshift( "yellow" );
rainbowColors.push( "green", "blue", "indigo", "violet" );
console.log(rainbowColors);

// Log out the length of the array
console.log( rainbowColors.length );

// Log out the second item
console.log( rainbowColors[1] );

// Log out the last item (make this flexible/dynamic!)
console.log( rainbowColors.slice(-1) );

// Log out the index of the string "blue"
console.log( rainbowColors.indexOf("blue") );

console.log( `===================================================================`)


// Bonus: Find out the difference between .slice and .splice
// Create an array called twoColors using one method - don't change the rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)

const twoColors = rainbowColors.slice(2,4);
console.log(twoColors);

// Starting with this array var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate)

const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(3, 3);
console.log(nums)


// Bonus: Work with arrays of arrays
// Starting with this array var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

const arrOfArrs = [
    ["inner array first item", "inner array second item"], //0 index array
    ["first", "second", "third"] //1 index array
]

// Access "inner array first item" and print it out"

console.log( arrOfArrs[0][0] );

// Print "third" by using a dynamic index
console.log( arrOfArrs[ arrOfArrs.length - 1 ].slice(-1) )

// Bonus Bonus: Loop through the second inner array! Print out first, then second, then third

for (i = 0; i < arrOfArrs[1].length; i++ ) {
    console.log( arrOfArrs[1][i] )
}
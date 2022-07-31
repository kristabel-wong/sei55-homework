// Exercises: Arrays
// Your top choices
// Create an array to hold your top five choices of something (colors, presidents, whatever). If you choose movies, the right top choice is "Satantango".
// Loop through the array and for each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number.
const favouriteFood = ["pasta", "pizza", "sushi", "cake", "sprouts"];

for (let i = 0; i < 3; i++) {
    let suffix = "st";
    if (i + 1  === 2) {
        suffix = "nd";
    } else if (i +1 === 3) {
        suffix = "rd";
    }
   
    console.log(`My ${i+1}${suffix} favourite food is ${favouriteFood[i]}.`);

}; //end of favourite food loop




// Extra Challenges to Achieve Array Mastery
// Starting with an empty array called rainbowColors:
const rainbowColors = []; 
// Add "orange" to the end of the array
rainbowColors.push("orange");
// Add "red" to the start of the array
rainbowColors.unshift("red");
// Add "yellow" to the end
rainbowColors.push("yellow");
// Add "green", "blue", "indigo", and "violet" to the end of the array
// Try and do this using one method
rainbowColors.push("green", "blue", "indigo", "violet");
// Log out the length of the array
console.log(`Length of rainbowColors: ${rainbowColors.length}`);
// Log out the second item
console.log(`Second item in rainbowColors: ${rainbowColors[1]}`);
// Log out the last item (make this flexible/dynamic!)
console.log(`Final item in rainbowColors: ${rainbowColors[rainbowColors.length-1]}`);
// Log out the index of the string "blue"
console.log(rainbowColors.indexOf("blue"));

// Bonus: Find out the difference between .slice and .splice
// Create an array called twoColors using one method - don't change the rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
const twoColors = rainbowColors.slice(1, 3);
console.log(`Two colors: ${twoColors}`);
console.log(`rainbowColors after slice: ${rainbowColors}`);

// Starting with this array var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate)
const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
for (let i = 0; i < nums.length; i ++) {
    if ( nums[i] === nums[i + 1] || nums[i]  === nums[i - 1] ) { //this only works because the array is sorted.
        nums.splice(nums[i], 1)
    };
};
console.log(`nums array after splice: ${nums}`);


// Bonus: Work with arrays of arrays
// Starting with this array var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
// Access "inner array first item" and print it out"
// Print "third" by using a dynamic index
// Bonus Bonus: Loop through the second inner array! Print out first, then second, then third

const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
console.log(arrOfArrs[0][0]);
console.log((arrOfArrs[arrOfArrs.length -1 ][arrOfArrs[arrOfArrs.length -1 ].length - 1])); //dynamic

for (let i = 0; i < arrOfArrs[1].length; i ++) {
    console.log(arrOfArrs[1][i]);
};

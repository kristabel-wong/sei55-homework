console.log("Warm ups - Thursday");


// Warmup: Leap Years

// Write a function that will take any given year and return a boolean value, whether it is a leap year or not. Remember that a leap year is:

//     Every year that is evenly divisible by 4
//     Except if it is evenly divisible by 100...
//     Unless it is also divisible by 400
//     Test Data... Make sure it is working!

// How to structure it - we want a custom function called isLeapYear which returns true or false.

// isLeapYear(1997) // ==> false
// isLeapYear(1996) // ==> true
// isLeapYear(1900) // ==> false
// isLeapYear(2000) // ==> true


const isLeapYear = function(year) {

    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {          
        console.log(`${year} ==> true`);
    } else {   
        console.log(`${year} ==> false`);
    }
};

isLeapYear(1989);
isLeapYear(2000);
isLeapYear(2004);
isLeapYear(2010);
isLeapYear(2024);


// OR

// const isLeapYear = function(year) {    // divisible by 4 

//     // also not divisible by 100 OR divisible by 400
//     if (year % 4 === 0) {
//         if ( year % 100 !== 0 || year % 400 === 0) {
//             return true
//         }
//     }
//     return false
// };

// console.log(1989,isLeapYear(1989));
// console.log(2000,isLeapYear(2000));
// console.log(2004,isLeapYear(2004));
// console.log(2010,isLeapYear(2010));
// console.log(2024,isLeapYear(2024));
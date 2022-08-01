// console.log('Loops!');

// // The even/odd reporter

// // Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").


// for (let i = 0; i<=20; i++){
//    if (i, i % 2 === 0) {
//     console.log(`${i} is even`);
//    } else {
//     console.log (`${i} is odd`);
//    }
// }

// // OR 
// // let answer;
// // for (let i = 0; i<=20; i++){
// //     if (i, i % 2 === 0) {
// //      answer = 'even';
// //     } else {
// //      answer = 'odd';
// //     }
// //     console.log(`${i} is ${answer}`);
// //  }
 
 
// // Multiplication Tables

// // Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// // Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

// // const multiplier = 9;
// // for (let i = 0; i <= 10; i++) {
// //     const result = multiplier * i;
// //     console.log(multiplier + '*' + i + ' = ' + result);
// // }

// //OR 

// for (let i = 0; i <= 10; i++) {
//     console.log(`${i} * 9 = ${1 * 9}`);
// }
// //OR
//     //Nested loop
// // for (let i = 0; i <= 10; i++) {
// //     for ( let j = 1; j <= 10; j++){
// //         if ((i * j) % 10 === 0) {
// //             console.log(`${i} * ${j} = ${i * j} `);
// //         } else {
// //             console.log(`${i} * ${j} = ${i * j} `)
// //         }
// //     }
    
// // }

// // The Grade Assigner

// // Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

// const assignGrade = function(numScore) {
//     if (numScore >= 90) {
//         return 'A';
//     } else if (numScore >= 80) {
//         return 'B';
//     } else if (numScore >= 70) {
//         return 'C';
//     } else if (numScore >= 60) {
//         return 'D';
//     } else {
//         return 'F';
//     }
// };

// for(let i = 50; i <= 100; i++) {
//    console.log(`For ${i}, you got ${assignGrade(i)}`); 
// }



//ARRAYS (===========================================)

    // instead of this,
// const item0 = 'socks';
// const item1 = 'milk';
// const item2 = 'pencils';
    // use this,
// const shoppingList = ['socks', 'milk', 'pencils'];
    //and call using this,
// shoppingList [1];
// shoppingList [shoppingList.length - 1]; **will give you the  last item in the array



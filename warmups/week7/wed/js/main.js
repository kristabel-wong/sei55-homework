// # Concat my arrays

// Given two arrays (below) with the same number of rows, return a concatenated version of the two arrays. 
// Please do this in JavaScript

// const arrayA = [
//     ["a", "b", "c"],
//     ["d", "e", "f"],
//     ["g", "h", "i"]
// ];


// const arrayB = [
//     [0, 1],
//     [3, 4],
//     [6, 7],
// ];

// Your function should look like:

// ```
// concat(arrayA, arrayB); // output below

// [
//     ["a", "b", "c", 0, 1],
//     ["d", "e", "f", 3, 4],
//     ["g", "h", "i", 6, 7],
// ];
// ```

console.log('hello world');



const arrayA = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
];


const arrayB = [
    [0, 1, 2],
    [3, 4, 3],
    [6, 7, 9],
];


const concat = function (array1, array2) {

    const result = [];
    
    for (let i = 0; i < array1.length; i++) {
        // console.log('array1', array1[i]); // looks like ["a", "b", "c"]
        // console.log('array2', array2[i]);


        let array1row = array1[i];
        let array2row = array2[i];

        let newRow = array1row.concat(array2row)

        // console.log(newRow);

        result.push(newRow)
        
    }

    console.log(result);
    
}

concat(arrayA, arrayB);
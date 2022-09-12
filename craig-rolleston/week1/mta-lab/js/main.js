console.log('MTA homework');

// MTA Lab
// Objectives:

//     Apply your knowledge of Javascript to solve a real world problem.
//     Get really good at array manipulation and JS data structures.

// Activity

//     Create a program that models a simple subway system.

//     The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."

//     There are 3 subway lines:
//         The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//         The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//         The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//         All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)
//     Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
//     Your trip planner must work in either direction, i.e. planTrip('N', 'Times Square', '6', '33rd') (starting at Times Square) should work as well as the reverse trip planTrip('6', '33rd', 'N', 'Times Square') (starting at 33rd).

// Hints:

//     Work out how you would do it on paper first! Then start to explain that process in Javascript.
//     👉 Get the program to work for a single line (in any direction) before trying to tackle multiple lines. 👈
//     Don't worry about prompting the user for input. Hard code some test-run calls to the trip planning function to make it fast to test your code.
//     Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
//     The key to the lab is finding the index positions of each stop. (hint: indexOf())
//     Depending on what kind of data structures you use to represent the lines and stations, you might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

// planTrip('N', 'Times Square', '6', '33rd');


const trainLinesOfMTA = {


    nLine: [

        'Times Square', // 0
        '34th',         // 1
        '28th',         // 2
        '23rd',         // 3
        'Union Square', // 4
        '8th'           // 5

    ], // closes nLine

    lLine: [

        '8th',          // 0
        '6th',          // 1
        'Union Square', // 2
        '3rd',          // 3
        '1st'           // 4

    ], // closes lLine

    sixLine: [

        'Grand Central',// 0
        '33rd',         // 1
        '28th',         // 2
        '23rd',         // 3
        'Union Square', // 4
        'Astor Place'   // 5

    ], // closes sixLine

    singleLineTrip: function(line, startStation, line, endStation) {

        // let trainLine;
        // let trip;
        // find the start line
        
        const trainLine = trainLinesOfMTA[ line ]; 
        // above replaces below

        // if (line === 'nLine') {
        //     trainLine === this.nLine;
        // } else if (line === 'lLine') {
        //     trainLine === this.lLine;
        // } else if (trainLine === 'sixLine') {
        //     trainLine === this.sixLine;
        // }    
        
        // find the index of start and end stations

        const indexOfStart = trainLine.indexOf(startStation);
        const indexOfEnd = trainLine.indexOf(endStation);
        // console.log(indexOfStart, indexOfEnd, trainLine)

        let trip = [];

        if( indexOfStart === indexOfEnd ) {
            // console.log(`You have arrived at your destination.`);
            return false;
        } else if( indexOfStart < indexOfEnd ) {
            trip = trainLine.slice( indexOfStart + 1, indexOfEnd + 1);
        } else if( indexOfStart > indexOfEnd ) {
            trip = trainLine.slice( indexOfEnd, indexOfStart).reverse();
        }
        return trip;
        
    },
    
       
};
const output = trainLinesOfMTA.singleLineTrip('nLine', 'Times Square', 'nLine', 'Union Square' );

console.log(`You must travel through the following stops on nLine: ${output}`);
// console.log(output)
// console.log(indexOfStart, indexOfEnd)

// trainLinesOfMTA.singleLineTrip('nLine', '28th', 'lLine', '1st' );
// console.log(trainLinesOfMTA.singleLineTrip);
   
    // console.log(`Your journey continues through the following stops: ${allStationsTaken} `);


// const customerTrip = {

//     startLine: 'nLine',
//     startStation: 'Times Square',

//     endLine: 'sixLine',
//     endStation: '33rd'

// };

// const startingLine = trainLinesOfMTA[ 'nLine' ]; 
// console.log(startingLine);



// const singleLineTrip = function (startingLine, startStation, endStation ) {

//     const line = stationsOfMTA[ startingLine ];
//     const startingIndex = line.indexOf( startStation );
    
//     // const startIndex = nLine.indexOf (startingLine, startStation);
//     // const endIndex = nLine.indexOf (endStation);

//     const stationsTaken = line.slice(startIndex + 1, endIndex + 1);
    
//     // const allStationsTaken = stationsTaken.length;
    
    
//     console.log(`You must travel through the following stops on nLine: ${stationsTaken}. Change at Union Square.`);
//     console.log(`Your journey continues through the following stops: ${allStationsTaken} `);

// };

    

// const tripPlanner = function () {

// }; // closes tripPlanner 
// // tripPlanner();





     
 
//  const startingLine = trainLinesOfMTA[ 'nLine' ]; IS A REPLACEMENT FOR BELOW
// const determineLine = function (beginningLine) {

//         if ( beginningLine === 'nLine' ) {

//             startingLine = trainLinesOfMTA.nLine;

//         } else if ( beginningLine === 'lLine' ) {

//             startingLine = trainLinesOfMTA.lLine;

//         } else {

//             startingLine = trainLinesOfMTA.sixLine;

//         };// closes if-else


// };  // closes determineLine

    // determineLine(customerTrip.startLine);
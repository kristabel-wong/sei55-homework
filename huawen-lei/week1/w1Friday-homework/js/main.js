
console.log("w1d5 homework");

/* ---------------------- single line version 1 --------------------------- */

//list stops in N & L & 6 line as three arrays. Maybe can put them into an object later
//find which line
//Use indexOf() to find the index of the input station
//compare the start index and end index, 
//if start index is smaller than the end index, use + to console the stops in middle or slice()
//if start index is larger than the end index, use - to console the stops in middle or slice().reverse()
//set a count. The count value is the difference between start station index and end station index

// const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
// const lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
// const lineS = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

// const singleLineTrip = function(line, startStation, endStation){

//     if (line === 'N'){
//         //find the index of start and end station
//         const indexOfStart = lineN.indexOf(startStation);
//         const indexOfEnd = lineN.indexOf(endStation);

//         let process;
//         let numStop;

//         if (indexOfStart === indexOfEnd){
//             console.log('You are just at your destination.');
//         } else if(indexOfStart < indexOfEnd){
//             process = lineN.slice(indexOfStart + 1, indexOfEnd + 1);
//             numStop = indexOfEnd - indexOfStart;
//             console.log(`You must travel through the following stops on the ${line} line: ${process}.\n${numStop} stops in total`);
//         } else if(indexOfStart > indexOfEnd){
//             process = lineN.slice(indexOfEnd, indexOfStart).reverse();
//             numStop = indexOfStart - indexOfEnd;
//             console.log(`You must travel through the following stops on the ${line} line: ${process}.\n${numStop} stops in total`);            
//         }
//     }

//     if (line === 'L'){
//         //find the index of start and end station
//         const indexOfStart = lineL.indexOf(startStation);
//         const indexOfEnd = lineL.indexOf(endStation);

//         let process;
//         let numStop;

//         if (indexOfStart === indexOfEnd){
//             console.log('You are just at your destination.');
//         } else if(indexOfStart < indexOfEnd){
//             process = lineL.slice(indexOfStart + 1, indexOfEnd + 1);
//             numStop = indexOfEnd - indexOfStart;
//             console.log(`You must travel through the following stops on the ${line} line: ${process}.\n${numStop} stops in total`);
//         } else if(indexOfStart > indexOfEnd){
//             process = lineL.slice(indexOfEnd, indexOfStart).reverse();
//             numStop = indexOfStart - indexOfEnd;
//             console.log(`You must travel through the following stops on the ${line} line: ${process}.\n${numStop} stops in total`);            
//         }
//     }

//     if (line === '6'){
//         //find the index of start and end station
//         const indexOfStart = lineS.indexOf(startStation);
//         const indexOfEnd = lineS.indexOf(endStation);

//         let process;
//         let numStop;

//         if (indexOfStart === indexOfEnd){
//             console.log('You are just at your destination.');
//         } else if(indexOfStart < indexOfEnd){
//             process = lineS.slice(indexOfStart + 1, indexOfEnd + 1);
//             numStop = indexOfEnd - indexOfStart;
//             console.log(`You must travel through the following stops on the ${line} line: ${process}.\n${numStop} stops in total`);
//         } else if(indexOfStart > indexOfEnd){
//             process = lineS.slice(indexOfEnd, indexOfStart).reverse();
//             numStop = indexOfStart - indexOfEnd;
//             console.log(`You must travel through the following stops on the ${line} line: ${process}.\n${numStop} stops in total`);            
//         }
//     }
// }; //singleLineTrip()

/* ---------------------- single line version 2 for return ------------------------- */

// const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
// const lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
// const lineS = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

// const singleLineTrip = function(line, startStation, endStation){
//     let process;

//     if (line === 'N'){
//         //find the index of start and end station
//         const indexOfStart = lineN.indexOf(startStation);
//         const indexOfEnd = lineN.indexOf(endStation);

//         if (indexOfStart === indexOfEnd){
//             console.log('You are just at your destination.');
//             return false;
//         } else if(indexOfStart < indexOfEnd){
//             process = lineN.slice(indexOfStart + 1, indexOfEnd + 1);
//         } else if(indexOfStart > indexOfEnd){
//             process = lineN.slice(indexOfEnd, indexOfStart).reverse();          
//         }
//     }

//     if (line === 'L'){
//         //find the index of start and end station
//         const indexOfStart = lineL.indexOf(startStation);
//         const indexOfEnd = lineL.indexOf(endStation);

//         if (indexOfStart === indexOfEnd){
//             console.log('You are just at your destination.');
//             return false;
//         } else if(indexOfStart < indexOfEnd){
//             process = lineL.slice(indexOfStart + 1, indexOfEnd + 1);
//         } else if(indexOfStart > indexOfEnd){
//             process = lineL.slice(indexOfEnd, indexOfStart).reverse();          
//         }
//     }

//     if (line === '6'){
//         //find the index of start and end station
//         const indexOfStart = lineS.indexOf(startStation);
//         const indexOfEnd = lineS.indexOf(endStation);

//         if (indexOfStart === indexOfEnd){
//             console.log('You are just at your destination.');
//             return false;
//         } else if(indexOfStart < indexOfEnd){
//             process = lineS.slice(indexOfStart + 1, indexOfEnd + 1);
//         } else if(indexOfStart > indexOfEnd){
//             process = lineS.slice(indexOfEnd, indexOfStart).reverse();        
//         }
//     }
//     return process;
// }; //singleLineTrip()

/* ---------------------- single line version 3 for return ------------------------- */

// const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
// const lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
// const lineS = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];


// const singleLineTrip = function(line, startStation, endStation){
//     let lineArray;
//     let process;

//     //find which line in array
//     if (line === 'N'){
//         lineArray = lineN;
//     } else if(line === 'L'){
//         lineArray = lineL;
//     }else if(line === '6'){
//         lineArray = lineS
//     }
    
//     //find the index of start and end station
//     const indexOfStart = lineArray.indexOf(startStation);
//     const indexOfEnd = lineArray.indexOf(endStation);

//     if (indexOfStart === indexOfEnd){
//         console.log('You are just at your destination.');
//         return false;
//     } else if(indexOfStart < indexOfEnd){
//         process = lineArray.slice(indexOfStart + 1, indexOfEnd + 1);
//     } else if(indexOfStart > indexOfEnd){
//         process = lineArray.slice(indexOfEnd, indexOfStart).reverse();          
//     }
//     return process;

// }; //singleLineTrip()

// /* ---------------------- double line version 1 --------------------------- */

// //find which line
// //find if the start line and the end line are the same
// //Use indexOf() to find the index of the start station
// //compare the index of start station and index of that line's 'Union Square'
// //use slice() or slice().reverse()
// //Use indexOf() to find the index of the end station
// //compare the index of end station and index of that line's 'Union Square'
// //use slice() or slice().reverse()
// //set a count. The count value is the difference between start station index and end station index

// const planTrip = function(startLine, startStation, endLine, endStation){

//     if (startLine === endLine){ //if in the same line
//         let process = singleLineTrip(startLine, startStation, endStation);
//         if (process){ //if not at the same station
//             const numStop = process.length;
//             if (numStop === 1){ //distingush output of 1 stop and multiple stops
//                 console.log(`You must travel through the following stops on the ${startLine} line: ${process}.\n${numStop} stop in total`);
//             } else{
//                 console.log(`You must travel through the following stops on the ${startLine} line: ${process}.\n${numStop} stops in total`);
//             }
//         }
     
//     } else{ // if not in the same line
//         const processOne = singleLineTrip(startLine, startStation, 'Union Square');
//         const numStopOne = processOne.length;
//         const processTwo = singleLineTrip(endLine, 'Union Square', endStation);
//         const numStopTwo = processTwo.length;
//         const numStop = numStopOne + numStopTwo;
//         console.log(`You must travel through the following stops on the ${startLine} line: ${processOne}. \nChange at Union Square. \nYour journey continues through the following stops:${processTwo}. \n${numStop} stops in total`);
//     }

// }; //planTrip()

// planTrip('N', 'Times Square', '6', '33rd');
// planTrip('N', 'Times Square', 'L', '1st');
// planTrip('N', 'Times Square', 'N', '8th');
// planTrip('L', '1st', 'L', '3rd');
// planTrip('6', '33rd', '6', '33rd');


/* ---------------------- change them into object format ------------------------- */
/* ---------------------- change them into object format ------------------------- */
/* ---------------------- change them into object format ------------------------- */



/* ---------------------- single line version 3 for return ------------------------- */

// const MTA = {
    
//     lineN: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],

//     lineL: ['8th', '6th', 'Union Square', '3rd', '1st'],

//     lineS: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],

//     singleLineTrip: function(line, startStation, endStation){
        
//         let lineArray;
//         let process;
    
//         //find which line in array
//         if (line === 'N'){
//             lineArray = this.lineN;
//         } else if(line === 'L'){
//             lineArray = this.lineL;
//         }else if(line === '6'){
//             lineArray = this.lineS
//         }
        
//         //find the index of start and end station
//         const indexOfStart = lineArray.indexOf(startStation);
//         const indexOfEnd = lineArray.indexOf(endStation);
    
//         if (indexOfStart === indexOfEnd){
//             console.log('You are just at your destination.');
//             return false;
//         } else if(indexOfStart < indexOfEnd){
//             process = lineArray.slice(indexOfStart + 1, indexOfEnd + 1);
//         } else if(indexOfStart > indexOfEnd){
//             process = lineArray.slice(indexOfEnd, indexOfStart).reverse();          
//         }
//         return process;

//     }, //singleLineTrip()
    
//     /* ---------------------- double line version 1 --------------------------- */
//     planTrip: function(startLine, startStation, endLine, endStation){
        
//         if (startLine === endLine){ //if in the same line
//             let process = this.singleLineTrip(startLine, startStation, endStation);
//             if (process){ //if not at the same station
//                 const numStop = process.length;
//                 if (numStop === 1){ //distingush output of 1 stop and multiple stops
//                     console.log(`You must travel through the following stops on the ${startLine} line: ${process.join(', ')}.\n${numStop} stop in total`);
//                 } else{
//                     console.log(`You must travel through the following stops on the ${startLine} line: ${process.join(', ')}.\n${numStop} stops in total`);
//                 }
//             }
     
//         } else{ // if not in the same line
//             const processOne = this.singleLineTrip(startLine, startStation, 'Union Square');
//             const numStopOne = processOne.length;
//             const processTwo = this.singleLineTrip(endLine, 'Union Square', endStation);
//             const numStopTwo = processTwo.length;
//             const numStop = numStopOne + numStopTwo;
//             console.log(`You must travel through the following stops on the ${startLine} line: ${processOne.join(', ')}. \nChange at Union Square. \nYour journey continues through the following stops:${processTwo.join(', ')}. \n${numStop} stops in total`);
//         }

//     }, //planTrip()

// }; //MTA object


// MTA.planTrip('N', 'Times Square', '6', '33rd');
// MTA.planTrip('N', 'Times Square', 'L', '1st');
// MTA.planTrip('N', 'Times Square', 'N', '8th');
// MTA.planTrip('L', '1st', 'L', '3rd');
// MTA.planTrip('6', '33rd', '6', '33rd');



/* ---------------------- single line version 4 for return ------------------------- */

const MTA = {
    
    N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],

    L: ['8th', '6th', 'Union Square', '3rd', '1st'],

    '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],

    singleLineTrip: function(line, startStation, endStation){
        
        let process;
    
        //find which line in array
        const lineArray = this[line];//need to use [ ] but cannot use . because line is a vairable
        
        //find the index of start and end station
        const indexOfStart = lineArray.indexOf(startStation);
        const indexOfEnd = lineArray.indexOf(endStation);
    
        if (indexOfStart === indexOfEnd){
            console.log('You are just at your destination.');
            return false;
        } else if(indexOfStart < indexOfEnd){
            process = lineArray.slice(indexOfStart + 1, indexOfEnd + 1);//1 is not a magic number
        } else if(indexOfStart > indexOfEnd){
            process = lineArray.slice(indexOfEnd, indexOfStart).reverse();          
        }
        return process;

    }, //singleLineTrip()
    
    /* ---------------------- double line version 1 --------------------------- */
    planTrip: function(startLine, startStation, endLine, endStation){
        
        if (startLine === endLine){ //if in the same line
            let process = this.singleLineTrip(startLine, startStation, endStation);
            if (process){ //if not at the same station
                const numStop = process.length;
                if (numStop === 1){ //distingush output of 1 stop and multiple stops
                    console.log(`You must travel through the following stops on the ${startLine} line: ${process.join(', ')}.\n${numStop} stop in total`);
                } else{
                    console.log(`You must travel through the following stops on the ${startLine} line: ${process.join(', ')}.\n${numStop} stops in total`);
                }
            }
     
        } else{ // if not in the same line
            const processOne = this.singleLineTrip(startLine, startStation, 'Union Square');
            const numStopOne = processOne.length;
            const processTwo = this.singleLineTrip(endLine, 'Union Square', endStation);
            const numStopTwo = processTwo.length;
            const numStop = numStopOne + numStopTwo;
            console.log(`You must travel through the following stops on the ${startLine} line: ${processOne.join(', ')}. \nChange at Union Square. \nYour journey continues through the following stops:${processTwo.join(', ')}. \n${numStop} stops in total`);
        }

    }, //planTrip()

}; //MTA object


MTA.planTrip('N', 'Times Square', '6', '33rd');
MTA.planTrip('N', 'Times Square', 'L', '1st');
MTA.planTrip('N', 'Times Square', 'N', '8th');
MTA.planTrip('L', '1st', 'L', '3rd');
MTA.planTrip('6', '33rd', '6', '33rd');




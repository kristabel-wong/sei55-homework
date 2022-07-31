//https://gist.github.com/textchimp/7c83f4458f6b45ba5d31b0d21607c87a
// MTA Lab -- version 2

const intersection = 'Union Square';
const subwayLines = {
    N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
} // subwayLines

//======== toolkits ========
const toolkits = {
    //----------- single line trip planer ------------
    //return stops array, input can be 4 arguments or 3 arguments
    singleLinePlaner: function (...args) {
        const line = args[0];
        const start = args[1];
        const end = args.length === 3 ? args[2] : args[3];
        //input can be 4 arguments or 3 arguments

        const startPoint = subwayLines[line].indexOf(start);
        const endPoint = subwayLines[line].indexOf(end);
        const direction = endPoint - startPoint;
        let stops = [];

        if (direction > 0) {
            stops = subwayLines[line].slice(startPoint, endPoint + 1);
        } else {
            stops = subwayLines[line].slice(endPoint, startPoint + 1).reverse();
        }
        return stops;
    }, // singleLinePlaner

    //--------------- input checker--------------
    // typo checker: 
    // return true or false(Boolean) and error message (Array) if avaiable
    // inputs can be 3 or 4 arguments
    typoChecker: function (...args) {
        const message = [];
        const allLines = Object.keys(subwayLines);
        const allStops = Object.values(subwayLines).flat();
        //if args.length ===3 -> starting line = ending line; add the element into args array
        if (args.length === 3) {
            args.splice(2, 0, args[0]);
        }

        //a. check starting line names
        allLines.includes(args[0]) ? null : message.push('starting line');

        //b. check starting station
        allStops.includes(args[1]) ? null : message.push('starting station');

        //c. check ending line
        allLines.includes(args[2]) ? null : message.push('ending line');

        //b. check ending station
        allStops.includes(args[3]) ? null : message.push('ending station');

        // output
        if (message.length === 0) {
            return true;
        } else {
            console.log(`%cPlease check the input: ${message.join(', ')}`, 'color:pink');
            return false;
        }
    }, // typoChecker

    // 3. chech if the input line and station match or not
    // inputs can be 3 or 4 arguments
    // return true or false(Boolean) and error message (Array) if avaiable
    isMatch: function (...args) {
        const message = [];
        //if args.length ===3 -> starting line = ending line; add the element into args array
        if (args.length === 3) {
            args.splice(2, 0, args[0]);
        }

        const startLine = args[0];
        const startStation = args[1];
        const endLine = args[2];
        const endStation = args[3];

        subwayLines[startLine].includes(startStation) ? null : message.push(`starting`);
        subwayLines[endLine].includes(endStation) ? null : message.push(`ending`);

        //output
        if (message.length === 0) {
            return true;
        } else {
            console.log(`%cThe ${message.join(', ')} line and station doesn't match`, 'color:yellow');
            return false;
        }
    }, // isMatch
} // toolkits


//======== Main function ========
// 1. check typo -> 2. check match -> 3. check 1 trip or 2 trips
// input can be 3 arguments or 4 arguments
const planTrip = function (...args) {
    // 1. typo check
    if (!toolkits.typoChecker(...args)) {
        return;
    }

    // 2. input match check
    if (!toolkits.isMatch(...args)) {
        return;
    }

    // 3. trips planer
    if (args.length === 3 || (args.length === 4 && args[0] === args[2])) {
        //1-> 1 trip
        const stops = toolkits.singleLinePlaner(...args);
        const counter = stops.length - 1;

        console.log(`%cYou must travel through the following stops on the ${args[0]} line: ${stops.join(', ')}.\n${counter} stops in total.`,'color:rgb(50, 247, 40)');
    }
    else if (arguments.length === 4) {
        //2-> 2 trips
        const firstLine = args[0];
        const startStation = args[1];
        const firstTrip = toolkits.singleLinePlaner(firstLine, startStation, intersection);

        const secondLine = args[2];
        const endStation = args[3];
        const secondTrip = toolkits.singleLinePlaner(secondLine, intersection, endStation);

        const counter = firstTrip.length + secondTrip.length - 2;

        console.log(`%cYou must travel through the following stops on the ${firstLine} line: ${firstTrip.join(', ')}.\nChange at ${intersection}.\nYour journey continues through the following stops on the ${secondLine} line: ${secondTrip.join(', ')}.\n${counter} stops in total.`,'color:rgb(40, 140, 247)');


    } else {
        console.log(`Please check your inputs`);
    }
} // planTrip

//======tests=====

//1. valid inputs
console.log('====== valied inputs =====');
planTrip('N', 'Times Square', '6', '33rd'); // two trips
planTrip('6', 'Astor Place', '6', '33rd'); // one trip: 4 inputs
planTrip('N', 'Times Square', '23rd'); // one trip: 3 inputs

//2. invalid inputs
console.log('====== invalied inputs =====');
planTrip('6', 'Astor Place', '7', '33rd'); // typo: there is no line '7'
planTrip('5', 'Astor Places', '7', '33rda'); // typo: 4 typos
planTrip('N', 'Astor Place', '6', '33rd'); // match: there is no 'Astor Place' station in line 'N'

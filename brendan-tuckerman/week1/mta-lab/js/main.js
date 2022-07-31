// MTA Lab
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation and JS data structures.
// Activity
// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."

// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)



const mtaSim = {

    N : ["Times Square", "34th", "28th", "Union Square", "8th" ], //stations on N line
    L : ["8th", "6th", "Union Square", "3rd", "1st"], //stations on L line
    "6" : ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"], //stations on 6 line
    currentLineTravelled : [], //list of stations travelled on a particular line
    totalStationsTravelled : [], //all of the stations passed through

    planTrip : function( originLine, originStat, destinLine, destinStation )  {  //main function-- uses message(), endMessage(), 
        
        this.totalStationsTravelled = []; //clears previous journey
        
        //determine index of start, end, and transfer station
        const startPosition = this[originLine].indexOf(originStat); //determine start position in array
        const transferOrigin = this[originLine].indexOf("Union Square"); //this will always be the xfer station in trips of 2 lines.
        const transferDestination = this[destinLine].indexOf("Union Square"); //the index is not the same in each array
        const endPosition = this[destinLine].indexOf(destinStation); //determine end position in array  
                
        if( originLine === destinLine ){ //single line trips
            this.travel(originLine, startPosition, endPosition); //uses travel() to move from start to end
            this.totalStationsTravelled.push(destinStation); //adds to the list of stationsTravelled
            this.endMessage(originLine, destinStation, true, true); //announce total stops and destination
              
        } else { //double line trips
            this.travel(originLine, startPosition, transferOrigin); //travel the first line
            this.endMessage(originLine, destinStation, true, false); // announce first line stations
            console.log("Transfer at Union Square."); //this is always the same 
            this.travel(destinLine, transferDestination, endPosition); //travel the second line
            this.totalStationsTravelled.push(destinStation); //needs to be added to account for final stop
            this.endMessage(destinLine, destinStation, false, true); //announce second leg and total stops
        } 
        
    },// end of plan trip

    travel : function( line, start, end ) { //this can be used for either direction. Start is an index in the array
        this.currentLineTravelled = []; //clears previous journey
        for (let i = start; (start < end) ? i < end : i > end ; (start < end) ? i++ : i-- ) { //this modifies the iterator depending on which direction (++ or -- )the train takes.
            this.totalStationsTravelled.push(this[line][i]); //add station to total journey
            this.currentLineTravelled.push(this[line][i]); // add station to current line journey
        }   
       
    }, //end travel


    endMessage : function( line, destinStation, isFirstLeg, hasArrived ) { //the message for arrival at the destination   
        let messageFiller = ( isFirstLeg === true) ? 'You must travel ' : 'Your journey continues '; //for trips on two lines
        let messageEnd = ( hasArrived === true ) ? ` before arriving at ${destinStation}.` : '.' ;
        console.log(`${messageFiller}through the following stations on line ${[line]}: ${this.currentLineTravelled.join(" -> ")}${messageEnd}`);
        if ( hasArrived  === true ) {
            console.log(`The total number of stations travelled is ${this.totalStationsTravelled.length }.`);
        }
    
    }, //end endMessage


} // end mtaSim


//Testing
console.log('***Single line test ++: ***');
mtaSim.planTrip('N', "Times Square", 'N', 'Union Square');
console.log('***Single line test --: ***');
mtaSim.planTrip('N', "8th", 'N', 'Times Square');
console.log('Multi line test ++ then --:');
mtaSim.planTrip('6', "Grand Central", "L", "8th");
console.log('Multi line test -- then ++:');
mtaSim.planTrip('L', "1st", "6", "33rd");   
console.log('Multi line test ++ then ++:');
mtaSim.planTrip('L', "8th", "6", "Astor Place");   
console.log('Multi line test -- then --:');
mtaSim.planTrip('L', "1st", "N", "Times Square");   


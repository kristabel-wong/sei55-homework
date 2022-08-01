
// MTA Lab Homework


// create the data structure, map as an object, each line as an array with each stop as an element
const map = {
    lineN: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    lineL: ["8th", "6th", "Union Square", "3rd", "1st"],
    line6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
};

const planner ={
    singleLinetrip: function (line, startStop, arriveStop) {
        let singleLine = map[`line${line}`]; // find the line
        let numOfStop; // get the number of stops
        let travelJourney; // get the travel journey

        let indexOfStartStop = singleLine.indexOf(startStop); // find the index of start
        let indexOfArriveStop = singleLine.indexOf(arriveStop); // find the index of arrive
            
        if (indexOfStartStop < indexOfArriveStop) {
                numOfStop = indexOfArriveStop - indexOfStartStop;
                travelJourney = singleLine.slice(indexOfStartStop, indexOfArriveStop + 1)
                return {
                    totalStops: numOfStop,
                    route: travelJourney,
                } // save the result in an object
                 
             } else if (indexOfStartStop > indexOfArriveStop){
                numOfStop = indexOfStartStop - indexOfArriveStop;
                travelJourney = singleLine.slice(indexOfArriveStop, indexOfStartStop + 1).reverse();
                return {
                    totalStops: numOfStop,
                    route: travelJourney,
                }
                                 
             } else {
                return `You are already here!`
             } // enter the same stop in the same line
            
    }, // single line trip planner function
    planTrip: function (line1, start, line2, end) {
        if (line1 === line2) {
            numOfStop = this.singleLinetrip(line1, start, end).totalStops;
            travelJourney = this.singleLinetrip(line1, start, end).route;  
            return {
                totalStops: numOfStop,
                route: travelJourney,
            }  
        } else {
            const journey1 = this.singleLinetrip(line1, start, 'Union Square');
            const journey2 = this.singleLinetrip(line2, 'Union Square', end);
            numOfStop = journey1.totalStops + journey2.totalStops;
            travelJourney1 = journey1.route;
            travelJourney2 = journey2.route;
            return {
                totalStops: numOfStop,
                route1: travelJourney1,
                route2: travelJourney2,
            } //two line trip

        }
    }, // the main planner function
    message: function (line1, start, line2, end) {
        if (line1 === line2) {
            return `You must travel through the following stops on the ${line1} line: ${this.planTrip(line1, start, line2, end).route.join(', ')}. ${this.planTrip(line1, start, line2, end).totalStops} stops in total.`
        } else {
            return `You must travel through the following stops on the ${line1} line: ${this.planTrip(line1, start, line2, end).route1.join(', ')}. Change at Union Square. Your jouney countines through the following stops: ${this.planTrip(line1, start, line2, end).route2.join(', ')} on the ${line2} line. ${this.planTrip(line1, start, line2, end).totalStops} stops in total.`
        }
    }, // to get the final message

    
  }; 

  // ===========Test=========
  console.log(planner.message('N', '28th', '6', '23rd'));
  console.log(planner.message('N', 'Time Square', '6', '23rd'));
  console.log(planner.message('N', '28th', 'N', '8th'));

//https://gist.github.com/textchimp/7c83f4458f6b45ba5d31b0d21607c87a
// MTA Lab

const intersection = 'Union Square';
const subwayLines = [
    {
        line: 'N',
        stops: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
    },
    {
        line: 'L',
        stops: ['8th', '6th', 'Union Square', '3rd', '1st']
    },
    {
        line: '6',
        stops: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
    },
] // subwayLines

const toolkits = {

    findAllStopsInLine: function (line) {
        // return an array that contains all stations in the 'input' line
        for (let i = 0; i < subwayLines.length; i++) {
            if (subwayLines[i].line === line) {
                return subwayLines[i].stops
            }
        }
    }, // findAllStopsInLine

    findStationIndex: function (line, station) {
        // return the index of the input station in the matched line
        const stops = this.findAllStopsInLine(line);
        for (let i = 0; i < stops.length; i++) {
            if (stops[i] === station) {
                return i
            }
        }
    }, // findStationIndex

    singleLinePlaner: function (line, start, end) {
        // same line trip planer
        // return an object contains line name, stops, and stops counter
        const startPoint = this.findStationIndex(line, start);
        const endPoint = this.findStationIndex(line, end);
        const direction = endPoint - startPoint; // flag
        const countStops = Math.abs(direction);
        const stops = [];
        if (direction > 0) {
            for (let i = startPoint; i < endPoint + 1; i++) {
                stops.push(this.findAllStopsInLine(line)[i])
            }
        } else {
            for (let i = startPoint; i > endPoint - 1; i--) {
                stops.push(this.findAllStopsInLine(line)[i])
            }
        }

        return {
            line: line,
            stops: stops,
            counter: countStops
        }
    }, // singleLinePlaner

    display: function (startLine, firstStops, endLine, secondStops, counter) {
        // formatting output, depends on 1 trip or 2 trips
        if (this.isSameLine(startLine, endLine)) {
            // output for 1 trip
            return `You must travel through the following stops on the ${startLine} line: ${firstStops.join(', ')}.\n${counter} stops in total.`
        } else {
            // output for 2 trips
            return `You must travel through the following stops on the ${startLine} line: ${firstStops.join(', ')}.\nChange at ${intersection}.\nYour journey continues through the following stops on the ${endLine} line: ${secondStops.join(', ')}.\n${counter} stops in total.` 
        }

    }, // display

    // -------------input check-------------

    isSameLine: function (startLine, endLine) {
        // same line checker
        return startLine === endLine
    }, // isSameLine

    findALl: function () {
        // find all lines and stations and return them in a 2-Dimensions array
        const allLines = [];
        const allStations = [];
        for (let i = 0; i < subwayLines.length; i++) {
            allLines.push(subwayLines[i].line);
            allStations.push(subwayLines[i].stops);
        }
        return [allLines, allStations.flat()];
    }, // findAll

    isValidInput: function (startLine, startStation, endLine, endStation) {
        // input validation checker, return boolean
        // check order: 1. 'line' input check --> 2. 'station' input check --> 3. 'line':'station' match check;
        const all = this.findALl();
        return all[0].includes(startLine) && all[0].includes(endLine) && all[1].includes(startStation) && all[1].includes(endStation) && this.findAllStopsInLine(startLine).includes(startStation) && this.findAllStopsInLine(endLine).includes(endStation)
    } // isValidInput
}

const planTrip = function (startLine, startStation, endLine, endStation) {
    // main function
    // 1. input check --> 2. same line check --> 3. display(output)
    if (toolkits.isValidInput(startLine, startStation, endLine, endStation)) { // 1. input check --> true
        if (toolkits.isSameLine(startLine, endLine)) {
            // 2. same line check --> same line trip
            const trip = toolkits.singleLinePlaner(startLine, startStation, endStation);

            const firstStops = trip.stops;
            const secondStops = null;

            const counter = trip.counter;

            const output = toolkits.display(startLine, firstStops, endLine, secondStops, counter);
            console.log(output);

        } else {
            // 2. same line check --> 2 lines trip
            const firstTrip = toolkits.singleLinePlaner(startLine, startStation, intersection);
            const secondTrip = toolkits.singleLinePlaner(endLine, intersection, endStation);

            const firstStops = firstTrip.stops;
            const secondStops = secondTrip.stops;

            const counter = firstTrip.counter + secondTrip.counter;

            const output = toolkits.display(startLine, firstStops, endLine, secondStops, counter);
            console.log(output);
        }
    } else {
        // 1. input check --> false
        console.log(`Please double check your input.`);
    }

} // planTrip

// tests:
planTrip('N', 'Times Square', '6', '33rd'); // two trips
planTrip('6', 'Astor Place', '6', '33rd'); // one trip
planTrip('N', 'Astor Place', '6', '33rd'); // there is no 'Astor Place' station in line 'N'
planTrip('6', 'Astor Place', '7', '33rd'); // there is no line '7'
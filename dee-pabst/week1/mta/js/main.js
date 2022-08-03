console.log(`%cLet me tell thee of the days of high adventure...`, 'font-family: fantasy;');
console.log(`Homework: MTA`);

// PSEUDOCODE Solution - single line

// given an origin stop and a destination stop
// locate origin
// locate destination
// decide which direction to iterate through stops
// calculate journey (stops between origin and destination)
// count stops
// print trip to console


const nySubway = {
  lineL: ['1st', '3rd', 'Union Square', '6th', '8th'],
  lineN: ['Times Square','34th', '28th','23rd','Union Square', '8th'],
  line6: ['Grand Central','33rd','28th','23rd','Union Square', 'Astor Place'],
}

const getStopsArray = function(lineCode){
  if(lineCode === 'L'){
    lineArray = nySubway.lineL;
  } else if (lineCode === 'N'){
    lineArray = nySubway.lineN;
  } else if (lineCode === '6'){
    lineArray = nySubway.line6;
  }
  // TODO: handle input error
  return lineArray;
} //getStopArray()

const getStopIndex = function(line, stop){
  return line.indexOf(stop);
} //locateStopIndex()

const singleLineJourney = function(originLine, origin, destination){
  let originIndex, destinationIndex, journeyArray;
  //get the stops from the correct line
  let stopsArray = getStopsArray(originLine);

  //locate origin
  originIndex = getStopIndex(stopsArray, origin); //TODO: handle -1 stop not found
  
  //locate destination
  destinationIndex = getStopIndex(stopsArray, destination);

  // decide which direction to travel (positive/negative index iteration)
  if(originIndex < destinationIndex){
    // travelling in positive direction
    journeyArray = stopsArray.slice(originIndex+1,destinationIndex); // copies part of the array
  } else {
    // travelling in negative direction
    journeyArray = stopsArray.slice(destinationIndex+1,originIndex);
    // reverse the order of the stops
    journeyArray.reverse() // safe since we have .slice()'d  the original array
  }
return journeyArray;
} //singleLineJourney()

const planJourney = function(originLine, origin, destinationLine, destination){
  let journey;
  let stopCounter = 0;
  console.log(`board at ${origin}`);
  // check if the trip is multi stage
  if(originLine === destinationLine){
    // single trip
    journey = singleLineJourney(originLine, origin, destination);
    if(journey.length > 0){
      console.log(`travel through ${journey.join(', ')}`);
    }
    stopCounter = journey.length + 1;
  } else {
    // multi line journey
    journey = singleLineJourney(originLine, origin, "Union Square");
    stopCounter = journey.length+1;
    if(journey.length > 0){
      console.log(`travel through ${journey.join(', ')}`);
    }
    // change at Union Square
    console.log(`change at Union Square for the ${destinationLine} Line`);
    journey = singleLineJourney(destinationLine, "Union Square", destination);
    if(journey.length > 0){
      console.log(`travel through ${journey.join(', ')}`);
    }
    stopCounter = stopCounter + journey.length+1;
  }
  console.log(`alight at ${destination}`);
  console.log(`Total stops (including destination): ${stopCounter} stop(s)`); // TODO: handle next stop case where journeyArray.length is 0
} // planJourney()

// Tests
// planJourney('L','1st','N','8th');
// planJourney('L','1st','6','Grand Central');
// planJourney('6','Astor Place','6','Grand Central');
// planJourney('6','Grand Central','6','Astor Place');
// planJourney('N','Times Square','6','Astor Place');
// planJourney('6','Astor Place','N','Times Square');
// planJourney('N','28th','6','28th');
// planJourney('N','23rd','6','23rd');
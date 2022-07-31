console.log (" MTA Homework")

// MTA Lab
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation and JS data structures.


// Activity
// Create a program that models a simple subway system.
//_________________________________________________________
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.❗️❗️

// // console.log() shows output similar to this:💢
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."💢
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."


//_________________________________________________________
// There are 3 subway lines:🫣
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Your trip planner must work in either direction, i.e. planTrip('N', 'Times Square', '6', '33rd') (starting at Times Square) should work as well as the reverse trip planTrip('6', '33rd', 'N', 'Times Square') (starting at 33rd).
//_______________________________________________________
// Hints:🫥
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// 👉 Get the program to work for a single line (in any direction) before trying to tackle multiple lines. 👈
// Don't worry about prompting the user for input. Hard code some test-run calls to the tip planning function to make it fast to test your code.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Depending on what kind of data structures you use to represent the lines and stations, you might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
//________________

//need to make each array as let b/c need to reverse the array for two way direction

// let nLine = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
let nLine = {
  name: "N Line",
  stations: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
}
//_______________
let lLine = {
  name: "L Line",
  stations:["8th", "6th", "Union Square", "3rd", "1st"]
}
let sixLine = {
  name: "6 Line",
  stations: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
}
//_______________


//input  user is getting which station
//method: insert string and output index value
// const getStationIndex = function(stationName){
//  return nLine.indexOf (stationName) // to convert 'string value' into 'index number'
// };

// console.log(getStationIndex("8th"));//test startStation()

//Stations travelling through one line
const stationsTakenOnOneLine = function (startLine,stationStart,stationEnd){
    // to convert 'string value' into 'index number'
    const stationIndexStart = startLine.stations.indexOf (stationStart);
    const stationIndexEnd = startLine.stations.indexOf (stationEnd);
    
    let listStationsTaken = null;
    //slice function takes array's index
    if (stationIndexEnd > stationIndexStart){
      listStationsTaken = startLine.stations.slice(stationIndexStart , stationIndexEnd + 1)
    
    } else if (stationIndexStart > stationIndexEnd){
      listStationsTaken =  startLine.stations.slice(stationIndexEnd ,stationIndexStart +1).reverse()
    }
    listStationsTaken.shift() //to take out the first station,b/c listStationsTaken array includes the starting station.

    console.log(`You must travel through the following stops on the ${startLine.stations.name} : ${listStationsTaken}`)
    console.log(`${totalStationsTaken} stops in total.`)

    // this is to find total stations taken 
    //array with number of stations(output in arrayform [x,x,x])
    return listStationsTaken.length;


  };

const stationsTakenToUnionSquare = function (startLine,stationStart){
  // to convert 'string value' into 'index number'
  const stationIndexStart = startLine.stations.indexOf(stationStart);
  const stationIndexEnd = startLine.stations.indexOf("Union Square");
  
  let listStationsTakenToUnionSquare = null;
  //slice function takes array's index
  if (stationIndexEnd > stationIndexStart){
    listStationsTakenToUnionSquare =  startLine.stations.slice(stationIndexStart , stationIndexEnd + 1)
  
  } else if (stationIndexStart > stationIndexEnd){
    listStationsTakenToUnionSquare=  startLine.stations.slice(stationIndexEnd ,stationIndexStart +1).reverse()
  }
  listStationsTakenToUnionSquare.shift() //to take out the first station,b/c listStationsTaken array includes the starting station.

  console.log(`You must travel through the following ${listStationsTakenToUnionSquare.length}stops on the ${startLine.name}: ${listStationsTakenToUnionSquare}.`)
  console.log(`Change at Union Square.`)

  // this is to find total stations taken 
  //array with number of stations(output in arrayform [x,x,x])
  return listStationsTakenToUnionSquare.length;



};

const stationsTakenFromUnionSquare = function (endLine,stationEnd){
  // to convert 'string value' into 'index number'
  const stationIndexStart = endLine.stations.indexOf("Union Square");
  const stationIndexEnd = endLine.stations.indexOf(stationEnd);
  
  let listStationsTakenFromUnionSquare = null;
  //slice function takes array's index
  if (stationIndexEnd > stationIndexStart){
    listStationsTakenFromUnionSquare =  endLine.stations.slice(stationIndexStart , stationIndexEnd + 1)
  
  } else if (stationIndexStart > stationIndexEnd){
    listStationsTakenFromUnionSquare =  endLine.stations.slice(stationIndexEnd ,stationIndexStart +1).reverse()
  }
  listStationsTakenFromUnionSquare.shift() //to take out the first station,b/c listStationsTaken array includes the starting station.


  console.log(`Your journey continues though following ${listStationsTakenFromUnionSquare.length} stops on the ${endLine.name}: ${listStationsTakenFromUnionSquare}.`)
  
  // this is to find total stations taken 
  //array with number of stations(output in arrayform [x,x,x])
  return listStationsTakenFromUnionSquare.length;



};



// list of stops (in strings value)
// method:  taken with input of string value
const planTrip = function (startLine,stationStart,endLine,stationEnd){
  
  // write code that determines if you need to change lines at Union Square.
  if (startLine !== endLine){
    // If you need to change,
    // run your 2 functions. need to make each of them a variable so can get the total stations after that. 
    
    let stationPartOne = stationsTakenToUnionSquare(startLine,stationStart)
    let stationPartTwo = stationsTakenFromUnionSquare(endLine,stationEnd);
    //total of stops from stations to Union Square & from Union Square to other Stations
    let totalStations = stationPartOne + stationPartTwo
    console.log(`${totalStations} in total.`)

  } else {
    // If you don't need to change
    stationsTakenOnOneLine(startLine,stationStart,stationEnd); 
  };
  // insert normal code

  
};//planTrip















  

  



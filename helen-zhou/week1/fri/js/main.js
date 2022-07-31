//https://gist.github.com/textchimp/7c83f4458f6b45ba5d31b0d21607c87a

// SIMPLE ONE WAY: program takes the line and stop that a user is getting on at and the line and stop that user is getting off

//Your trip planner must work in either direction, i.e. planTrip('N', 'Times Square', '6', '33rd') (starting at Times Square) should work as well as the reverse trip planTrip('6', '33rd', 'N', 'Times Square') (starting at 33rd).


const nLine =['Times Square', '34th', '28th', '23rd', 'Union Square','8th'];
// console.log(nLine); //DONE

// for (let i = 0; i < nLine.length; i++) {
//     console.log(nLine[i]) 
// }// will print in order 

// for (let i  = nLine.length-1; i >= 0; i--) {
//      console.log(nLine[i])
    
// }// will print backwards 


const startStation = nLine.indexOf('34th');
    console.log(startStation); // 1st var

const endStation = nLine.indexOf('8th');
    console.log(endStation); // 2nd var

 
const countStops = function (startStation, endStation){
    

}




// const oneLineTrip = function (userInputStartStation, userInputEndStation){
//     const startStation = 
//     const endStation =
//     const countStops =
//     console.log)


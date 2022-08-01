
let nLine = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];

//_______________
let lLine = ["8th", "6th", "Union Square", "3rd", "1st"];

let sixLine = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];




if (startLine === endLine){
  const stationsTaken = function (line,stationStart,stationEnd){
    // to convert 'string value' into 'index number'
    const stationIndexStart = line.indexOf (stationStart);
    const stationIndexEnd = line.indexOf (stationEnd);
    
    let listStationsTaken = null;
    //slice function takes array's index
    if (stationIndexEnd > stationIndexStart){
      listStationsTaken =  line.slice(stationIndexStart , stationIndexEnd + 1)
    
    } else if (stationIndexStart > stationIndexEnd){
      listStationsTaken =  line.slice(stationIndexEnd ,stationIndexStart +1).reverse()
    }
    listStationsTaken.shift() //to take out the first station,b/c listStationsTaken array includes the starting station.


    // this is to find total stations taken 
    //array with number of stations(output in arrayform [x,x,x])
    const totalStationsTaken = listStationsTaken.length;


    console.log(`You must travel through the following stops on the N Line : ${listStationsTaken}`)
    console.log(`${totalStationsTaken} stops in total.`)
  };

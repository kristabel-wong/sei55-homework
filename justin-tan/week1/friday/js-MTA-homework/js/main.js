const metro = {

  N: [
    "Times Square",     //0
    "34th",             //1
    "28th",             //2
    "23rd",             //3
    "Union Square",     //4
    "8th"               //5
  ], // N line

  L: [
    "8th",              //0
    "6th",              //1
    "Union Square",     //2
    "3rd",              //3
    "1st",              //4
  ], // L Line

  '6': [
    "Grand Central",    //0
    "33rd",             //1
    "28th",             //2
    "23rd",             //3
    "Union Square",     //4
    "8th"               //5
  ], // 6 Line

  getStationDepartIndex: function (line, stationDepart) {
    const stationArray = this[line]
    const getDepartIndex = stationArray.indexOf(stationDepart)
    return getDepartIndex   
  },    //function to get the index of departure station

  getStationArrivalIndex: function (line, stationArrival) {
    const stationArray = this[line]
    const getArrivalIndex = stationArray.indexOf(stationArrival)
    return getArrivalIndex
  },    //function to get the index of arrival station

  singleLineTravel: function (line, stationDepart, stationArrival) {

    const stationDepartIndex = this.getStationDepartIndex (line, stationDepart)
    const stationArrivalIndex = this.getStationArrivalIndex (line, stationArrival)

      if (stationDepartIndex < stationArrivalIndex){
        const stationsToTravel = this[line].slice(stationDepartIndex + 1, stationArrivalIndex + 1)     
        stationsToTravel   
        return stationsToTravel // station naming if travel is on normal flow
        
        } else {
          const stationsToTravel = this[line].slice(stationArrivalIndex, stationDepartIndex)
          stationsToTravel.reverse()
          return stationsToTravel // station naming if travel is on reverse flow
           
    }
  },    //function for a single line travel, which returns the name of stops you travel


  planTravel: function (lineDepart, stationDepart, lineArrival, stationArrival) {

    if (lineDepart === lineArrival) { // if travel only involve on a single line
        
        const singleLineTravelPlan = this.singleLineTravel (lineDepart, stationDepart, stationArrival)
        const travelStationAmount = singleLineTravelPlan.length // total number of stops

        return `You must travel through the following stops on the ${lineDepart} line: ${singleLineTravelPlan.join(', ')}.\nYour total number of stops altogether is ${travelStationAmount}.`

    } else {    // if travel involve multiple lines

        const firstTravelPlan = this.singleLineTravel (lineDepart, stationDepart, "Union Square")
        const secondTravelPlan = this.singleLineTravel (lineArrival, "Union Square", stationArrival)

        const firstTravelStationAmount = firstTravelPlan.length
        const secondTravelStationAmount = secondTravelPlan.length
        const totalTravelStationAmount = firstTravelStationAmount + secondTravelStationAmount //total number of stops

        return `You must travel through the following stops on the ${lineDepart} line: ${firstTravelPlan.join(', ')}.\nProceed to change to ${lineArrival} at Union Square.\nContinue through the following stops: ${secondTravelPlan.join(', ')}.\nYour total number of stops altogether is ${totalTravelStationAmount}.`

    }
  } //overall travel plan function
} 

console.log (`6: Grand Central to N: 34th\n${metro.planTravel("6", "Grand Central", "N", "34th")}` )
console.log (`L: 3rd to 6th\n${metro.planTravel("L", "3rd", "L", "6th")}` )
console.log (`N: 28th to L: 1st\n${metro.planTravel("N", "28th", "L", "1st")}` )





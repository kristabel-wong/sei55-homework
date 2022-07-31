// https://gist.github.com/textchimp/7c83f4458f6b45ba5d31b0d21607c87a

//Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at ==> Arrays are ordered, nest it inside Object 

const mta = { 
    nLine: [
      `Times Square`, 
      `34th`, 
      `28th`, 
      `23rd`, 
      `Union Square`,
      `8th`
    ],
    lline: [
      `8th`, 
      `6th`, 
      `Union Square`, 
      `3rd`,
      `1st`
    ],
    sixLine: [
      `Grand Central`, 
      `33rd`, 
      `28th`, 
      `23rd`, 
      `Union Square`, 
      `Astor Place`
    ], // when refactoring could look at 'switch' as a separate key??
    getRoutingInfo: function(line,origin,destination){  // why can't it be written as " const getRoutingInfo =function(line,origin,destination)""
       let destinationIndex = mta[line].indexOf(destination);
  
       if(startIndex > destinationIndex){
         let path = mta[line].slice(destinationIndex,startIndex);
         //instead of for loop  startpoint > endppoint ++1
           this.routinginfo = path.reverse() // print backwards
       }else{
  
         this.routinginfo = mta[line].slice(startIndex + 1,destinationIndex + 1);
        // instead of for loop startpoint < endppoint --1
       }
  
    },
    planTrip:function(line1,start,line2,destination){ // why can't it be written as "const planTrip = function(line1,start,line2,destination){""
      if (line1 === line2){
        this.getRoutingInfo(line1,start,destination);
        console.log(`You must travel through the following stops on the ${line1} line: ${this.routinginfo.join(`, `)}.`);
        console.log(this.routinginfo.length + ` stops in total.`);
      }else{
        let switch = 'Union Square';
        let numberOfStops;
        if(start === switch){
          console.log( "Change at Union Square."); // this is hard coded but if its a separate key I might not need to
          this.getRoutingInfo(line2,switch,destination);
          numberOfStops = this.routinginfo.length + 1;
          console.log(`Your journey continues through the following stops: ${this.routinginfo.join(`, `)} .`);
          console.log(`${numberOfStops} stops in total.`);
        }else if(destination === switch){
  
          this.getRoutingInfo(line1,start,switch);
          console.log(`You must travel through the following stops on the ${line1} line : ${this.routinginfo.join(`,`)} .`);
          console.log( "Change at Union Square.");
          numberOfStops = this.routinginfo.length;
          console.log(`${numberOfStops} stops in total.`);
        }else{
          this.getRoutingInfo(line1,start,switch);
          console.log(`You must travel through the following stops on the ${line1} line: ${this.routinginfo.join(`,`)} .`);
          console.log( "Change at Union Square.");
          numberOfStops = this.routinginfo.length;
          this.getRoutingInfo(line2,switch,destination);
          numberOfStops = numberOfStops + this.routinginfo.length;
          console.log(`Your journey continues through the following stops: ${this.routinginfo.join(`, `)} .`);
          console.log(`${numberOfStops - 1} stops in total.`);
        }
  
      }
    },
    routinginfo:[] // 
  };


//same line start/stop
mta.planTrip(`nLine`,`34th`,`nLine`,`8th`);

console.log(`-----------------------`);

//switch at Union Square but result not counting Union Square as a stop #??
mta.planTrip("nLine", "Times Square", "sixLine", "Astor Place");






 
/// BONUS 
//spellcheck = invalid station 
//upper lower case conditions 
//differentiate same names of different line  - change const data 









///SIMPLE

// for (let i = 0; i < nLine.length; i++) {
//     console.log(nLine[i]) 
// }// will print in order 

// for (let i  = nLine.length-1; i >= 0; i--) {
//      console.log(nLine[i])
    
// }// will print backwards 
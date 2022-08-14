const stationsPlan = {
  
      N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
      L: ["8th", "6th", "Union Square", "3rd", "1st"],
      6: ["Grand Central", "33rd", "28th","23rd", "Union Square", "Astor Place"],

    planTrip: function(startLine, startStop, endLine, endStop){
    startLine = startLine.toUpperCase();
    endLine = endLine.toUpperCase();
    let line = this[startLine];  // [ , , ,]
    let line2 = this[endLine]; // [ , , ,]
    let startNum = line.indexOf(startStop);
    let endNum = line2.indexOf(endStop);
    if (startLine === endLine) {
         if (startNum < endNum) {
            
            line = line.slice(startNum +1 , endNum + 1);
            console.log(`You must travel through the following stops on the ${startLine} line: ${line}`,`${line.length} stops in total.`)
         }else if(startNum > endNum){
          line = line.slice(endNum, startNum );
          line = line.reverse();
          console.log(`You must travel through the following stops on the ${startLine} line: ${line}.`, `${line.length} stops in total.`)

         }else{
            console.log(`You are already at ${startStop}.`)
         };

            return;
    }else{

         if (startLine === 'N' || startLine === '6' ) {
            if (startNum > 4) {
                line = line.slice( 4, startNum );
                line = line.reverse();
                console.log(`You must travel through the following stops on the ${startLine} line: ${line}.`, `Change at Union Square.`);
                usNum = line2.indexOf('Union Square');
                if(usNum > endNum){
                   line2 = line2.slice(endNum, usNum);
                   line2 = line2.reverse();
                   console.log(`Your journey continues through the following stops: ${line2}.`,` ${line.length + line2.length } stops in total.`);
                }else if(usNum < endNum){
                    line2 = line2.slice(usNum +1, endNum + 1);
                    console.log(`Your journey continues through the following stops: ${line2}.`, ` ${line.length + line2.length} stops in total.`);
                   
                };
                return;
            } else if(startNum < 4){
                line = line.slice(startNum +1 , 5);
                console.log(`You must travel through the following stops on the ${startLine} line: ${line}.` , `Change at Union Square.`);
                usNum = line2.indexOf('Union Square');
                if(usNum > endNum){
                    line2 = line2.slice(endNum, usNum);
                    line2 = line2.reverse();
                    console.log(`Your journey continues through the following stops: ${line2}.`,` ${line.length + line2.length} stops in total.`);
                 }else if(usNum < endNum){
                     line2 = line2.slice(usNum + 1, endNum + 1);
                     console.log(`Your journey continues through the following stops: ${line2}.`,` ${line.length + line2.length} stops in total.`);
                 };
                 return;
            };
            
         } else if (startLine === 'L') {
            if (startNum > 2) {
                line = line.slice( 2, startNum);
                line = line.reverse();
                console.log(`You must travel through the following stops on the ${startLine} line: ${line}.`, `Change at Union Square.`);
                usNum = line2.indexOf('Union Square');
                if(usNum > endNum){
                   line2 = line2.slice(endNum, usNum);
                   line2 = line2.reverse();
                   console.log(`Your journey continues through the following stops: ${line2}.`,` ${line.length + line2.length} stops in total.`);
                }else if(usNum < endNum){
                   line2 = line2.slice(usNum + 1, endNum + 1);
                    console.log(`Your journey continues through the following stops: ${line2}.`,` ${line.length + line2.length} stops in total.`);
                };
                return;
            } else if(startNum < 2){
               line = line.slice(startNum +1 , 3);
                console.log(`You must travel through the following stops on the ${startLine} line: ${line}.`, `Change at Union Square.`);
                usNum = line2.indexOf('Union Square');
                if(usNum > endNum){
                    line2 = line2.slice(endNum, usNum);
                    line2 = line2.reverse();
                    console.log(`Your journey continues through the following stops: ${line2}.`,` ${line.length + line2.length} stops in total.`);
                 }else if(usNum < endNum){
                     line2 = line2.slice(usNum + 1, endNum + 1);
                     console.log(`Your journey continues through the following stops: ${line2}.`,` ${line.length + line2.length} stops in total.`);
                 };
                    return;
            
         }; //else
     


      };


    };

  }, //planTrip
};//stationPlan()

stationsPlan.planTrip('L', '3rd', 'L', '1st');
stationsPlan.planTrip('N', 'Times Square', '6', '33rd');
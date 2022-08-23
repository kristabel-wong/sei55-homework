

const theMTA = {
        
    nLine  : [

        'Times Square'  ,
        
        '34th'          ,
        
        '28th'          ,
        
        '23rd'          ,
        
        'Union Square'  ,
        
        '8th'           ,
        
    ] , // closes nLine     [6 stops]
    lLine : [
        
        '8th'           ,
    
        '6th'           ,
    
        'Union Square'  ,
    
        '3rd'           ,
    
        '1st'           ,
    
    ] , // closes lLine     [5 stops]    
    sixLine : [
        
        'Grand Central' ,
    
        '33rd'          ,
    
        '28th'          ,
    
        '23rd'          ,
    
        'Union Square'  ,
    
        'Astor Place'   ,
    
    ] , // closes line6     [6 stops]

}; //   closes theMTA


const aMTACustomer = {

    startLine    : 'lLine'    ,
    startStation : '6th',

    endLine      : 'lLine'      ,
    endStation   : '1st'    

}; //    closes aMTACustomer


const tripPlanner = {
    startingLineAsArray = '0', 
    endLineAsArray = '0',
    
    aMTACustomer = {

        startLine    : 'lLine'    ,
        startStation : '6th',
    
        endLine      : 'lLine'      ,
        endStation   : '1st'    
    
    },

// debugger   
    determineStartingPosition : function ( beginningLine , beginningStation ) {


        if ( beginningLine === 'nLine' ) {

            // debugger
            startingLineAsArray = theMTA.nLine;
            for (i = 0 ; i < theMTA.nLine.length-1 ; i++ ) {
                
                if  ( theMTA.nLine[i] === theMTA.nLine.indexOf( aMTACustomer.startStation ) ) {

                    startingStationAsIndex = theMTA.nLine[i]

                }

            }
    
        } else if ( beginningLine === 'lLine' ) {
    
            startingLineAsArray = theMTA.lLine;
            for (i = 0 ; i < theMTA.lLine.length-1 ; i++ ) {

                if  ( theMTA.lLine[i]  === theMTA.lLine.indexOf( beginningStation ) ) {

                    startingStationAsIndex = theMTA.lLine[i]

                }

            }
    
        } else {
    
            startingLineAsArray = theMTA.sixLine;
            for (i = 0 ; i < theMTA.sixLine.length-1 ; i++ ) {

                if  ( theMTA.sixLine[i]  === theMTA.lLine.indexOf( beginningStation ) ) {

                    startingStationAsIndex = theMTA.sixLine[i]

                }   
                
            }; //    closes if/else for lineFilter
    
        
    
        }; //    closes lineFilter
    },
    determineStartingPosition( aMTACustomer.startLine , aMTACustomer.startStation )
    startingStationAsIndex = startingLineAsArray.indexOf( aMTACustomer.startStation );
    console.log( startingLineAsArray , startingStationAsIndex );
    
// debugger
    determineEndPosition : function ( endingLine , endingStation ) {
        if ( endingLine === 'nLine' ) {

        // debugger
        endLineAsArray = theMTA.nLine;
            for (i = 0 ; i < theMTA.nLine.length-1 ; i++ ) {
            
                if  ( theMTA.nLine[i] === theMTA.nLine.indexOf( endingStation ) ) {

                    endStationAsIndex = theMTA.nLine[i]

                }

            }

        } else if ( endingLine === 'lLine' ) {

            endLineAsArray = theMTA.lLine;
            for (i = 0 ; i < theMTA.lLine.length-1 ; i++ ) {

                if  ( theMTA.lLine[i]  === theMTA.lLine.indexOf( endingStation ) ) {

                    endStationAsIndex = theMTA.lLine[i]

                }

            }

        } else {

            endLineAsArray = theMTA.sixLine;
            for (i = 0 ; i < theMTA.sixLine.length-1 ; i++ ) {

                if  ( theMTA.sixLine[i]  === theMTA.lLine.indexOf( endingStation ) ) {

                    endStationAsIndex = theMTA.sixLine[i]

                }   
            
            }; //    closes if/else for lineFilter

    

        }; //    closes lineFilter
    }
    determineEndPosition( aMTACustomer.endLine , aMTACustomer.endStation );
    let endStationAsIndex = endLineAsArray.indexOf( aMTACustomer.endStation );        
    // console.log( endLineAsArray, endStationAsIndex );
    // console.log( startingLineAsArray , startingLineAsIndex );
    
    directionOfTravel : function {
       
        
        upIndex : function ( startingLineStation, startingTrainLine, endTrainStation, endTrainLine ) {

            for (let i = startingLineStation ; i < startingTrainLine.length ; i++ ) {           
        
                if ( aMTACustomer.endStation === 'Union Square') { 
        
                    return console.log('You have arrived at your destination: Union Sqaure. Mind the gap.')
                
                } else if ( startingTrainLine !== endTrainLine ) {
    
                    return console.log(`You have arrived at Union Square, please change lines at this station to the ${endTrainLine}.`)
        
                } else if ( endTrainStation === `${startingTrainLine[i]}`) {
        
                    return console.log(`You have arrived at your destination: ${endLineAsArray[i]} Station. Mind the gap.`)
        
                } else if ( `${endLineAsArray[i]}` === aMTACustomer.endStation ) {
    
                    return console.log(`You have arrived at your destination: ${endLineAsArray[i]} on the ${aMTACustomer.endLine}.`) 
                    
                } else {
    
                    console.log( `The current stop is ${startingTrainLine[i]} station.`)
    
                } //    closes if-else / for / upIndex
        
            } //    closes for / upIndex
    
        }, //    closes upIndex
        
    // debugger    
        // console.log(upIndex( startingStationAsIndex, startingLineAsArray , endStationAsIndex  , endLineAsArray));
    
        downIndex : function ( startingTrainStation, startingTrainLine, endTrainStation, endTrainLine ) {
    
            for (let i = startingTrainStation ; i >= 0 ; i-- ) {
    
                if ( aMTACustomer.endStation === 'Union Square' ) { 
        
                    return console.log('You have arrived at your destination: Union Sqaure. Mind the gap.')
                
                } else if ( endTrainLine !==  startingTrainLine) {
        
                    return console.log(`You have arrived at Union Square, please change lines at this station to the ${aMTACustomer.endLine}.`)
        
                } else if ( endTrainStation === `${startingTrainLine[i]}`) {
        
                    return console.log(`You have arrived at your destination: ${startingTrainLine[i]}. Mind the gap.`)
        
                } else if ( `${endLineAsArray[i]}` === aMTACustomer.endStation ) {
    
                    return console.log(`You have arrived at your destination: ${endLineAsArray[i]} on the ${aMTACustomer.endLine}.`)
    
                } else {
    
                    console.log( `The current stop is ${startingTrainLine[i]} station.`)
    
                } //    closes if-else / for / upIndex
        
            } //    closes for / upIndex
    
        }, //    closes downIndex
        
    // debugger
        // console.log(downIndex( startingStationAsIndex, startingLineAsArray, endStationAsIndex, endLineAsArray));

        if (  ) {


        }
    },
    
    upIndex( startingStationAsIndex, startingLineAsArray , endStationAsIndex  , endLineAsArray){

    },
    
    downIndex( startingStationAsIndex, startingLineAsArray , endStationAsIndex, endLineAsArray){

    }

}


const tripTools = function () {
    let startingLineAsArray = '0'; 
    let endLineAsArray = '0';

// debugger   
    const determineStartingPosition = function ( beginningLine , beginningStation ) {


        if ( beginningLine === 'nLine' ) {

            // debugger
            startingLineAsArray = theMTA.nLine;
            for (i = 0 ; i < theMTA.nLine.length-1 ; i++ ) {
                
                if  ( theMTA.nLine[i] === theMTA.nLine.indexOf( aMTACustomer.startStation ) ) {

                    startingStationAsIndex = theMTA.nLine[i]

                }

            }
    
        } else if ( beginningLine === 'lLine' ) {
    
            startingLineAsArray = theMTA.lLine;
            for (i = 0 ; i < theMTA.lLine.length-1 ; i++ ) {

                if  ( theMTA.lLine[i]  === theMTA.lLine.indexOf( beginningStation ) ) {

                    startingStationAsIndex = theMTA.lLine[i]

                }

            }
    
        } else {
    
            startingLineAsArray = theMTA.sixLine;
            for (i = 0 ; i < theMTA.sixLine.length-1 ; i++ ) {

                if  ( theMTA.sixLine[i]  === theMTA.lLine.indexOf( beginningStation ) ) {

                    startingStationAsIndex = theMTA.sixLine[i]

                }   
                
            }; //    closes if/else for lineFilter
    
        
    
        }; //    closes lineFilter
    }
    determineStartingPosition( aMTACustomer.startLine , aMTACustomer.startStation );
    let startingStationAsIndex = startingLineAsArray.indexOf( aMTACustomer.startStation );
    console.log( startingLineAsArray , startingStationAsIndex );
    
// debugger
    const determineEndPosition = function ( endingLine , endingStation ) {
        if ( endingLine === 'nLine' ) {

        // debugger
        endLineAsArray = theMTA.nLine;
            for (i = 0 ; i < theMTA.nLine.length-1 ; i++ ) {
            
                if  ( theMTA.nLine[i] === theMTA.nLine.indexOf( endingStation ) ) {

                    endStationAsIndex = theMTA.nLine[i]

                }

            }

        } else if ( endingLine === 'lLine' ) {

            endLineAsArray = theMTA.lLine;
            for (i = 0 ; i < theMTA.lLine.length-1 ; i++ ) {

                if  ( theMTA.lLine[i]  === theMTA.lLine.indexOf( endingStation ) ) {

                    endStationAsIndex = theMTA.lLine[i]

                }

            }

        } else {

            endLineAsArray = theMTA.sixLine;
            for (i = 0 ; i < theMTA.sixLine.length-1 ; i++ ) {

                if  ( theMTA.sixLine[i]  === theMTA.lLine.indexOf( endingStation ) ) {

                    endStationAsIndex = theMTA.sixLine[i]

                }   
            
            }; //    closes if/else for lineFilter

    

        }; //    closes lineFilter
    }
    determineEndPosition( aMTACustomer.endLine , aMTACustomer.endStation );
    let endStationAsIndex = endLineAsArray.indexOf( aMTACustomer.endStation );        
    // console.log( endLineAsArray, endStationAsIndex );
    // console.log( startingLineAsArray , startingLineAsIndex );

    const upIndex = function ( startingLineStation, startingTrainLine, endTrainStation, endTrainLine ) {

        for (let i = startingLineStation ; i < startingTrainLine.length ; i++ ) {           
    
            if ( aMTACustomer.endStation === 'Union Square') { 
    
                return console.log('You have arrived at your destination: Union Sqaure. Mind the gap.')
            
            } else if ( startingTrainLine !== endTrainLine ) {

                return console.log(`You have arrived at Union Square, please change lines at this station to the ${endTrainLine}.`)
    
            } else if ( endTrainStation === `${startingTrainLine[i]}`) {
    
                return console.log(`You have arrived at your destination: ${endLineAsArray[i]} Station. Mind the gap.`)
    
            } else if ( `${endLineAsArray[i]}` === aMTACustomer.endStation ) {

                return console.log(`You have arrived at your destination: ${endLineAsArray[i]} on the ${aMTACustomer.endLine}.`) 
                
            } else {

                console.log( `The current stop is ${startingTrainLine[i]} station.`)

            } //    closes if-else / for / upIndex
    
        } //    closes for / upIndex

    } //    closes upIndex
    upIndex( startingStationAsIndex, startingLineAsArray , endStationAsIndex  , endLineAsArray);
// debugger    
    // console.log(upIndex( startingStationAsIndex, startingLineAsArray , endStationAsIndex  , endLineAsArray));

    const downIndex = function ( startingTrainStation, startingTrainLine, endTrainStation, endTrainLine ) {

        for (let i = startingTrainStation ; i >= 0 ; i-- ) {

            if ( aMTACustomer.endStation === 'Union Square' ) { 
    
                return console.log('You have arrived at your destination: Union Sqaure. Mind the gap.')
            
            } else if ( endTrainLine !==  startingTrainLine) {
    
                return console.log(`You have arrived at Union Square, please change lines at this station to the ${aMTACustomer.endLine}.`)
    
            } else if ( endTrainStation === `${startingTrainLine[i]}`) {
    
                return console.log(`You have arrived at your destination: ${startingTrainLine[i]}. Mind the gap.`)
    
            } else if ( `${endLineAsArray[i]}` === aMTACustomer.endStation ) {

                return console.log(`You have arrived at your destination: ${endLineAsArray[i]} on the ${aMTACustomer.endLine}.`)

            } else {

                console.log( `The current stop is ${startingTrainLine[i]} station.`)

            } //    closes if-else / for / upIndex
    
        } //    closes for / upIndex

    } //    closes downIndex
    downIndex( startingStationAsIndex, startingLineAsArray , endStationAsIndex, endLineAsArray);
// debugger
    // console.log(downIndex( startingStationAsIndex, startingLineAsArray, endStationAsIndex, endLineAsArray));


}; //   closes tripPlanner

tripTools();
console.log(tripTools)
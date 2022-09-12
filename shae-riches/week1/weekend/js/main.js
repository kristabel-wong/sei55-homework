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
    startStation : '8th',

    endLine      : 'sixLine'      ,
    endStation   : 'Grand Central'    

}; //    closes aMTACustomer


const routeGenerator = function () {
    
    let startingLineAsArray = '0'; 
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
    };
    determineStartingPosition( aMTACustomer.startLine , aMTACustomer.startStation );
    let startingStationAsIndex = startingLineAsArray.indexOf( aMTACustomer.startStation );
    
    let endLineAsArray = '0';
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
    };
    determineEndPosition( aMTACustomer.endLine , aMTACustomer.endStation );
    let endStationAsIndex = endLineAsArray.indexOf( aMTACustomer.endStation );
debugger

    const directionDecisions = function () {
        let tripNumber = 1 ;
        const directionOptions = {
            
            numericallyDecreaseIndex : function ( startingTrainStation, startingTrainLine, endTrainStation, endTrainLine ) {

                if ( tripNumber === 2 ) {
                        
                    for (let i = 4 ; i >= 0 ; i-- ) {
    
                        if ( aMTACustomer.endLine === "lLine" && i === 0) {
    
                            console.log ( `You have arrived at your destination: ${endTrainLine[i]} Station. Mind the gap.` )


                        } else if ( i = 0 ) { 

                            console.log ( `You have arrived at your destination: ${endTrainLine[i]} Station. Mind the gap.` )

                        } else {
    
                            console.log( `The current stop is ${endTrainLine[i]} station.`)
    
                        }

                    }                   


                } else {
                        
                    for (let i = startingTrainStation ; i > 0 ; i-- ) {
                            
                        if ( aMTACustomer.startLine === "lLine" && i === 2 ) {
    
                            console.log( `You have arrived at Union Square, please change lines at this station to the ${aMTACustomer.endLine}.` )
                            tripNumber = 2 ;
                            directionOfTravel(2);
    
                        } else if ( i === 4 && aMTACustomer.endLine !== "lLine" ) {
    
                            console.log(`You have arrived at Union Square, please change lines at this station to the ${aMTACustomer.endLine}.`)
                            tripNumber = 2 ;
                            directionOfTravel(2);
    
                        } else if ( i === endTrainStation ) {
    
                            console.log( `You have arrived at your destination: ${endTrainLine[i]} Station. Mind the gap.` );

                        } else {
    
                            console.log( `The current stop is ${startingTrainLine[i]} station.`);
    
                        }                   

                    }//    closes for of numericallyDecreaseIndex

                }                
        
            }, //    closes numericallyDecreaseIndex    /directionOptions/directionDecisions/routeGenerator
            
            numericallyIncreaseIndex : function ( startingLineStation, startingTrainLine, endTrainStation, endTrainLine ) {

                if ( tripNumber === 2 ) {

                    for (let i = 0 ; i < startingTrainLine.length-1 ; i++ ) {           
    
                        if ( startingTrainLine !== endTrainLine ) {

                            if ( startingTrainLine[i] === endTrainStation ) {

                                console.log( `You have arrived at your destination: ${endTrainLine[i]} Station. Mind the gap.` );

                            } else if ( startingTrainLine[i] === endTrainStation ) {

                                console.log( `You have arrived at your destination: ${endTrainLine[i]} Station. Mind the gap.` );

                            } else {

                                console.log( `The current stop is ${startingTrainLine[i]} station.`)

                            }     

                        }  //    closes for / numericallyIncreaseIndex
        
                    } //    closes numericallyIncreaseIndex/routeGenerator

                } else {
                
                    for (let i = 0 ; i < startingTrainLine.length-1 ; i++ ) {           


                        if ( aMTACustomer.startLine === "lLine" && i === 2 ) {

                            console.log( `You have arrived at Union Square, please change lines at this station to the ${aMTACustomer.endLine}.` )
                            tripNumber = 2 ;
                            directionOfTravel(2);

                        } else if ( i === 4 ) {

                            console.log(`You have arrived at Union Square, please change lines at this station to the ${aMTACustomer.endLine}.`)
                            tripNumber = 2 ;
                            directionOfTravel(2);

                        } else if ( i === endTrainStation && endTrainLine === startingTrainLine ) {

                            return console.log(`You have arrived at your destination: ${endTrainLine[i]} Station. Mind the gap.`)

                        } else {

                            console.log( `The current stop is ${startingTrainLine[i]} station.`)                        

                        }

                    }
    
                }

            } //    closes numericallyIncreaseIndex     /directionOptions/directionDecisions/routeGenerator

        // debugger    
        } //    closes directionOptions     /directionDecisions/routeGenerator
        
        const directionOfTravel = function ( tripNumber ) {
            
            if ( tripNumber === 2 ) {  

                if ( aMTACustomer.endLine === 'lLine' && endStationAsIndex > 2 ) {

                    directionOptions.numericallyIncreaseIndex ( theMTA.lLine[2] , startingLineAsArray , endStationAsIndex  , endLineAsArray )
                    

                } else if ( endStationAsIndex > 4 ) {

                    directionOptions.numericallyIncreaseIndex ( theMTA.nLine[4] , endLineAsArray , endStationAsIndex, endLineAsArray ) 

                } else {

                    directionOptions.numericallyDecreaseIndex ( theMTA.nLine[4] , endLineAsArray , endStationAsIndex, endLineAsArray ) 

                } //    closes if&else /    if/directionOfTravel/directionDecisions/routeGenerator

            } else {

                if ( aMTACustomer.startLine === 'lLine' && startingStationAsIndex > 2 ) {   

                    directionOptions.numericallyDecreaseIndex ( startingStationAsIndex, startingLineAsArray , endStationAsIndex, endLineAsArray ) 
        
                } else if ( startingStationAsIndex > 4 ) { 
        
                    directionOptions.numericallyDecreaseIndex ( startingStationAsIndex, startingLineAsArray , endStationAsIndex, endLineAsArray ) 
            
                } else {
        
                    directionOptions.numericallyIncreaseIndex ( startingStationAsIndex, startingLineAsArray , endStationAsIndex  , endLineAsArray )
        
                } //    closes if&else /    else/directionOfTravel

            } //    closes if&else /   else/directionsOfTravel/directionDecisions/routeGenerator

        } //    closes directionOfTravel /  directionDecisions/routeGenerator
        directionOfTravel ( tripNumber )

    } //    closes directionDecisions /    routeGenerator
    directionDecisions();    

} //    closes routeGenerator
routeGenerator();   

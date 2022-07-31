

// How to get started:

// const isLeapYear = function (year) {

    // Every year that is evenly divisible by 4 - divisible by 4
    // year % 4 === 0

    // Except if it is evenly divisible by 100...

    // year % 100 !==0

    // Unless it is also divisible by 400
    // year % 400 === 0

// }



// helper function

const isDivisbleBy = function ( num, divisor) {
    return num % divisor === 0;
}


const isLeapYears = function (year) {

    if (isDivisbleBy(year, 4)) {  // divisible by 4 - 

        // also not divisible by 100 OR divisible by 400
        if ( !isDivisbleBy(year, 100) || isDivisbleBy(year, 400))  {   
            return true
        }
    }

    return false
}

// console.log(1997, isLeapYears(1997))
// console.log(1996, isLeapYears(1996))
// console.log(1900, isLeapYears(1900))


// shorter version

const isLeapYear2 = function( year){

    if( (year % 4 === 0 ) && (( year % 100 !== 0) || (year % 400 === 0) )){
      return true;
    } else {
      return false;
    }
  };


// shortest version:

const isLeapYr = function (year) {
    // a year is a leap year if it is divisible by 4 AND EITHER it is NOT divisible 100 OR it IS divisible by 400
    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0 );
}

// console.log(isLeapYr(1997))
// console.log(isLeapYr(1996))
// console.log(isLeapYr(1900))
// console.log(isLeapYr(2004))
// console.log(isLeapYr(2016))




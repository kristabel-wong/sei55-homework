console.log(`%cLet me tell thee of the days of high adventure...`, 'font-family: fantasy; font-size: 14px;');
console.log(`Credit Card Validation`);

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

//     Number must be 16 digits, all of them must be numbers
//     You must have at least two different digits represented (all of the digits cannot be the same)
//     The final digit must be even
//     The sum of all the digits must be greater than 16

const validateCreditCard = function(cc){
    // create output object
    const output = {
        number: cc,
    };
    
    // remove the dashes and rejoin the strings
    const numbers = cc.split('-').join('');
    
    const correctLength = function(){
        // must be 16 digits
        if(numbers.length === 16){
            // pass test
            return true;
        }else {
            // log length error
            output.error = 'wrong length';
            return false;
        }
    } 
    
    const containsOnlyNumbers = function(){
        // must contain only numbers 
        for(let i = 0; i<numbers.length; i++){
            if(isNaN(parseInt(numbers[i])) === false){
                // pass valid number test
                return true;
            } else {
                // log non valid characters error
                output.error = 'invalid characters';
                return false;
            }
        }
    }
    
    const sumOfDigitsIsGreaterThan16 = function(){
        // sum of digits cannot be less than 16
        let sum = 0
        for(let i = 0; i<numbers.length; i++){
            sum = sum + parseInt(numbers[i]);
        }
        if(sum >= 16){
            // pass test
            return true;
        } else{
            // log error sum lower than 16
            output.error = 'sum less than 16';
            return false;
        }
    }
    
    const finalDigitEven = function(){
        // final digit must be even
        if(parseInt(numbers[numbers.length-1]) % 2 === 0){
            // pass test
            return true;
        } else {
            // log error final digit is odd
            output.error = 'odd final number'; 
            return false;
        }
    }
    
    const hasNonIdenticalNumbers = function(){
        // test if all numbers are identical
        // set first number as one to compare to
        let previousNumber = numbers[0];
        // start comparing from second number
        for(let i = 1; i<numbers.length; i++){
            if(numbers[i] !== previousNumber){
                return true; // found a different number - break out 
            }
            // set previousNumber
            previousNumber = numbers[i];
        } // for loop
        // log only one type of number error
        output.error = 'only one type of number';
        return false;
    }
    
    // validation funnel with short circuit if conditional
    if(correctLength() 
        && containsOnlyNumbers() 
        && finalDigitEven()
        && hasNonIdenticalNumbers()
        && sumOfDigitsIsGreaterThan16() ){
            output.valid = true;
        } else {
            output.valid = false;
        }

    return output;
} // validateCreditCard()

// Tests
console.log(validateCreditCard('6666-6666-6666-1666')); // valid
console.log(validateCreditCard('9999-9999-8888-0000')); // valid
console.log(validateCreditCard('a923-3211-9c01-1112')); // invalid characters
console.log(validateCreditCard('1111-1111-1111-1110')); // sum less than 16
console.log(validateCreditCard('6666-6666-6666-6661')); // odd final number
console.log(validateCreditCard('4444-4444-4444-4444')); // only one type of number

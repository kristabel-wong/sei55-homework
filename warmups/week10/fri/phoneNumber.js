const phoneNumberCheck = {      // encapsulation

    // 1. clean up my number to be validated

    cleanNumber: function (num) {

        // valid digits:
        let digits = '0123456789'

        // SIMPLE - clean up string
        // let cleaned = []
        // for (let i = 0; i < num.length; i++) {
        //     let currentNum = num[i]

        //     // if it doesn't exist in the digits string, it will return a -1. 
        //     if (digits.indexOf(currentNum) !== -1 ) {
        //         cleaned.push(currentNum)
        //     } 
        // }

        // console.log(cleaned)


        // Magical - filter() & includes()
        let numsArray = num.split("")
        let cleaned = numsArray.filter( char => digits.includes(char) ) // array
        
        return cleaned.join(""); // join back up into string
        
    },

    // 2. Validate the number - rules in Q

    isValid: function (num) {
        let cleanNumber = this.cleanNumber(num);

        // if there are 11 digits & first digit is 1, it is valid
        if (cleanNumber.length === 11 && cleanNumber[0] === '1') {            
            return cleanNumber.substring(1) // e.g. '11234567890' 

        } else if( cleanNumber.length === 10) {            // if its 10 digits its valid
            return cleanNumber

        } else { // else it is invalid
            return '0000000000'
        }

    },


    // 3. Format my number
    getFormattedNumber: function (num) {
        let validNumber = this.isValid(num);

        const areaCode = validNumber.substring(0,3); 
        const exchangeCode = validNumber.substring(3,6);
        const remaining = validNumber.substring(6);

        // console.log(`(${areaCode}) ${exchangeCode}-${remaining}`);
        return `(${areaCode}) ${exchangeCode}-${remaining}`;
    }
}

console.log(phoneNumberCheck.getFormattedNumber('D112s3456!789?0sdf'));
console.log(phoneNumberCheck.getFormattedNumber('1234567890'));
console.log(phoneNumberCheck.getFormattedNumber('71234567890'));

 // (123) 456-7890
 // (123) 456-7890

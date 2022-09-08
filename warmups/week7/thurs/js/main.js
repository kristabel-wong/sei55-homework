console.log('a-chhoooo');

// The list of items (and their value) that were tested are:

// eggs (1)
// peanuts (2)
// shellfish (4)
// strawberries (8)
// tomatoes (16)
// chocolate (32)
// pollen (64)
// cats (128)


// Examples:
// allergies.diagnosis(34);  // => [ 'chocolate', 'peanuts' ]
// allergies.diagnosis(26);  // => [ 'tomatoes', 'strawberries', 'peanuts' ]
// allergies.diagnosis(132); // => [ 'cats', 'shellfish' ]
// allergies.diagnosis(0);   // => [] 


const allergies = {

    list: {
        1: "eggs", 
        2: "peanuts", 
        4: "shellfish", 
        8: "strawberries", 
        16: "tomatoes", 
        32: "chocolate", 
        64: "pollen", 
        128: "cats" 
    },

    diagnosis: function (totalScore) {
        
        // 1. Ensure order of the score
        const scores = Object.keys(this.list).reverse();
        // console.log(scores) 

        // 2. Collect our allergens
        const allergies = [];

        // 3. Loop through the scores

        for (let i = 0; i < scores.length; i++) {
            // console.log(scores[i], typeof scores[i]) // make sure the number is not a string

            const allergenScore = Number(scores[i])

            if ( allergenScore <= totalScore ) {
                // totalScore = totalScore - allergenScore; the below is a shorter version of this
                totalScore -= allergenScore;

                // push it into our array
                allergies.push(this.list[allergenScore]);
            }
        }

        return allergies;
        
    }

}

console.log(allergies.diagnosis(34)); // chocolate and peanuts
console.log(allergies.diagnosis(26)); // [ 'tomatoes', 'strawberries', 'peanuts' ]
console.log(allergies.diagnosis(132)); //  [ 'cats', 'shellfish' ]


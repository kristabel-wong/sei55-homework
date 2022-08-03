const story = "The dogs are happy. The dogs are running. The owners are drunk. The dogs are running on the road. The dogs are gone. Bye, dogs.";


const wordCounter = function (string) {
    // create an array

    const stringArray = string.split(' '); // bonus part 1 - using regex (google) - split(/[ ,.]+/)

    // create an object
    const freq = {}

    // loop through array 
    for (let i = 0; i < stringArray.length; i++) {
        const currentWord = stringArray[i]; // bonus part 2 add .toLowerCase()

        if ( currentWord in freq ) { // check to see if word is in object
            freq[ currentWord ] += 1; // increment instance
        } else {
            freq[currentWord] = 1; // create an instance
        }

    }

    // print results

    // for (const key in freq ) { // if you want to print line by line
    //     console.log(`${key}: ${freq[key]}`);
    // }

    // console.table(freq) // print in table format

    // Sorting ultra-bonus
    const arrayOfEntries = Object.entries( freq ); 
    // .sort only works on an array, so need to turn object into array of entries
    arrayOfEntries.sort( function(a, b){ 
        return b[1] - a[1]; 
    });

    console.table( arrayOfEntries ); // print out nice
    
    return freq;


}

wordCounter(story);
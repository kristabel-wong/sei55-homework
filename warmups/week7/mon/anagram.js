

// # Anagram Detector
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.

// In other words, given: ``"listen"`` and ``["enlists" "google" "inlets" "banana"]`` the program should return ``"inlets"``.

// ## Suggestions
// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.


// Start with the basics:

    // try the below inbuilt methods separately to help you understand how they work:

    // console.log("listen".split("").sort().join(""));
    // console.log("inlets".split("").sort().join(""));

    // const chosenWord = "listen".split("").sort().join("");
    // const anagram = "inlets".split("").sort().join("");

    // console.log(chosenWord === anagram);



// Now ADD the above into a FUNCTION:
    // const sortingWord = function (unsortedWord) {
    //     let sortedWord = unsortedWord.split("").sort().join("");
    //     // console.log(sortedWord);
    //     return sortedWord;
    // }

    // // sortingWord('listen');


    // const anagramDetector = function (word, array) {

    //     const chosenWord = sortingWord(word);
    //     console.log(chosenWord);
        

        // for (let i = 0; i < array.length; i++) {
        //     // console.log(array[i]);
        //     const possibleMatch = sortingWord(array[i]);

        //     if (chosenWord === possibleMatch) {
        //         console.log(`The anagram of ${word} is ${array[i]}`)
        //     }
            
        // }

    // }

    // anagramDetector("listen", ["enlists", "google", "inlets", "banana"]);



// FINAL VERSION:

const anagramDetector = {

    anagram: [], // for multiple matches

    sortingWord: function (unsortedWord) {
        return unsortedWord.split("").sort().join("");
    }, 

    findMatch: function (word, array) {
        const chosenWord = this.sortingWord(word);

        for (let i = 0; i < array.length; i++) {
            const possibleMatch = this.sortingWord(array[i]);
    
            if (chosenWord === possibleMatch) {
                // console.log(`The anagram of ${word} is ${array[i]}`);

                this.anagram.push(array[i]);
            }
            
        }

        // console.log(`The anagram of ${word} is ${this.anagram}`);

        // below is for Shae (otherwise you can ignore the below and use the line above ):

        if (this.anagram.length < 2) {

            console.log(`The anagram of ${word} is ${this.anagram}`);
        } else {
            console.log(`The anagrams of ${word} are ${this.anagram}`);
        }
        
    }

}



anagramDetector.findMatch("listen", ["enlists", "google", "inlets", "banana"]); 
anagramDetector.findMatch("listen", ["enlists", "google", "inlets", "banana", "tinsel"]); // added tinsel as another match - hence the anagram array
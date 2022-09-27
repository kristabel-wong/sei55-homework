// Solution 1

const isIsogram = (word) => {

    // make it case insensitive
    word = word.toLowerCase()

    // collect characters in an object
    const characters = {}

    // loop through word to see if its in the object
    for (let i = 0; i < word.length; i++ ) {
        const currentLetter = word[i]
        
        if (characters[currentLetter] === 'exists' ) { // check if it already exists i.e. repeats
            console.log('repeat', currentLetter);
            console.log(currentLetter, characters[currentLetter]);
            return false; // exits early 
            
        } else { // if unique
            
            console.log('unique', currentLetter);
            characters[currentLetter] = 'exists'
        }
    }

    // return characters
    return true;

}

// console.log(isIsogram("Dermatoglyphics")); // true
// console.log(isIsogram("isIsogram")); // false



// Solution 2

const isIsogram2 = (word) => new Set(word.toLowerCase()).size === word.length

    // you have already met Array.from(), now meet Set()
    // const characters = new Set(word.toLowerCase())
    // console.log(characters, characters.size);
    // console.log('word length:', word.length );
    
    




// isIsogram2("isIsogram")
console.log(isIsogram2("Dermatoglyphics")); // true
console.log(isIsogram2("isIsogram")); // false


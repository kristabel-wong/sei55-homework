// Write your code here

let markov = {}

const file = '/text.txt'

// * Make a Markov Table

const makeMarkov = (text) => {
    
    // 2. Separate all the text in the loaded file into an array of words. 
    // const words = text.split(" ")
    const words = text.split(/[ .,;\-\n]+/)
    // console.log('words', words);
    
    // 3. Iterate over the array and add a key to your lookup table for each word, and an empty array as the key's value (if it's not already set as a key); get the word that follows this word and push it onto the array of words for this key (i.e. and words in this array are words which have been found to follow this word in your original text). Repeat.

    for (let i = 0; i < words.length -1; i++) {
        let word = words[i]

        if (!markov[word]) {
            markov[word] = [] // markov key's value must be initialised or .push won't work
        }

        let nextWord = words[i+1]
        markov[word].push(nextWord)
    }
    
    console.log('markov', markov);
    
}

// * GENERATE

// Helper functions
// 1. random index from an array

const getRandom = (num) => {
    return Math.floor(Math.random() * num)
}

// 2. get random element from the array 

const chooseText = (array) => {
    return array[getRandom(array.length)]
}

// 3. Generate function - 60 words

const generate = (length) => {
    let upcomingWord = chooseText(Object.keys(markov))
    let output = upcomingWord

    // i want 60 words, keep looping through and pick random words
    for (let i = 0; i < length; i++) {
        let word = chooseText(markov[upcomingWord]) 

        // output = output + " " + word
        output += " " + word
        upcomingWord = word
    }

    // console.log('output', output);
    return output
}


$(document).ready(function () {
    axios.get(file)
    .then((res) => {
        // console.log('text file', res.data);

        // TODO: making a markov table with res.data
        makeMarkov(res.data)

        // TODO: adding the words to the page
        let text = generate(60)
        let $el = $('<p>').text(text)
        $('#output').append($el)

        
    })
    .catch( (err) => {
        console.error(err)
    })
})
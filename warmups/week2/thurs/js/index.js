

const scrabble = {

    letterScores: {

        1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
        2: ["D", "G"],
        3: ["B", "C", "M", "P"],
        4: ["F", "H", "V", "M","Y"],
        5: ["K"],
        8: ["J", "X"],
        10: ["Q", "Z"],

    }, 

    getWordScore: function (word) {
        word = word.toUpperCase();
        let score = 0;

        // looping over each letter in word
        for (let i = 0; i < word.length; i++) {

            const currentLetter = word[i]; // C 

            // console.log(currentLetter);

            // loop over each key value pair in letterScores
            for (let key in this.letterScores) {
                // if the currentLetter in value of key in letterScore

                // if the key of 1 includes "C"
                if (this.letterScores[key].includes(currentLetter)) {
                    score += parseInt(key);
                }
            }

        }

        return score;

    }

}

console.log(scrabble.getWordScore('cabbage')); 
console.log(scrabble.getWordScore('kris')); 




const scrabbleImproved = {

    letterScores: {
        'a': 1, 'e': 1, 'i': 1, 'o': 1,
        'u': 1, 'l': 1, 'n': 1, 'r': 1,
        's': 1, 't': 1, 'd': 2, 'g': 2,
        'b': 3, 'c': 3, 'm': 3, 'p': 3,
        'f': 4, 'h': 4, 'v': 4, 'w': 4,
        'y': 4, 'k': 5, 'j': 8, 'x': 8,
        'q': 10, 'z': 10
    },
    getWordScore: function (word) {

        let score = 0;

        for (let i = 0; i < word.length; i++) {

            const currentLetter = word[i]; // c

            const letterScore = this.letterScores[currentLetter]; // 3

            score += letterScore;

        }

        return score;

    }

}

console.log(scrabbleImproved.getWordScore('cabbage')); //14
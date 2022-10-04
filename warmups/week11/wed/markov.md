# Markov Text
**YOUR TASK** is to create a page in HTML and Javascript which loads a local text file using AJAX (it should be a book or at least something coherent, 250Kb to 1Mb; [Project Gutenberg](https://www.gutenberg.org/browse/scores/top) is your friend), then from the words of the text builds a Markov table: i.e., an object whose keys are each word in the text, and for each key its value is an array which lists all the words that follow that word. 


Having completed the analysis, the next step is generation! For a random starting word, generate a new text of 60-100 words by starting the process with a random word and then choosing a next word in the sequence from your Markov table.

Voilà! Instant fresh content in the style of any of the great masters!

I PROMISE THIS IS NOT AS HARD AS IT SOUNDS 

## HINT - For the local server try running on:
Mac
* `python -m http.server` - run on localhost:8000
* OR `python -m SimpleHTTPServer`
* OR VS Code live server

I also recommend installing:
* jQuery
* Axios (`<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>`) - import this into your head tag in the index.html file

## Possible steps to a solution:
1. Have your page load the contents of a text file into a single variable using AJAX (you will need to run a local server so you can open the file as a URL). This is a quick google search away! hint use a search term involving 'simple http server'
2. Separate all the text in the loaded file into an array of words.
3. Iterate over the array and add a key to your lookup table for each word, and an empty array as the key's value (if it's not already set as a key); get the word that follows this word and push it onto the array of words for this key (i.e. and words in this array are words which have been found to follow this word in your original text). Repeat.
4. Pick a random starting word, and get the next word by randomly picking one of the words in its array of following words (if we've allowed duplicates in this array, words that were found to follow more often will have a higher probability of being picked). Repeat!


// Text Soup
// ​Using HTML, CSS and JS + jQuery, create a web page which prints a random word from a large sample of text, in a random position on the page, every 100 milliseconds.​

// Hints:
// Grab some plain text (20-50 paragraphs should do) from one the top 100 novels in the public domain at Project Gutenberg, and paste the text into a hidden <div> element in your HTML file (use CSS to hide it).
// Use jQuery to get the contents of the div as a string, then split up the string into an array of words.
// Create a getRandomElementFromArray() function to pick a random word from the array.
// Use jQuery to
// create a new DIV with that word as its contents
// set the DIV to appear at a random position on the page
// append it to the DOM.
// Do all of the above in a window.setInterval() callback​
// Bonus:
// Fade the text in to make it appear, and then fade it out to disappear, to stop the page getting too dense with texty text.
// Try random colours, random font sizes, rotation, whatever floats your boat.


// gimme a random number
const getRandomInt = function(num) {
    return Math.floor(Math.random() * num)
}

const getRandomElementFromArray = function(array) {
    const randomInt = getRandomInt(array.length)
    return array[randomInt]
}

// PLEASE NOTE: might need to use $document.ready
const content = $('#words').html();

const onlyWords = content.split(" ");

console.log(onlyWords)

const textSoup = function() {

    //getting a single word from the array
    const singleWord = getRandomElementFromArray(onlyWords)

    // creating a div
    const $wordDiv = $('<div class="singleWord">');
    //injecting out single word into the div
    $wordDiv.text(singleWord)

    // get random position - from catwalk homework
    const xpos = getRandomInt(window.innerWidth)
    const ypos = getRandomInt(window.innerHeight)

    // adding random colours and rotation
    $wordDiv.css({
        top: ypos,
        left: xpos,
        position: 'absolute',
        color: `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`,
        transform: `rotate(${getRandomInt(361)}deg)`,
        fontSize: `${getRandomInt(100) + 20}px` //no smaller than 20px
    })



    //append to DOM
    $('body').append($wordDiv)

    // fade in and fade out words
    $wordDiv.fadeIn(2000).fadeOut(2000, function () {
        $(this).remove();
    })
    
}

setInterval(textSoup, 100);



console.log(`jquery intro`)

const $h1 = $('h1');

console.log( $h1 )

$h1.html('Welcome to Jquery to land!')

const $allParas = $('p');
console.log($allParas)

// Changing several features, one at a time;

// $allParas.css('background-color', 'red');
// $allParas.html('new contents');
// $allParas.fadeOut(6000);

// $allParas.html('EVEN NEWER CONTENTS');
// $allParas.fadeIn(3000);


// // Chaining does NOT affect the behaviour of animations
// $allParas 
//     .css('background-color', 'red')
//     .html('First new contents') //NOPE we never see this because
//     .fadeOut(5000)
//     .html('even new contents')
//     .fadeIn(2000);
    
$allParas.css({
    backgroundColor: 'red',
    border: '10px solid blue',
    fontSize: '16pt',
    'font-family': 'Comic Sans MS',

});

const firstParaContents = $allParas.html(); //GETTER, only gives you the first results value

console.log(firstParaContents);

$allParas.html('New contents for all paragraphs'); //SETTER - specify the new value, this will apply to all elements in your query

//BEWARE: difference between normal/vanilla JS DOM nodes, and jQuery results
const firstParaNode = $allParas[0];
console.log(firstParaNode)

// firstParaNode.html('this will not work'); //"typeError: firstParaNode is not a function"

//Get the 0th item from the results array AS A JQUERY OBJECT
const $correctFirstParaNode = $allParas.eq(0);
console.log($correctFirstParaNode);
$correctFirstParaNode.html('this should work')

//Make a new image tag and append it to the first p tag
const $img = $('<img>') //if you give an actual <tag> as the arg, it CREATES that tag

// $img.attr('src', 'http://placekitten.com/300/300');
// $img.attr('alt', 'adorable small kitten');
//is the same as:
$img.attr({
    src: 'http://placekitten.com/300/300',
    alt: 'adorable small kitten',
});

// Let's add it to the first p tag on the page
// $('p').append( $img ); //WHOOPS..this adds it to all p taqgs! just like .html('new contents')

// $('p').eq(0).append( $img );
// ...even better, use a selector that returns a single element:
$('#intro').append( $img )


// Beast Mode: all of the above in one big chain:
$('<img>')
    .attr({
        src: 'http://placekitten.com/300/300',
        alt: 'adorable small kitten',
    })
    .css('border', '1px solid green')
    .appendTo ( '#intro' ); //opposite order to .append()


//How do i print out the HTML contents of every <li> tag?
const allLiContents = $('li').html();
console.log(`allLiContents:`, allLiContents); //Nope! Just gives the first element's contents

// To do custom looping behavious, use .each():

$('li').each( function() {
    //Inside this callback fn, `this` will contain "the current item"
    //...BUT as a vanilla JS node
    console.log( $(this).html() );
})
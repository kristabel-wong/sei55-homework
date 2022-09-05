
console.log('JS connected!');

const lookupMovie = function( movie ){

    // make a new instance - below is the constructor - gets called when an object is created using the new keyword
    const xhr = new XMLHttpRequest(); 

    xhr.onload = function(){
        console.log('available response', xhr.response);

        const results = JSON.parse( xhr.response );
    }

}

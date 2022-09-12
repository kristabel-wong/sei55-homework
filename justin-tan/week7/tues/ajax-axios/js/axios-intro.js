
// WHAT IS A PROMISE?

// A promise is a way of dealing with asynchronous behaviour in JS,
// I.e. a consistent way of dealing with data that takes awhile
// to become available; this is what callback like .onload in XHR
// do too, but Promises are meant to be more structured and easier
// to work with, and avoid issues like nested callbacks, aka 'callback hell'
// AKA 'the pyramid of doom'
// i.e. they let us respond to when data arrives by running one or more callback functions
// but in a linear chain, not nested.
// If the data does NOT arrive, promises let us handle errors too.

// A promise is either in a state of 
// - PENDING - waiting for the data to arrive
//   or
// - FULFILLED (finished)
//         - RESOLVED   - we have the data, all is well
//         - REJECTED   - something went wrong, there was an error

// const result = axios.get('http://www.numbersapi.com/42?json');
// console.log('result:', result); // TOO SOON!

// Promises are "then-able"
axios.get('http://www.numbersapi.com/42?json')
     .then( function( res ){
    // When the promise resolves, the 'then' callback is run
    console.log(`Resolved! Data is:, `, res.data );
    })
    .catch( function( err ){
        // If the promise REJECTS (i.e. due to a 404 page not found error),
        // the .then callback does NOT run, and the .catch callback runs instead
        console.error('Something went wrong!', err);
    });

    // axios.get( URL ).then(sucessFn).catch(errorFn)

//===========================================================================

    // When yo uare dealing with promises, there is another way
    // of handling success/failure... "syntactic sugar"
    // This is called async/await syntax

const getApiData = async function(){

    // async/await makes async JS code look like synchronous ('blocking')
    // ruby code!
    // 'await' means wait for the following promise to resolve before
    // moving on to the next line

    try {
    const res = await axios.get('http://www.numbersapi.com/42?json');
    console.log('response:', res.data);
    } catch( err ){
        // If there's an error, run this code
        console.log('Something went wrong!', err)
    }

    console.log(`After the whole thing`);

}; //const getApiData()

getApiData(); // THIS WHOLE FUNCTION NOW RETURNS A PROMISE ('asnyc')
console.log('This runs sooner than you thinkg!');

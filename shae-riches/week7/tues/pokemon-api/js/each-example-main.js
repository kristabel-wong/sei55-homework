
console.log(`Loaded!`);

// CALLBACK FUNCTIONS REVIEW

// a callback is a function which is given to another 
// function as an argument.
//
// This works in JS because funcitons are 
// 'first-class' - they are data like any other
// kind, so they can be stored in variables,
// passed as arguments, etc
//
// Mostly we use callbacks as event handlers - i.e.,
// WHEN a click happens, run THIS function for me. 
//
// $('#button').on('click', sayHello);
// $('#button').on('click', function(){
//          // do something when the click happens 
// 
// 
// });

const sayHello = function(){
    
    console.log('Hell!');

};

const runNicely = function( callback ){

    console.log('About to run nicely');
    callback(); //  run the provided argument as a function
    console.log('Have a nice day');    

};



const arr = [ 'first', 'second', 'third'];

const each = function( arr, callback){

    // write a for loop which runs the callback
    // and gives it each item from the array
    for (let i=0 ; i < arr.length ; i++ ){

        const item = arr[i];
        
        console.log(item);
        
        callback( item );
        
    };


};

each( arr, function(item, index){

    console.log(`current item ${index}:`, item);
    

});


arr.forEach( function (item, index){

    console.log(`current item ${index}:`, item);
    
});


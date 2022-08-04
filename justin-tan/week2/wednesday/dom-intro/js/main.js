// console.log(`Functions review!`)

// // Functions in JS are first - class :
// // they live in variables. ie they can be treated as data... they are VALUES

// const x = 1;
// const f = function () {
//     console.log(`Hello I am function f`);
// };


// const sayHello = function () {
//     console.log(`%cHello from sayHello()`, 'color:green');
// };

// // Write a new function that will itself accept as an argument
// // ANOTHER FUNCTION! .... and run it for us, "nicely"

// const runNicely = function( functionToRunNicely ) {

//     console.log(`Hello, I am runNicely() and I am about to run your function for you. I do hope that is to your liking!`);

//     // Run the function provided as an argument
//     console.log( functionToRunNicely );
//     functionToRunNicely();

//     console.log(`It was a real pleasure to run your function for you. Have a wonderful day.`);

// }; //runNicely()

// runNicely ( sayHello );
// // runNicely ( sayHello() );Does not work. Calls the function too soon

// // Pass in an "annonymous" function - not predefined in a variable, but created on-the-fly/inline, as it's given to another function as an argument
// runNicely( function(){
//     console.log("Hello from anon");
//     console.log("hello again");
// } );
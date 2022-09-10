console.log('Mic check');

//Callback review

//A callback is a function which is given to another functions as an argument.

//This works in JS because functions are 'first-class'

//Mostly we use callbacks as event handlers
//When a click happens, run this function for  me
//e.g. $('#button').on('click', function(){
            //function goes here
//})

const arr = ['first', 'second', 'third']

const each = (arr, callback) => {
    //write a for loopt which runs tthe callback and gives it the item from the array
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        callback(element, i);
        
    }
};

const count = ( element,index ) => {
    console.log(`item #${index}: ${element}`);
    
};

each(arr, count)

arr.forEach( function (item, index){
    console.log(`Item ${index}:`, item);
});



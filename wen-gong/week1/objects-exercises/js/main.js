
// The Recipe Card
// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

// On separate lines (one console.log statement for each), log the recipe information so it looks like:

// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa


const recipe = {
    title : "Mole", 
        Serves: 2,
    Ingredients: ["cinnamon",
    "cumin", "cocoa"]
    
    
    } ;
    console.log(recipe);
console.log(recipe.title);
console.log(`Serves: ${recipe.Serves}`);
console.log(`Ingredients: `);
console.log(recipe.Ingredients[0]);
console.log(recipe.Ingredients[1]);
console.log(recipe.Ingredients[2]);
  
// for (let i = 0; i < recipe.Ingredients.length; i++){
//     console.log(recipe.Ingredients[i]);
// }

console.log(`Indredients: ${recipe.Ingredients.join(`\n`)}`);






// The Reading List
// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'



const books = [

{
    title: "It",
    author: "Stephen",
    alreadyRead: true,
},
{
    title: "The",
    author: "Mike",
    alreadyRead: false,
},
{
    title: "Anna",
    author: "Iris",
    alreadyRead: true,
},


];
// for (let i = 0; i < books.length; i++) {
//     const currentBook = books[i];
    
// if (currentBook.alreadyRead === true ) {
//     console.log(`You already read "${currentBook.title}" by ${currentBook.author}`);
// }else{
//     console.log(`You still need to read "${currentBook.title}" by ${currentBook.author}`);
// }

//     console.log(`${currentBook.title} by ${currentBook.author}.`);
// };

for (let i = 0; i < books.length; i++) {
    const currentBook = books[i];
    let readStatus = '';
    if (currentBook.alreadyRead === true ) {
   readStatus = 'You already read ';
    }else{
    readStatus = 'You still need to read ';
    }

    console.log(`${readStatus} "${currentBook.title}" by ${currentBook.author}.`);
};



// The Movie Database
// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
// Maybe the join method will be helpful here
const favoriteMovie = {
    title: 'Iron Man',
    duration: 120,
    stars: ['A', 'B', 'C',]


    
};
const favoriteOtherMovie = {
    title: 'Captain America',
    duration: 140,
    stars: ['A', 'B', 'C',]
}
function printMovieInfo(movie){
    console.log(`'${movie.title}' lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(', ')}` )
};


//

printMovieInfo(favoriteMovie);
printMovieInfo(favoriteOtherMovie);


// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:

// isSquare(rect) - Returns whether the rectangle is a square or not
// area(rect) - Returns the area of the rectangle
// perimeter(rect) - Returns the perimeter of the rectangle
// const rectangle = {
//     length: 4,
//     width: 4
//   };
//   In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.

const rectangle = {
    length: 4,
    width: 4
};
    function isSquare( ){
    if (rectangle.length === rectangle.width){
        console.log(`This rectangle is a square.`)
    }else{
        console.log(`This is not a square.`)
    }
    return;
    
       
    };
   
    function area( ){
        console.log(`This rectangle's area is ${rectangle.length * rectangle.width}.`)
        return;
    };
   
    function perimeter(){
        console.log(`This rectangle's perimeter is ${(rectangle.length + rectangle.width) * 2}`)
        return;
    };
    isSquare();
    area();
    perimeter();

    console.log(`-------------`);


//     Part 2, Triangle
// Given a triangle object like the one below, write the following functions:

// isEquilateral(tri) - Returns whether the triangle is equilateral or not
// isIsosceles(tri) - Returns whether the triangle is isosceles or not
// area(tri) - Returns the area of the Triangle
// isObtuse(tri) - Returns whether the triangle is obtuse or not
// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.


const triangle = {
      sideA: 3,
      sideB: 4,
      sideC: 4
};
 function isEquilateral(){
  if (triangle.sideA === triangle.sideB === triangle.sideC){
    
    console.log(`This triangle is equilateral.`)
  }else{
    
    console.log(`This is not a equilateral triangle.`)
  }
     return;
 };

 function isIsosceles() {
   if ( triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC){
   
    console.log(`This is a isosceles triangle.`)
   }else{
    
    console.log(`This is not a isosceles triangle.`)
   }
    return;

 };

 function area1() {
    s = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
    area = Math.sqrt(s * (s - triangle.sideA) * (s - triangle.sideB ) * (s - triangle.sideC));
    console.log(`This triangle's area is ${area}.`)
    return;
   };



 function isObtuse() {
   
    const maxSide = Math.max(triangle.sideA, triangle.sideB, triangle.sideC);
    const minSide = Math.min(triangle.sideA, triangle.sideB, triangle.sideC);
    const middleSide = triangle.sideA + triangle.sideB + triangle.sideC - maxSide - minSide;
    if (maxSide * maxSide > minSide * minSide + middleSide * middleSide ) {
        console.log( `This is a obtuse triangle.`)
    }else{
        console.log(`This is not a obtuse triangle.`)
    }
     return;
    
   }

 
 isEquilateral();
 isIsosceles();
 area1();
 isObtuse();

 console.log(`-------------`);





//  The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// // Input
// const cartForParty = {  
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };

// // Output
// cashRegister(cartForParty); // 60.55


function cashRegister(){
    const cartForParty = {  
        banana: "1.25",
        handkerchief: ".99",
        Tshirt: "25.01",
        apple: "0.60",
        nalgene: "10.34",
        proteinShake: "22.36"
    };
    result = Number(cartForParty.banana) + Number(cartForParty.handkerchief) + Number(
        cartForParty.Tshirt) + Number(cartForParty.apple) + Number(cartForParty.nalgene) + Number(cartForParty.proteinShake);
    
    console.log(result);
    return;
};
cashRegister();



console.log(`-------------`);





// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank
// There is only one bank. This bank is an object, which contains an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

// Tips
// Don't overthink this. Shorter code is probably the answer.

prn
    




    },

    getTotalBalance: function(){
        let sum = 0;
        for (let i = 0; i < bank.accounts.length; i++) {
            
            
            sum += this.accounts[i].balance;
           
            
        };

        return `Total balance is ${sum}`
            
    },
         


    
};

bank.addAccount({ username: "Tom", balance: 200 });
console.log(bank.accounts);
console.log(bank.getTotalBalance());






// Simon Says

// Create a function in JS that takes an input and returns Simon's response as follows:

//     Simon answers 'Sure.' if you ask him a question.
//     He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//     He says 'Fine. Be that way!' if you address him without actually saying anything.
//     He answers 'Whatever.' to anything else.
//     The input will not contain any numbers.

// Examples:

// simonSays("Hello, how are you?"); // => "Sure."
// simonSays("Hello, how are you!"); // => "Whatever"
// simonSays(""); // => "Fine. Be that way!"
// simonSays("HEYYYYY"); // => "Woah, chill out!"

function simonSays(ask) {
    if (ask[ask.length-1] === "?") {
        console.log(`"Sure."`);
        return
    }else if (ask[ask.length-1] === "!"){
         console.log(`"Whatever"`);
         return
    }else if(ask === ""){
        console.log(`"Fine. Be that way!"`);
         return
    }else if(ask === ask.toUpperCase()){
        console.log(`"Woah, chill out!"`);
        return
    }
}
simonSays("Hello, how are you?"); 
simonSays("Hello, how are you!"); 
simonSays(""); 
simonSays("HEYYYYY"); 





// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:

// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:

// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.

// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

function validateCreditCard(){
if (number) {
    
}



}

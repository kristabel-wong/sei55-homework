

console.log('====================');

// Exercises: Objects
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

const recipeCard = {
    title: "Nachos",
    servings: 2,
    ingredients: [
       "2 chillies",
       "1 can black beans",
       "mince meat",
       "1 can tomatoes",
       "lots of cheese!!",
    ]
};
    console.log(recipeCard.title);
    console.log(`Serves: ${recipeCard.servings}`);
    // console.log(`Ingredients: ${recipeCard.ingredients.join('\n)}`);
    console.log(`Ingredients:`);

    for(let i = 0; i < recipeCard.ingredients.length; i++) {
        console.log(recipeCard.ingredients[i]);
    };

// The Reading List

// Keep track of which books you read and which books you want to read!

//     Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//     Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//     Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

const books = [

    {
        title: "Green Lights",
        author: "Matthew McConaughey",
        alreadyRead: false, 
    },

    {
        title: "Ice Station",
        author: "Matthew Reilly",
        alreadyRead: true, 
    },

    {
        title: "Luke's Better Way",
        author: "Hammer Time Luke",
        alreadyRead: false, 
    }

];
for (let i = 0; i < books.length; i++) {

    const currentBook = books[i];

    if (currentBook.alreadyRead === true) {
        console.log(`You already read "${currentBook.title}" by ${currentBook.author}`);
    } else {
        console.log(`You still need to read "${currentBook.title}" by ${currentBook.author}`);
    }
    
    
};


// The Movie Database

// It's like IMDB, but much much smaller!

//     Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
//     Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
//         Maybe the join method will be helpful here


const favouriteMovie = {
    title: "The Gentlemen",
    duration: 132,
    stars: [
        "Charlie Huanamm","Collin Farrell", " & Matthew McConaughey",
    ],
}

    const printMovieInfo = function(movie) {

        console.log(`'${movie.title}' lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(', ')}`);

};
    printMovieInfo(favouriteMovie);
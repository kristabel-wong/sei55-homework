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

const favRecipe = {
    dish: "Mole",
    serving: 2,
    ingredients: [
        "cinnamon",
        "cumin",
        "coca",
    ],
}

console.log(favRecipe.dish);
console.log(`Serves: ${favRecipe.serving} `);
console.log(`Ingredients:`)
for (let i = 0; i < favRecipe.ingredients.length; i++) {
    const ingredients = favRecipe.ingredients[i];
    console.log ( ingredients )
}

console.log(`===========================`)


// The Reading List
// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).


const readingList = [
    {
        title: "Momofuku", 
        author: "David Chang", 
        alreadyRead: true
    },
    {
        title: "Harry Potter", 
        author: "JK Rowling", 
        alreadyRead: true
    },
    {
        title: "The Intelligent Investor", 
        author: "Benjamin Graham", 
        alreadyRead: false
    },
];




// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".


for (let i = 0; i < readingList.length; i++) {
    const books = readingList[i]
    console.log(`${books.title} by ${books.author}`)
}


// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

for (let j = 0; j < readingList.length; j++) {

    const books = readingList[j]

    let readStatus = 'You still need to read';
        if ( books.alreadyRead ) {
            readstatus = 'You already read' 
        } 

    console.log(`${readStatus} "${books.title}" by ${books.author}`) 
        
}


console.log(`=========================`)

// The Movie Database
// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).

const favMovieOne = {
    title: "Better Call Saul",
    duration: "60",
    stars: [
        "Saul Goodman",
        "Mike Erhmantraut",
        "Kim Wexley"
    ],
}

const favMovieTwo = {
    title: "Minority Report",
    duration: "120",
    stars: [
        "Tom Cruise",
        "Colin Farrel",
        "Samantha Morton"
    ],
}


const printMovieInfo = function ( movie ) {

    console.log(`"${movie.title} lasts for ${movie.duration} episodes. Stars: ${movie.stars.join(', ')}`)

}

printMovieInfo (favMovieOne)
printMovieInfo (favMovieTwo)

// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
// Maybe the join method will be helpful here



// BONUS: make the printing function a method of the favmovie object and use 'this' to print the data
// DOUBLE BONUS: make the object ontain an array of movie objets, and the print function iterate through that list
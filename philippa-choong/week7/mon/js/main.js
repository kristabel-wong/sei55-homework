// Create a Single - Page App interface to themoviedb.org which lets users search for a movie by title and shows the results on the same page, using XMLHttpRequest and jQuery.

// Consider also showing the movie popularity and overview text.Bonus points for showing a movie poster thumbnail for each movie.

// If a new search is performed, the old search results should be replaced(not just appended to)!

// BONUS: Make each search result clickable, and use it to take the ID of the clicked movie and perform a different AJAX request to the API endpoint which gives detailed info about a movie by ID(RTFM).This lets you print out budgets, genres, cast, longer plot synopsis etc.When viewing this show page, the search results should be hidden, and when a new search is performed, the show page details should be hidden!(This will "simulate" moving between different pages, i.e.from a results page to a show page, but really you'll just be using jQuery to .show() or .hide() the "#results" or "#show" divs.)

// XMLHttpRequest - 
// to issue HTTP requests in order to exchange data between the web site and a server. 
// built-in-method for making AJAX request (to load the contents of a URL
// within Javascript)

console.log('main.js is loaded!');


const lookupMovie = function (movie) {
    $('#results').html('loading....'); // clear old results and show new results next


    const xhr = new XMLHttpRequest(); //// make a new instance, i.e. this is the constructor
    // XMLHttpRequest() spits out the object for us. A built-in-method for making AJAX request


    // .onload - Execute a JS immediately after a page has been loaded:
    // this function's code will run when XHR decides the response has finished loading
    xhr.onload = function () {

        const data = JSON.parse(xhr.response);
        // JSON - commonly used to exchange data to / from a web server.
        // When receiving data from a web server, the data is always a string.
        // Parse the data with JSON.parse(), and the data becomes a JavaScript object.
        $('#results').empty() //remove previous results


        // loop through array and find title from search 
        const numOfResults = 10

        for (let i = 0; i < numOfResults; i++) {
            const output = data.results[i]
            const title = output.title
            const popularity = output.popularity
            const overview = output.overview
            // console.log(title, popularity, overview)
            $('#results')
                .append(`
                <h2><a href="#" >${title}</a></h2> 
                <p>popularity: ${popularity}</p>
                <p>overview: ${overview}</p>
                `)
        };

    };
    // this function's code will run when xhr ( XMLHttpRequest() )decides the response has finished loading

    //declate API key
    const apiKey = "24d863d54c86392e6e1df55b9a328755"
    // tell xhr which URL to open, and which method to use (i.e. 'GET')
    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movie}`);

    xhr.send(); //send the request

} // lookupMovie()


// DOM ready handler
$(function () {

    //Wait till DOM is ready before querying it
    $('#submitButton').on('click', function () {
        console.log('Button clicked!');

        const userSearch = $('#movieQuery').val();
        // The .val() method is primarily used to get the values of form elements such as input, select and textarea. 
        // When called on an empty collection, it returns undefined.
        console.log(`Button clicked! movie search is `, userSearch);

        lookupMovie(userSearch);
    });

});


const detailedMovie = function (id) {

    $('#movieResults').html('loading....'); // clear old results and show new results next


    const xhr = new XMLHttpRequest(); //// make a new instance, i.e. this is the constructor
    // XMLHttpRequest() spits out the object for us. A built-in-method for making AJAX request

    //hide the following:
    $('#movieQuery').hide()
    $('#submitButton').hide()




    // .onload - Execute a JS immediately after a page has been loaded:
    // this function's code will run when XHR decides the response has finished loading
    xhr.onload = function () {

        const data = JSON.parse(xhr.response);
        // JSON - commonly used to exchange data to / from a web server.
        // When receiving data from a web server, the data is always a string.
        // Parse the data with JSON.parse(), and the data becomes a JavaScript object.
        $('#movieResults').empty() //remove previous results

        const output = data.lookupMovie(movie).id
        const title = output.title
        const budget = output.budget
        const genres = output.genres

        $('#movieResults')
            .append(`
                <h2> ${title}</h2> 
                <p>budget: ${budget}</p>
                <p>genres: ${genres}</p>
                `)
    };

    //declate API key
    const apiKey = "24d863d54c86392e6e1df55b9a328755"
    // tell xhr which URL to open, and which method to use (i.e. 'GET')
    xhr.open('GET', `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);

    xhr.send(); //send the request

};
// this function's code will run when xhr ( XMLHttpRequest() )decides the response has finished loading





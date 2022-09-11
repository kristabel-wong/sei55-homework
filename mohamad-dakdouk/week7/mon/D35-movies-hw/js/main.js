// Create a Single-Page App interface to themoviedb.org which lets users search for a movie by title and shows the results on the same page, using XMLHttpRequest and jQuery.
// Consider also showing the movie popularity and overview text. Bonus points for showing a movie poster thumbnail for each movie.

// If a new search is performed, the old search results should be replaced (not just appended to)!

// BONUS: Make each search result clickable, and use it to take the ID of the clicked movie and perform a different AJAX request to the API endpoint which gives detailed info about a movie by ID (RTFM). This lets you print out budgets, genres, cast, longer plot synopsis etc. When viewing this show page, the search results should be hidden, and when a new search is performed, the show page details should be hidden! (This will "simulate" moving between different pages, i.e. from a results page to a show page, but really you'll just be using jQuery to .show() or .hide() the "#results" or "#show" divs.)


console.log('main.js')

// We want to make an AJAX request to load the contents of a URL within JS AJAX: Asynchronous, JS and XML (a superset of html, using tags to create data structures)

const lookupMovie = function(movie){


    // make a new instance
    const xhr = new XMLHttpRequest(); 



    xhr.onload = function(){
        // This functions code will run when XHR decides the response has finsihed loading 
        console.log('actually avaible response', xhr.response); // too soon

        const data = JSON.parse( xhr.response );
        console.log(data)
        
        movieData = data.results

        console.log(movieData)

        for (let i = 0; i < movieData.length; i++) {
          const movieTitles = movieData[i].title
          const movieOverview = movieData[i].overview
          const moviePopularity = movieData[i].popularity
          const moviePath = movieData[i].poster_path

        //   const movieOverview = movieData[i].overview
        //   const movieOverview = movieData[i].overview
        console.log(movieTitles)
        $('#results').prepend(`<h2>${movieTitles}</h2><h3> Popularity: ${moviePopularity}</h3><h3>${movieOverview}</h3><img src="https://image.tmdb.org/t/p/w185${moviePath}">`); 
        
        // $(`#poster`).attr(`src`,`https://image.tmdb.org/t/p/w185${moviePath}`);
        // <h3>${movieOverview}</h3>
        // add response to the end of the page
        }

        // <a href=""><h2>${getData.title}</h2></a>

    }; // onload handler
    $('#results').empty()

    xhr.open('Get', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${movie}`);

    xhr.send(); // actually send the request, unlike ruby

    // console.log('This line runs tooo soon, before we have a response');
    // console.log('response', xhr.response); // too soon
};

// let movie = 'alien'
console.log( $(`#movieSearch`));
// console.log(lookupMovie(movie));

$(function(){

    // Wait until the DOM is ready before querying it
    $(`#submit`).on(`click`, function(){

        console.log(`Button clicked!`);

        // Use Jquery to get the value typed into the form
        const movie = $(`#movieSearch`).val();

        console.log(`Button clicked! Number is:`, movie);

        lookupMovie( movie);
    });
});


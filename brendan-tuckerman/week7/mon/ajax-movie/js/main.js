/*



    Web 2.0 - the modern Web era. 

    Single Page Apps: Instead of rendering apps on the server and sending to the browser to be reloaded aech time we navigate to a new page, or perform an action such as liking a post, we want to load a base HTML page once and use JS to load data in the background from a remote servet, and then to manipulate the DOM to dende this data into the browser.

    For this to work, we need our servers to send us back not a full HTML page, but rather a piece of data  ("raw") --usually JSON (short for JavaScript Object Votation") 

    API: Application Programming Interface

    - These can be either:
        - A set of methods provided by a library to access its features(ActiveRecord has .create, .destroy etc; Jquery has $(), $().css etc) OR

        - A remote data source (Numbers API (numbersapi.com)). These generally return raw data (as opposed to HTML), usually in JSON format



*/

console.log('Mic check');

//We want to mkae an Ajax request to load the contents of a URl
//AJAX:  Asynchronous JavaScript and XML
// XML is a superset of HTML using tags to create data structures
// XML has been superceded by JSON

//make a new instance. I.e., this is the constructor. This is built into the browser.

//Thhis is the ancient way of attaching callback functions (event handlers) to specific events
// An object, such as a DOM node, has a bunch of properties
// with names '.onLoad' etc. Your function will then be run when that event happens.

// xhr.onreadystatechange = function(){
//     console.log('Ready state change:', xhr.readyState ); //ready state
//     console.log('Response data:', xhr.response );

// } //under the hood

const lookupMovie = function ( query ){
    $('#results').html("loading...")

    const xhr = new XMLHttpRequest(); 
    

    xhr.onload = function(){
        //This code will run when xhr decides the response is avaiable
       const data = JSON.parse( xhr.response ) //turn the response into a JS object
       console.log(data);
       displayMovies( data);
        
    }



    //Tell it which URL to open and HOW

    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${query}`)

    xhr.send(); //actually send the request. Unlike Ruby, this line does not block

    // console.log('This line will run before the above! That is, it will run too soon');

    // console.log( 'response', xhr.response);
}

$(function(){
    $('#submitButton').on('click', function(){
        
        lookupMovie($('#movieQuery').val());
    });

   

});//DOM ready handler 


const displayMovies = ( jsonData ) => {
    //Takes JSON and displays it.
    const moviesArray = jsonData.results
    $('#movieDetails').empty() //remove the previous results 
        for (let i = 0; i < moviesArray.length; i++) {
            const movie = moviesArray[i];
        
            let $link = $(`<a href='#' onclick='lookupIndividualMovie(${movie.id})'></a>`).text("More Details")
            $($link).attr("id", "moreDetails")
            
           $("#movieDetails").append(`
           <h2>${movie.title}</h2>
          `).append(`<img src=${posterPath(movie.poster_path, 200)}>`).append(`<li>Score: ${movie.vote_average}</li>`).append(`<li>Synopsis: ${movie.overview}</li>`).append($link).append(`<hr>`)
          
         
         
           //here would have to send the movie.id to the show/hide function
           
            
        } //end for loop
        
}; //end displayMovies

const posterPath = ( endPoint, width) => {
    return `https://image.tmdb.org/t/p/w${width}${endPoint}`
}

const individualMoviePath = ( id ) => {
    return `https://api.themoviedb.org/3/search/movie/${id}?api_key=24d863d54c86392e6e1df55b9a328755&language=en-US`
};


const lookupIndividualMovie = function ( id ){
    

    const xhr = new XMLHttpRequest(); 
    

    xhr.onload = function(){
        //This code will run when xhr decides the response is avaiable
       const data = JSON.parse( xhr.response ) //turn the response into a JS object
       console.log(data);
       showMore( data);
        
    }



    //Tell it which URL to open and HOW

    xhr.open('GET', `https://api.themoviedb.org/3/movie/${id}?api_key=24d863d54c86392e6e1df55b9a328755&language=en-US`)

    xhr.send(); //actually send the request. Unlike Ruby, this line does not block

    // console.log('This line will run before the above! That is, it will run too soon');

    // console.log( 'response', xhr.response);
}


const showMore = ( movieDetails ) => {
    
    $('#movieDetails').hide() //remove the previous results ;
    $('#singleMovieDetails').empty()
    $('#singleMovieDetails').show().append(`<h2>Showing Details for "${movieDetails.title}"</h2>`).append(`<img src=${posterPath(movieDetails.poster_path, 200)}>`).append(`<li><em>${movieDetails.tagline}</em></li>`).append(`<li>Running Time:${movieDetails.runtime} minutes</li>`).append(`<li>Budget: $${movieDetails.budget}</li>`).append(`<li>Revenue: $${movieDetails.revenue}</li>`).append(`<a href='#' onclick="hideDetails()"><li>back</li></a>`)

    
}

const hideDetails = () => {
    $('#singleMovieDetails').hide();
    $('#movieDetails').show()

}

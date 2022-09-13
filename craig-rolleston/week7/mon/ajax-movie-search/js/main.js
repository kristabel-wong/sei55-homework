
console.log('JS connected!');

const lookupMovie = function( movie ){

    // make a new instance - below is the constructor - gets called when an object is created using the new keyword
    const xhr = new XMLHttpRequest(); 

    xhr.onload = function(){ 
        // This function's code will run when XHR decides the response has finished loading
        // console.log('available response', xhr.response);

        const data = JSON.parse( xhr.response );
        // console.log(data);

        movieInfo = data.results // declare variable for loop with data from above - use below

        // loop through movie array 
        for (let i = 0; i < movieInfo.length; i++ ){
            
            // const getData = movieInfo[i] 
            // set variable above to DRY code if needed
            console.log(movieInfo[i].title)
            console.log(movieInfo[i].popularity);

            // add data to page with .append below - title, poster, popularity, overview
            $('#movieResults').append(
                `<a href=""><h2>${movieInfo[i].title}</h2></a><br> 
                <img src="https://image.tmdb.org/t/p/w185${movieInfo[i].poster_path}"><br> <h3>Popularity: ${movieInfo[i].popularity}</h3>
                <h3>Description:${movieInfo[i].overview}</h3>`
            );

        };

    }; // onload handler
    
    $('#movieResults').empty() // remove previous results when next search applied - DO NOT USE INSIDE THE LOOP OR IT WILL ALWAYS EMPTY THE SEARCH EXCEPT FOR THE LAST RESULT.

    // tell which URL to open and which method to use
    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${movie}`);

    xhr.send(); // actually send the request


}; // lookupMovie

$( function() {

    $('#searchButton').on('click', function(){

        // on click function for search
        const movieSearch = $('#movieQuery').val(); // gets value typed into the form

        console.log(`Button clicked! Movie is:`, movieSearch);

        lookupMovie( movieSearch ); // invoke lookupMovie, perform request

    });

    // click enter function for search
    $('#movieQuery').on('keypress',function (press){
       
        if(press.which == 13){ // 13 corresponds to the return key
            const movieSearch = $('#movieQuery').val();
            lookupMovie( movieSearch )
        };

    });

});

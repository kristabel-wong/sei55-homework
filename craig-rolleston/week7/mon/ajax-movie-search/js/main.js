
console.log('JS connected!');

const lookupMovie = function( movie ){

    // make a new instance - below is the constructor - gets called when an object is created using the new keyword
    const xhr = new XMLHttpRequest(); 

    xhr.onload = function(){ 

        // console.log('available response', xhr.response);

        const data = JSON.parse( xhr.response );
        // console.log(data);

        movieInfo = data.results 
        
        for (let i = 0; i < movieInfo.length; i++ ){
            
            const getData = movieInfo[i]
            console.log(getData.title)
            
            $('#movieResults').append(`<a href=""><h2>${getData.title}</h2></a><br><img src="https://image.tmdb.org/t/p/w185${getData.poster_path}"><br><h3>Popularity: ${getData.popularity}</h3><h3>Description:${getData.overview}</h3>`); // add data to page 

        }

    }; // onload handler
    
    $('#movieResults').empty() // remove previous results 

    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${movie}`);

    xhr.send(); // actually send the request


}; // lookupMovie

$( function() {

    $('#searchButton').on('click', function(){

        const movieSearch = $('#movieQuery').val(); // gets value typed into the form

        console.log(`Button clicked! Movie is:`, movieSearch);

        lookupMovie( movieSearch ); // invoke lookupMovie, perform request

    })

})
console.log($('#movieQuery'));


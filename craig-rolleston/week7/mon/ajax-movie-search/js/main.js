
console.log('JS connected!');

const lookupMovie = function( movie ){

    // make a new instance - below is the constructor - gets called when an object is created using the new keyword
    const xhr = new XMLHttpRequest(); 

    xhr.onload = function(){ 

        console.log('available response', xhr.response);

        const data = JSON.parse( xhr.response );
        console.log(data);

        movieInfo = data.results //[i].title
        
        for (let i = 0; i < movieInfo.length; i++ ){
            
            const getData = movieInfo[i]
            console.log(getData)
            
            $('#movieResults').prepend(`<h2>${getData.title}</h2><br>${getData.poster_path}<br>${getData.popularity}<br>${getData.overview}`); // add data to page 
            
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


console.log(`loaded`);

$( function(){
    // When DOM is loaded....
    $('#submitButton').on('click', function(){

        const query = $('#query').val();
        // console.log(`clicked! form query:`, query);

        getMovieSearchResults( query ); // give the form input contents to the search function

    });// on click

});//DOM ready

const getMovieSearchResults = function( searchText ){

    console.log(`getMovieSeatchResults():`, searchText);

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${ searchText }`)
        .then( function( res ){
            // Success
            // console.log(`data:`, res.data.results);

            res.data.results.forEach( function(movie){
                // console.log(movie.title);

                // <div>
                //     <h3>${movie.title}</h3>
                //     <p>${movie.overview}</p>
                // </div>
        
                $('#results').append(`
                    <img data-movieid="${ movie.id }" src="http://image.tmdb.org/t/p/w185${movie.poster_path}" alt="${movie.title}">
                `);

            }) //.forEach results

            // Attach the same click handler to all the new result thumbnail tags
            // - but beware, if you don't clear your results before each new search,
            // you might end up doubling up on click handlers!
            $('#results img').on('click', function(){
                // console.log(`image clicked!`, this);
                const id = $(this).data('movieid')
                console.log(`ID:`, id);
                getMovieDetailsById( id )
            })

        })
        .catch( function( err ){
            // Error
            console.error( 'Whoops!', err );
        })

}; // getMovieSearchResults()


const getMovieDetailsById = function( movieId ){
    console.log(`getMovieDetailsById():`, movieId);

    axios.get(`https://api.themoviedb.org/3/movie/${ movieId }?api_key=24d863d54c86392e6e1df55b9a328755`)
    .then( function( res ){
        console.log(`movie details:`, res.data);

        // hide the results div
    })
    .catch( function( err ){
        console.error('Error loading movie details', err);
    })


}; //getMovieDetailsById

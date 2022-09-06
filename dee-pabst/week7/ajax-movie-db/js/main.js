$(function () {
    $('#submitButton').on('click', function () {
        $('#results').empty();
        const query = $('#query').val();
        // console.log(query);
        getMovieSearchResults(query); // give the search term to a search function

    });//click submit
}); // DOM Ready

const getMovieSearchResults = function (searchText) {
    console.log(`getMovieSearchResults`, searchText);
    axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${searchText}`)
        .then(function (res) {
            // success!
            // debugger;
            // console.log(`data:`, res.data.results);
            res.data.results.forEach(function (movie) {
                // `<div>
                // console.log(movie.title)
                // <h3>${movie.title}</h3>
                // <p>${movie.overview}</p>
                // </div>`
                
                $('#results').append(`
                <img data-movieid="${movie.id}" src="https://image.tmdb.org/t/p/w92${movie.poster_path}" alt="${movie.title}">
                `);
                
            }); // .forEach movie

            // attach a click handler to all result img tags
            $('#results img').on('click', function(e){
                const id = $(e.target).data('movieid');
                console.log(`ID(using jQuery)`, id );
                getMovieDetailsById(id);
            });

        })
        .catch(function (err) {
            // Error
            console.log(`Whoops`, err);
        });
}; // getMovieSearchResults

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
const getMovieDetailsById = function(id){
    console.log(`getMovieDetailsById():`, id);
    axios
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=24d863d54c86392e6e1df55b9a328755&language=en-US`)
        .then(function(res){
            $('#results').hide();
            $('button').show();
            console.log(`movie.details:`, res.data);
        })
        .catch(function (err) {
            console.error(`Error loading movie details`, err);
        });
};

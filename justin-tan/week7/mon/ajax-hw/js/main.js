console.log(`LETS DO THIS`);

// Function for movie search
const movieSearch = function(string){

    //In built method for making AJAX requests
    const xhr = new XMLHttpRequest(); // make new instance ie the constructor


    xhr.onload = function(){
        const data = JSON.parse(xhr.response)
        
        $('#results').empty()

        for (let i = 0; i < data.results.length; i++) {
            //  console.log(data.results[i]);
            
            $('#results')
            .append(`
                
                    <img src="https://image.tmdb.org/t/p/w200${data.results[i].poster_path}" alt="${data.results[i].title}">
                    <h3>Title: ${data.results[i].original_title}</h3>
                    <p>Release Date: ${data.results[i].release_date}</p>
                    <p>Popularity: ${data.results[i].popularity} / 100</p>
                    <p>Overview: ${data.results[i].overview}</p>
                    <button class="movieDetails" value="${data.results[i].id}">Click here for more details</button>
                    <br>
                    <br>

            `)
        }
    }

    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${string}`)

    xhr.send()

}

$(function(){
    // Wait until DOM is ready before querying it (to get to searchButton)
    $('#searchButton').on('click', function(){
        const searchInput = $('#searchField').val()
        // console.log(`button is clicked`);
        movieSearch( searchInput )
    })

})

//============================================================================

//Function for movie details

const movieDetails = function(id){

    const xhr = new XMLHttpRequest

    xhr.onload = function(){
        const data = JSON.parse(xhr.response)
        console.log(data);

        $('#results').hide()

        // function for getting genres of movie
        let genresArr = []
        const movieGenres = function(){
            for (let i = 0; i < data.genres.length; i++) {
                genresArr.push(data.genres[i].name)
                
            }
            return genresArr
        }
        // console.log(genresArr);

        $('#details')
        .append(`
            <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}">
            <h3>Title: ${data.original_title}</h3>
            <p>Release Date: ${data.release_date}</p>
            <p>Budget: $${data.budget}</p>
            <p>Runtime: ${data.runtime} minutes</p>
            <p>Revenue: $${data.revenue}</p>
            <p>Genres: ${movieGenres().join(', ')}</p>
            <p>Overview: ${data.overview}</p>
            <button id="backToResults">Back to Search Results</button>

        `)
    }

    xhr.open('GET', `https://api.themoviedb.org/3/movie/${id}?api_key=24d863d54c86392e6e1df55b9a328755&language=en-US` )

    xhr.send()

}

$(function(){
    $(document).on('click', '.movieDetails', function(){
        const movieID = $('.movieDetails').val()
        console.log(`button is clicked!`);
        movieDetails( movieID )
    })

    $(document).on('click', '#backToResults'), function(){
        console.log(`button is clicked!`);
        $('#details').hide()
        $('#results').show() //how??????
    }
})


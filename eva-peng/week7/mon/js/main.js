console.log('main.js loaded!');

const lookupName = function(name){

    $('#results').html('Loading...');

    const xhr = new XMLHttpRequest();

    $(document).on()

    xhr.onload = function(){
        

        const data = JSON.parse(xhr.response);
        const movieList = data.results
        for (let i = 0; i < movieList.length; i++) {
            $('#results')
            
            .append(`<ul>
            <details>
            <summary>${movieList[i].title}</summary><br>
            
            <img src="https://image.tmdb.org/t/p/w500/${movieList[i].poster_path}" 
            width=50
            height=80
            alt="${movieList[i].title}"><br>
            <h4>Popularity: ${movieList[i].popularity}</h4>
            <p> <strong>Overview:</strong> ${movieList[i].overview}</p>
            </details>
            </ul>`);
        }        
    }; // onload handler

    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${name}`);

    xhr.send();


};

$(function(){
    $('#submitButton').on('click', function(){

        const userSearch = $('#searchQuery').val();

        lookupName(userSearch);
    });

}); // DOM ready handler
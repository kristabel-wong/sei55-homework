
console.log('main.js loaded!');

const lookupMovie = function(movie){

    $('#results').html('Loading...')

    // This is a built-in method for making AJAX requests
    const xhr = new XMLHttpRequest();

    // This function's code will run when XHR decides the response has finished loading
    xhr.onload = function(){
        
        const data = JSON.parse(xhr.response);
        
        console.log('actually available response:', data);

        $('#results').empty();
        
        for (i = 0; i < data.results.length; i++){
            $('#results')
            .append(`
            <h2>${data.results[i].title}</h2>
            <p>${data.results[i].popularity}</p>
            <p>${data.results[i].overview}</p>
            <img src="https://image.tmdb.org/t/p/original${data.results[i].poster_path}" alt=${data.results[i].title}>
            `);
        }

    };

    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${movie}`);

    xhr.send();


}; // lookupMovie()


$(function(){

    $('#submitButton').on('click', function(){
        const movieInfo = $('#movieQuery').val();
        lookupMovie(movieInfo);
    });

}); // DOM ready handler



// //Bonus

// const lookupMovie = function(movie){

//     $('#results').html('Loading...')

//     // This is a built-in method for making AJAX requests
//     const xhr = new XMLHttpRequest();

//     // This function's code will run when XHR decides the response has finished loading
//     xhr.onload = function(){
        
//         const data = JSON.parse(xhr.response);
        
//         console.log('actually available response:', data);

//         $('#results').empty();
        
//         for (i = 0; i < data.results.length; i++){
//             $('#results')
//             .append(`
//             <a href="" class="link"><h2>${data.results[i].title}</h2></a>
//             <p>${data.results[i].popularity}</p>
//             <p>${data.results[i].overview}</p>
//             <img src="https://image.tmdb.org/t/p/original${data.results[i].poster_path}" alt=${data.results[i].title}>
//             `);

//             $('#show')
//             .empty()
//             .append(`
//             <h2>${data.results[i].title}</h2>
//             <p>${data.results[i].release_date}</p>
//             `);
//         }
//     };

//     xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${movie}`);

//     xhr.send();


// }; // lookupMovie()



// $(function(){

//     $('#submitButton').on('click', function(){
//         const movieInfo = $('#movieQuery').val();
//         lookupMovie(movieInfo);
//     });

//     $('.link').on('click', function(){
//         const movieInfo = $('#movieQuery').val();
//         lookupMovie(movieInfo);
//         $('#results').hide();
//         $('#show').show();
//     });

// }); // DOM ready handler





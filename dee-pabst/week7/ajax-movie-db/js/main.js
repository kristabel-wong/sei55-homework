console.log(`%cLet me tell thee of the days of high adventure`, 'Font-Family: fantasy; font-size: 14px;');
console.log(`main.js loaded on the page`);
const movieSearch = function(searchTerm){
    // clear previous results
    // $('#results').html('Loading...');
    const xhr = new XMLHttpRequest();
    // get the search term - plug it into the search url
    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${searchTerm}`);
    // send the request
    xhr.send();
    // wait for the response
    xhr.onload = function(){
        const resultArea = $('#results');
        resultArea.empty();
        console.log('oh.. the response turned up:', xhr.response);
        const data = JSON.parse(xhr.response).results;
        // do it as a table
        let resultTable = document.createElement('table');
        let tr = document.createElement('tr');
        let th0 = document.createElement('th');
        let th1 = document.createElement('th');
        let th2 = document.createElement('th');
        let th3 = document.createElement('th');
        th0.innerText = "Poster";
        th1.innerText = "Title";
        th2.innerText = "Popularity";
        th3.innerText = "Overview";
        tr.append(th0,th1,th2,th3);
        resultTable.append(tr);

        // loop through response results
        for(let i = 0 ; i < data.length ; i++){
            // build results list
            let movie = data[i];
            let r1 = document.createElement("tr");
            let c0 = document.createElement("td");
            let c1 = document.createElement("td");
            let c2 = document.createElement("td");
            let c3 = document.createElement("td");
            c0.innerHTML = `<img src="https://image.tmdb.org/t/p/w45${movie.poster_path}">`;
            c1.innerText = movie.title;
            c2.innerText = movie.popularity;
            c3.innerText = movie.overview;
            r1.append(c0,c1,c2,c3);
            resultTable.append(r1);
        }
        resultArea.append(resultTable);
    };
};

$( function(){
    $('#submitButton').on('click', function(){
        searchTerm = $('#movieQuery').val();
        // console.log(`Button clicked! search term is ${searchTerm}`);
        if(searchTerm.length > 1){
            movieSearch(searchTerm);
        }
    });
    $('#results').on('click', 'tr', function() {
        alert( $(this).text() );
        // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
    });
}); // DOM ready handler
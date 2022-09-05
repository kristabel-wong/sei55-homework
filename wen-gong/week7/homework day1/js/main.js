


const lookupMovie = function(movie){

  $('#res').html('Loading....'); // clear old results and show loading meaasge

  const xhr = new XMLHttpRequest(); 

  xhr.onreadystatechange = function(){
    console.log(`Ready state change:`, xhr.readyState );
    console.log(`Response data: `, xhr.response );

  };

  xhr.onload = function(){
    // This function's code will run when XHR decides the response has finished loading
    console.log('actually available response:', xhr.response);

    const data = JSON.parse( xhr.response );
    console.log(data)
    movieData = data.results
    console.log(movieData)
    for (let i = 0; i < movieData.length; i++) {
      const wantData = movieData[i]
      console.log(wantData)
      $('#res')
      
      .prepend(`
      <a href=""><h1>Title:${ wantData.title }</h1></a>
      <h3>Popularity:${ wantData.popularity }</h3>
      <h3>Realease Date:${ wantData.release_date }</h3>
      <h3>Overview: ${ wantData.overview }</h3>
      <img src="https://image.tmdb.org/t/p/w185${wantData.poster_path}">
      
      `); // add response text to end of page
      
    }
     // remove previous results
  };// onload handler
  $('#res').empty()

  //Tell it which URL to open, and HOW
  xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${movie}`);

  xhr.send(); 
}; //lookupMovie()


$( function(){

  $('#submitButton').on('click', function(){
    
    // Use jQuery to get the value typed into the form
    const userMovie = $('#movieQuery').val();

    console.log(`Button clicked! Movie is:`, userMovie);

    lookupMovie( userMovie ); // per
    
  });

});


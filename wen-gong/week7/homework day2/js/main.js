// Public Key
// fc0e2b2bcfc273962ce941db43aa2039

// $(function(){
//     var marvelAPI = 'https://gateway.marvel.com/v1/public/comics';
//     $.getJSON( marvelAPI, {
//         apikey: 'fc0e2b2bcfc273962ce941db43aa2039'
//       })
//         .done(function( response ) {
//           var results = response.data.results;
//           var resultsLen = results.length;
//           var output = '<ul>'; 
//           console.log(results)
//           for(var i=0; i<resultsLen; i++){
//             if(results[i].images.length > 0) {
//               var imgPath = results[i].images[0].path + '/standard_xlarge.' + results[i].images[0].extension;
//               output += '<li><img src="' + imgPath + '"><br>'+results[i].title+'</li>';
//             }
//           }  
//           output += '</ul>'
//           $('#results').append(output);
//       });
       
//     });







// // you will also have to setup the referring domains on your marvel developer portal
// var PRIV_KEY = "fa06f0ab36ae9a11cee59ee4485c76f6191e5efc";
// var PUBLIC_KEY = "d716bc6a500991946d1c1a5b6e609417";

// function getMarvelResponse() {

//   // you need a new ts every request                                                                                    
//   var ts = new Date().getTime();
//   var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
  
//   // the api deals a lot in ids rather than just the strings you want to use
//   var characterId = '1009718'; // wolverine                                                                             


//   var url = 'http://gateway.marvel.com:80/v1/public/comics';

//   console.log(url);
//   $.getJSON(url, {
//     ts: ts,
//     apikey: PUBLIC_KEY,
//     hash: hash,
//     characters: characterId
//     })
//     .done(function(data) {
//       // sort of a long dump you will need to sort through
//       console.log(data);
//     })
//     .fail(function(err){
//       // the error codes are listed on the dev site
//       console.log(err);
//     });
// };

// getMarvelResponse();




$( function(){
    // When DOM is loaded....
    $('#submitButton').on('click', function(){
        console.log(`clicked!`);

        const  query = $('#query').val();
        // console.log(`clicked! Form query:`, query);

        getPokemonSearchResults( query );// give the form input contents to the search function

    }); // on click

}); // DOM ready

const getPokemonSearchResults = function( searchText ){
    console.log(`getPokemonSearchResults(): `, searchText );
    
    axios.get(`https://pokeapi.co/api/v2/pokemon/${ searchText }`)
    .then( function( res ){
        // Success!
        
        console.log(`data:`, res.data);
        const pokemon = res.data;

        // pokemon.forEach( function(pokemon){
            // console.log(movie.title);
            
            $('#results').empty().append(`    
            <div>
              <h3>${ pokemon.name }</h3>
              <p>${ pokemon.order }</p>
            </div>
              <img data-pokemon-id="${ pokemon.id }" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ pokemon.id }.png" alt="${ pokemon.name }">
              
            `);

            $(`#results img`).on('click', function(){
                console.log('image clicked', this);
                const id = $(this).data(pokemon.id);
                console.log(`ID:`, id);
            })
            

        // }); // .forEach results



    }) // end of .then()
    .catch( function( err ){
        // Error!
        console.error( 'WHOOPS!', err );

    });
}; 






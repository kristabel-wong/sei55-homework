

console.log('Search Pokemon');


$( function(){
    // when DOM is loaded
    $('#submit').on('click', function(){

        // console.log('clicked!');

        const query = $('#query').val();
        console.log('clicked! Form query', query);
        
        getPokemonResults( query); // give the form input contents to the search function

    }); //on click


}); // DOM ready

const getPokemonResults = function(searchText){
    console.log('getPokemonResults()', searchText);

    axios.get(`https://pokeapi.co/api/v2/pokemon/${searchText}`)
    .then( function( res ){

        pokemon = res.data

            $('#results').empty().append(`
           <div>
           <h3> ${pokemon.name}</h3>
           <p> Order: ${pokemon.order}</p>
           <p> Height: ${pokemon.height}</p>
           <p> Weight: ${pokemon.weight}</p>
           <img data-pokemon-id="${pokemon.id}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">
         
           </div>
           `)

           $(`#results`).on(`click`, function(){
            const id = $(this).data("pokemon-id");
            console.log('ID', pokemon.id);

           })
        
        
       
    })

    .catch( function( err ){
        // error
        console.log('WOOPS', err);
        

    });
    $('#results').empty()

}; // getMovieSearchResults ()


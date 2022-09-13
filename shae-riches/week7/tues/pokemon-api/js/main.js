$( function(params) {
    // when DOM is loaded
    $('#submitButton').on('click', function(){

        
        const query = $('#queryText').val();

        console.log(`Clicked! Form query:`, query);
        
        getPokemonSearchResults( query );   //  form input as arg


    }); // $('#submitButton').on('click')


}); // $(function) DOM ready

const getPokemonSearchResults = function( searchText ){

    console.log(`getPokemonSearchResults():`, searchText);
   
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${ searchText }`)
        .then(function ( res ) {
            // SUCCESS!
            console.log(`data:`, res.data );

            // res.data.results.forEach( function( relatedStat ){

            //     console.log(relatedStat);
                

                $('#results').append(`
                    <div>
                        <h3>${ res.data.name }</h3>
                        <p>${ res.data.flavor_text_entries[0].flavor_text }</p>
                    </div>
                `);         //          EXAMPLE - HW API will differ

                // $('#results').append(`
                
                //     <img id="${ pokemon.id }" src="http:// NEED TO FIND URL HERE${ pokemon.name }" alt="${ pokemon.name }">
                
                // `);

            // });          //          for.each results
            

            // Attach the same click handler to all the new
            // result thumbnail image tags
            // - but beware, if you don't clear your results
            // before each new search, you might end up with double 
            // up of click handlers!
            // $('#results img').on('click', function(){

            //     console.log(`image clicked!`, ev.target);

            //     console.log(`ID: `, $(ev.target).attr('id') );
                

            // });

            
        })
        .catch( function( err ){
            // ERROR!
            console.log(`WHOOPS!`, err );

        });

};          //          getPokemonSearchResults



// https://pokeapi.co/api/v2/ability/{id or name}/


// https://pokeapi.co/api/v2/pokemon/${ query }?json
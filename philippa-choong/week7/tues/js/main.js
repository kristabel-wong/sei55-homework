// HOMEWORK: CREATE A FRONTEND FOR AN API OF YOUR CHOICE!

// Try to create a search page and a show(details) page, using at least two API requests

// Use axios.get().then().catch()

// No OAuth - just simple API - key -in -the - request - URL authentication at most, ideally  no API key

// Avoid any API which doesn't immediately give you an API key on filling out a short form

// Be advised that the HOTTTEST APIs for the FRESHEST sitez like Facebook, Insta, Twitter, LinkedIn, Spotify etc ALL REQUIRE OAUTH SO JUST FORGET ABOUT IT FOR NOW OK
// 5.ALSO AVOID APIs THAT DON'T SUPPORT "CORS" (i.e. won't let you load them from inside a browser in JS)

// 1. GET DOM 
$(function () {

    $('#submitButton').on('click', function () {

        const query = $('#pokeQuery').val();

        getPokemonSearchResults(query)

    }) // on click

});// DOM ready 

const getPokemonSearchResults = function (searchPokemon) {
    console.log(`getPokemonSearchResults():`, searchPokemon);

    axios
        .get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
        .then(function (response) {
            const pokemon = response.data
            // console.log(`data:`, response);

            $('#results').append(`
            <div>
                <h3>${pokemon.name}</h3>
                <p>weight:${pokemon.weight}</p>
                <img pokemon-id="${pokemon.id}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
            </div>
            `);
            // pokemon-id custom attribute, where you put a -

            $(`#results img`).on('click', function () {
                console.log('image clicked', this); // this - jQuery's click handler
                const id = $(this).data$(pokemon.id);
                console.log(`ID:`, id); //this is a jQuery. it will know .data selected
                // getMovieDetailsById(id);
            })

        })
        .catch(function (err) {
            //Error handler!
            console.log(`Whoops!`, err);
        });


}; // getPokemonSearchResults
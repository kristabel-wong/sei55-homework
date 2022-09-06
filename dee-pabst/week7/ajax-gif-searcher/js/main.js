console.log(`%cLet me tell thee of the days of high adventure`, 'Font-Family: fantasy; font-size: 14px;');
// wrap critical function in a jQuery function to ensure readiness in the DOM
const apiKey = 'g8ILpS1B7BREnQ4YUf3DOl6EExR9Oh8y';

$(function () {
    // wait until someone clicks the button
    // click handler and callback function
    $('#go').on('click', function () {
        // empty all results
        $('#single').hide();
        $('#single').empty();
        $('#results').empty();
        $('#results').show();
        // grab the search term from the input
        const q = $('#q').val();
        // console.log(`runSearch():`, q);
        getGifResults(q);
    });

    $('#back').on('click', function () {
        // console.log(`Back button clicked`);
        $('#single').hide();
        $('#single').empty();
        $('#back').hide();
        $('#results').show();
    });

}); // DOM ready

const getGifResults = function (q) {
    // craft the url
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=20&rating=g&lang=en&q=${q}`;
    // console.log(`URL`, URL);

    // send the axios request
    axios.get(URL)
        .then(function (res) {
            // console.log(`Success!`, res.data.data);
            buildResultsPage(res.data.data);
        })
        .catch(function (err) {
            console.error(`Error getting GIFS`, err);
        });
}

const buildResultsPage = function (data) {
    data.forEach(function (gif) {
        // console.log(`buildResultPage:`, gif);
        // display the returned data
        $('#results').append(`
        <img data-gifid="${gif.id}" src="${gif.images.fixed_width_downsampled.url}" alt="${gif.title}">
        `)
    })
    // create click handlers on all
    $('#results img').on('click', function (e) {
        // console.log(`clicked on:`, this);
        const id = $(e.target).data('gifid');
        getGifById(id);
    });
}

const getGifById = function (id) {
    // console.log(`getGifById():`, id);
    const url = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`
    // make a call to the gif by id api
    axios.get(url)
        .then(function (res) {
            // console.log(`getGifById() Success! :`, res.data.data);
            showSingleResultPage(res.data.data);
        })
        .catch(function (err) {
            console.error(`Error getting gif`, err);
        });
};

const showSingleResultPage = function (gif) {
    // console.log(`showSingleResultPage():`, gif);
    // hide the main results area
    $('#results').hide();
    // show the single gif results area
    $('#single').show();
    $('#single').append(`<img src="${gif.images.original.url}" alt="${gif.title}">`)
    $('#back').show();
};
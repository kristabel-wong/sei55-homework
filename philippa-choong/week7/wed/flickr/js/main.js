console.log('loading!');

const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/';
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';
let page = 1; // page will always start at 1
let hidePrevButton = true
let hideNextButton = true

$(function () {
    $('#query').focus(); // so we can test easily by pressing enter - very useful!
    // Either a click of the button OR (yesss) pressing enter is an input
    // will trigger the form submit
    toggleButtonsVisibility()

    $('#searchForm').on('submit', function (ev) {  // ev - events 
        // console.log('Form submitted!');
        ev.preventDefault(); // stop the form from reloading the page

        page = 1; //resetting back to page 1 whenever there's a new search
        const query = $('#query').val(); // grab the search info
        getSearchResults(query, page);
        generatePages(11) // as i starts at 1
        hidePrevButton = true
        hideNextButton = false
        toggleButtonsVisibility()

        // togglePreviousButton();
    })// form submit handler function 



    $('[aria-label="Previous"]').click(function (ev) {
        const query = $('#query').val(); // grab the search info
        if (page > 1) {
            page--;
        }
        if (page === 1) { // no more previous pages when at first page
            hidePrevButton = true
            toggleButtonsVisibility()
        }
        getSearchResults(query, page);
    });// Previous Page

    $('[aria-label="Next"]').click(function (ev) {
        const query = $('#query').val(); // grab the search info
        page++;

        getSearchResults(query, page);

        hidePrevButton = false
        toggleButtonsVisibility()
    });// Next Page


})// DOM ready

const getSearchResults = (queryText, pageNum) => {
    console.log('getSearchResults:', queryText);
    $('#results').html('<p>Loading results....</p>'); //replace old results with loading message
    // https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2f5ac274ecfac5a455f38745704ad084&text=coral+fish&format=json&nojsoncallback=1

    //https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2f5ac274ecfac5a455f38745704ad084&text=coral&per_page=20&page=5&format=json&nojsoncallback=1

    axios.get(FLICKR_BASE_URL, {
        params: {
            // These key-value pairs turn into query string &key=value pairs
            method: 'flickr.photos.search',
            api_key: FLICKR_API_KEY,
            format: 'json',
            nojsoncallback: 1,
            text: queryText,
            per_page: 20,
            page: pageNum
        }
    })
        .then(res => {
            // console.log(res.data);
            renderSearchResults(res.data.photos)
            generatePaginationEvListeners()
        })
        .catch(err => {
            console.error('Error loading search results', err)
        })
} // getSearchResults()

const renderSearchResults = results => {
    console.log('renderSearchResults', results);
    $('#results').empty(); //clear any previous results
    results.photo.forEach(photo => {
        const imageUrl = generateImageUrl(photo);
        // console.log('photo:', imageUrl);
        const $img = $(`<img src="${imageUrl}" alt="${photo.title}">`);
        $(`#results`).append($img);
        // $img.on('click',)
        // data-pageId custom attribute to get page.id (jQuery)
    })

}; // renderSearchResults

const generateImageUrl = (p) => {
    return `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`
    // q is the size suffixes retrieved from API documentation
    // p is photo

}; // generateImageUrl()

const toggleButtonsVisibility = () => {
    hidePrevButton ? $('#Previous').hide() : $('#Previous').show()
    hideNextButton ? $('#Next').hide() : $('#Next').show()
    // condition ? if_true : if_false (ternary)
}

const generatePages = numberOfPages => {

    for (let i = 1; i < numberOfPages; i++) {
        // console.log(i);
        $('#pageList').append(`
            <a href="#" id="${i}" class="eachPage">${i}</a>
        `)
    }
}

const generatePaginationEvListeners = () => {
    $('.eachPage').click(function (ev) {
        console.log(ev.target.text)
    });
}

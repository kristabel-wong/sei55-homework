console.log(`flickr search`);

const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/';
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';

let pageNum = 1

$( function(){

    $('#query').focus(); // so we can test easily by pressing enter

    // EITHER a click of the button OR (yessss) pressing enter in an input
    // will trigger the form submit
    $('#searchForm').on('submit', function( ev ){
        ev.preventDefault(); // stop the form from reloading the page
``
        const query = $('#query').val();

        getSearchResults( query )

    }) // form submit

    $('#nextPage').on('click', function(){
        pageNum += 1
        const query = $('#query').val();
        // console.log(`button click:`, pageNum, query);

        if (pageNum > 1){
            $('#previousPage').show()
            getPage(pageNum, query)
        }

    })


    $('#previousPage').on('click', function(){
        pageNum -= 1
        const query = $('#query').val();
        if (pageNum > 1){
            getPage(pageNum, query)

        } else {
            $('#previousPage').hide()
            getPage(pageNum, query)

        } // ifelse conditions

    })


}) // DOM ready

const getSearchResults = queryText => {
    console.log(`getSearchResults():`, queryText);
    // https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2f5ac274ecfac5a455f38745704ad084&text=ocean+coral&page=1&format=json&nojsoncallback=1

    $('#results').html('<p>Loading results...</p>'); // replace old results

    axios.get( FLICKR_BASE_URL, {
        params: {
            // These key-value pairs turn into querystring &key=value pairs
            method: 'flickr.photos.search',
            api_key: FLICKR_API_KEY,
            format: 'json',
            nojsoncallback: 1,
            text: queryText,
        }
    })
        .then( res => {
            // console.log( res.data );
            renderSearchResults( res.data.photos )
        })
        .catch( err => {
            console.log('Error loading search results.', err);
        });

};

const renderSearchResults = (results) => {
    console.log('renderSearchResults():', results);

    $('#results').empty();

    results.photo.forEach( photo => {
        const imageUrl = generateImageUrl( photo )
        console.log('photo:', imageUrl);
        const $img = $(`<a href="#" class="thumbnail_img" id="${photo.id}"><img src="${imageUrl}" alt="${photo.title}"></a>`)
        $('#results').append($img);

    })

    $('.thumbnail_img').on('click', function(){
        const imgId = $(this).attr('id')
        console.log(`image id:`, imgId);
        
        showImage(imgId)

    })

}

const generateImageUrl = (p) => {
    return `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`
} // generateImageUrl()

const generateShowImageUrl = (p) => {
    return `https://live.staticflickr.com/${p.photo.server}/${p.photo.id}_${p.photo.secret}_z.jpg`
} // generateImageUrl()

// function for navigating next/previous pages
const getPage = (pageNum, queryText) => {
    // console.log(`getNextPage():`, page);
    $('#currentPage').text(`Current Page: ${pageNum}`)

    axios.get( FLICKR_BASE_URL, {
        params: {
            method: 'flickr.photos.search',
            api_key: FLICKR_API_KEY,
            format: 'json',
            nojsoncallback: 1,
            text: queryText,
            page: pageNum,
        }
    })
        .then( res => {
            renderSearchResults( res.data.photos )
        })
        .catch( err => {
            console.log('Error loading search results.', err);
        })
}

const showImage = id => {
    // console.log(`showImage():`, id);

    axios.get( FLICKR_BASE_URL, {
        params: {
            method: 'flickr.photos.getInfo',
            api_key: FLICKR_API_KEY,
            format: 'json',
            nojsoncallback: 1,
            photo_id: id
        }
    })
        .then( res => {
            // console.log(res.data.photo.id);
            generateDescription( res.data )
        })
        .catch( err => {

        })
    
}

const generateDescription = results => {
    $('#results').hide()
    $('#pageNav').hide()
    $('#description').empty()
    $('#description').show()

    // console.log(results.photo.id, results.photo.secret, results.photo.server);

    const image = generateShowImageUrl(results)

    $('#description').append(`
        <img src="${image}" alt="test">
        <h2>Owner</h2>
        <p>${results.photo.owner.realname}<p>
        <h2>Title</h2>
        <p>${results.photo.title._content}<p>
        <h2>Taken At</h2>
        <p>${results.photo.dates.taken}<p>
        <button id="backToSearch">Back to Search Results</button>
    `)

    $('#backToSearch').on('click', function(){
        $(`#description`).hide()
        $(`#results`).show()
        $('#pageNav').show()
    })

}


const pageList = numberOfPages => {

    for (let i = 0; i < numberOfPages; i++) {
        console.log(i); 
        $('#pageList').append(`
            <a href="#" id="${i}">${i}</a>
        `)

    }
}
pageList(10) //why does this not work???


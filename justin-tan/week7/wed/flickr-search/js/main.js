console.log(`flickr search`);

const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/';
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';

let pageNum = 1
let query = ''

$( function(){

    $('#query').focus(); // so we can test easily by pressing enter

    // EITHER a click of the button OR (yessss) pressing enter in an input
    // will trigger the form submit
    $('#searchForm').on('submit', function( ev ){
        ev.preventDefault(); // stop the form from reloading the page

        query = $('#query').val();

        getSearchResults( query )

    }) // form submit

    // next page click handler
    $('#nextPage').on('click', function(){
        pageNum += 1

        // console.log(`button click:`, pageNum, query);

        if (pageNum > 1){
            $('#previousPage').show()
            getPage(pageNum, query)
        }
    })

    // previous page click handler
    $('#previousPage').on('click', function(){
        pageNum -= 1

        if (pageNum > 1){
            getPage(pageNum, query)

        } else {
            $('#previousPage').hide()
            getPage(pageNum, query)

        } // ifelse conditions
    })

    const pageList = numberOfPages => {

        for (let i = 1; i < numberOfPages; i++) {
            console.log(i); 
            $('#pageList').append(`
                <a href="#" id="${i}" class="pageTag">${i}</a>
            `)
        }
    }
    
    $('.pageTag').on('click', function(){
        const pageId = $('.pageTag').attr('id')
        console.log(`page button clicked!`, pageId, query);
        // getPage(pageId, query)
    })

    pageList(10) 

    $(window).scroll(function(){
        //INFINITE SCROLL CHECKED!!!!!

        //check if end of document is reached
        //HOW DOES IT WORK?
        //First of all, i need to know when the user scrollbar touches the bottom of the page.
        //use Window Scroll Event to check this.

        if ($(document).height() - $(this).height() == $(this).scrollTop()) {
            console.log('scrolled to Bottom');
            getNextPageForScrolling(pageNum += 1, query)
        }

        //Take the difference of document height and window height. The difference is equal to window scrollTop when the user has scrolled to the bottom.
        // $(document).height : It's the height of the html document
        // window.height : It's the height of browser viewport
        // window.scrollTop : returns the vertical scrollbar position for the element.
    
    })
    

}) // DOM ready

const getNextPageForScrolling = (page, query) => {

    axios.get( FLICKR_BASE_URL, {
        params: {
            method: 'flickr.photos.search',
            api_key: FLICKR_API_KEY,
            format: 'json',
            nojsoncallback: 1,
            text: query,
            page: page,
        }
    })
        .then( res => {
            
            res.data.photos.photo.forEach( photo => {
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
        })
        .catch( err => {
            console.log('Error loading search results.', err);
        })

}


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







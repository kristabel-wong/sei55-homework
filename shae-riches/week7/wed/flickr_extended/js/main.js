console.log(`loaded`);

const FLICKR_BASE_URL   = 'https://www.flickr.com/services/rest/'
const FLICR_API_ID      = '2f5ac274ecfac5a455f38745704ad084'

// https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2f5ac274ecfac5a455f38745704ad084&text=dog&format=json&nojsoncallback=1

// https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=f93820623b052d966702e298fc5f0680&photo_id=52339752973&format=json&nojsoncallback=1

// https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2f5ac274ecfac5a455f38745704ad084&text=Crystals&safe_search=3&per_page=500&format=json&nojsoncallback=1

$(function(){
    $('#query').focus(); // so we can test easily by pressing enter
    // EITHER a click of the button OR (yessss) pressing enter in an 
    // input will trigger the form submit
    $('#searchForm').on('submit', function( ev ){
        console.log(`Form submitted!`);
        ev.preventDefault(); // stop the form from reloading the page

        const query = $('#query').val();

        getSearchResults( query );

    });     //      form submitted

});     //      DOM ready 

const getSearchResults = (queryText) => {

    axios.get( FLICKR_BASE_URL, {
        
        params: {
            // These key-value pairs turn into querystring &key=value pairs
            method: 'flickr.photos.search',
            api_key: FLICR_API_ID,
            safe_search: 3,
            per_page: 500,
            format: 'json',
            nojsoncallback: 1,
            text: queryText
        }

    })
        .then( res => {
            // console.log(res.data);
            renderSearchResults(res.data.photos);
            return allPhotoData = res.data.photos
            
        })
        .catch( err => {
            console.log(`Error loading search results`, err);
        });

}; // getSearchResults()


const renderSearchResults = ( results ) => {
    console.log(`renderSearchResults():`, results);
    
    
    $('#loading').html('<p>Loading... results...</p>');

    results.photo.forEach( photo => {
        console.log(`photo:`, photo);
        const imageURL = generateImageUrl(photo);        
        console.log(`photo:`, imageURL);

        const $img = $(`<img src="${imageURL}" alt="${photo.title}">`)
        $('#results').append($img);
        
        
    });
    
}; // renderSearchResults()

const generateImageUrl = ( p ) => {
    

    return `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`

}; // generateImageUrl()


// 15min save all info from search into single variable

// HOMEWORK PLAN
// 15min flexbox research and testing
// 30min CSS reformat to pleasing display - flex boxes

// save all info from search into single variable

// 30min display photo with some information about photo [function]
// 15min display single photo .css



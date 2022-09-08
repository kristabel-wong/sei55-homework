
console.log(`Flickr search!`);

const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2f5ac274ecfac5a455f38745704ad084&per_page=50&page=1&text=ocean+coral&&format=json&nojsoncallback=1';

const FLICK_API_KEY = '2f5ac274ecfac5a455f38745704ad084';


$( function(){
    
    
    $('#query').focus(); // so we can test easily by pressing enter - cursor already in input ready to type
    
    // EITHER a click of the button OR pressing enter in an input
    // will trigger the form submit
    $('#searchForm').on('submit', function( ev ){
        
        ev.preventDefault(); // stop the form from reloading the page
        const query = $('#query').val();
        queryPage = 1; // returns page 1 for new search
        getSearchResults( query );
        
    }); // form submit
    
    $('#back').on('click', function( ){
        console.log(`back button clicked`);
        
        if(queryPage > 1){
            queryPage = queryPage -1;

            const query = $('#query').val();
            getSearchResults( query );

        }else {
            queryPage = 1;
        };

    }); // back

    $('#next').on('click', function( ){
        console.log(`next button clicked`);

        if(queryPage < 10){
            queryPage = queryPage + 1

            const query = $('#query').val();
            getSearchResults( query );
        }else {
            queryPage = 10;
        };


    });
    
    
}); // DOM ready

const getSearchResults = (queryText) => {
    // console.log(`getSearchResults():`, queryText);

    $('#results').html('<p>Loading results...</p>'); // clear any previous results

    
    // https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2f5ac274ecfac5a455f38745704ad084&text=ocean+coral&format=json&nojsoncallback=1 <-- params underneath is doing the same thing

    // https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2f5ac274ecfac5a455f38745704ad084&per_page=50&page=1&text=ocean+coral&&format=json&nojsoncallback=1

    axios.get( FLICKR_BASE_URL, {
        params: {
            // These key-value pairs turn into querystring &key=value pairs
            method: 'flickr.photos.search',
            api_key: FLICK_API_KEY,
            format: 'json',
            nojsoncallback: 2,
            page: queryPage,
            text: queryText
        }
    })
        .then( res => {
            // console.log( res.data );
            renderSearchResults( res.data.photos )
        })
        .catch( err => {
            console.log('Error loading search results', err);
        });

}; // getSearchResults

const renderSearchResults = (results) => {

    console.log('renderSearchResults()', results);

    $('#results').empty(); // clear any previous results

    results.photo.forEach( photo => {

        const imageUrl = generateImageUrl( photo );
        // console.log('photo:', imageUrl);

        const $img = $(`<img data-photoid="${photo.id}" data-photosecret="${photo.secret}" src="${imageUrl}"  alt="${photo.title}">`);
        
        $('#results').append($img);

        $('#results img').on('click', function(ev){
            // console.log(`image clicked!`);
            const id = $(ev.target).data('photoid');
            console.log((`ID:`, id));
            generateImageUrl(id)
            
            const secret = $(ev.target).data('photosecret')
            console.log('Secret:', secret);
            console.log(photo.server);

            axios.get(`https://live.staticflickr.com/${photo.server}/${id}_${secret}_q.jpg`)
               .then(function( res ){

                $('#results').hide()
                $('#details').empty()
                $('#details').show()
                
                $('#details').append(`
                    <img src="https://live.staticflickr.com/${photo.server}/${id}_${secret}_q.jpg" alt="${res.data.title}" >
                `); // details

                $(`#details`).on(`click`, function(){
                        
                  $('#details').empty()
                  $('#details').hide()
                  $('#results').hide()
                  $('#query').empty()


                }); // click function

                $('#searchForm').on('submit', function( ev ){
        
                    ev.preventDefault(); // stop the form from reloading the page
                    $('#details').empty()
                    $('#details').hide()
                    $('#results').show()
                    
                }); // form submit

            }); //axios get

        }); // click function    

    
    }); // forEach
        
};// renderSearchResults
    


const generateImageUrl = ( p ) => {
    return `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`
}; // generateImageUrl
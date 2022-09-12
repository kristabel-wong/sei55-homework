const FLICKER_BASE_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2f5ac274ecfac5a455f38745704ad084&per_page=50&page=1&text=ocean+coral&&format=json&nojsoncallback=1`;
const API_URL= `2f5ac274ecfac5a455f38745704ad084`;

// Make pagination work; either with a prev and next button, but even better with a series of 1 2 3 fake-links to let people jump to specific pages - RTFM on how to get different pages

// When a user clicks on a thumbnail they should be "taken" to a show/details "page" (really just showing and hiding divs) where another AJAX request is made to get the detailed info for that photo by ID; show a larger image on the details page with more detailed information from the details AJAX request (RTFM again to find the details API method)
// .onclick( queryPage++)
// let queryPage = 1

console.log('Flicker');

$( function(){

   $(`#query`).focus(); 
// Enter a click of the button OR yess pressing enter in an input will trigger the form submit

$(`#searchForm`).on(`submit`, function(ev){
        console.log('Form Submitted');
        ev.preventDefault(); // stop the form from reloading the page

        const query = $(`#query`).val();
        queryPage = 1;

        getSearchResults(query);

    
    }); // form submit

    $(`#prev`).click(function(){
        console.log('prev clicked', queryPage);
        
        if(queryPage > 1){
            queryPage = queryPage - 1;
            const query = $(`#query`).val();
            getSearchResults(query);

        }else {
            queryPage = 1;
        };
    }); // prev
    
    $(`#next`).click(function(){
        console.log('next clicked', queryPage);
        
        if(queryPage < 10){
            queryPage = queryPage +1;
            const query = $(`#query`).val();
            getSearchResults(query);
        } else{
            queryPage = 10;
        };
    }); // next



});  // DOM ready



const getSearchResults = (queryText) => {
    // console.log('getSearchResults();', queryText);

    $(`#results`).html(`<p>Loading results... </p>`); // replace old results 


    // insteand of the long string just break it down this way...
    axios.get(FLICKER_BASE_URL, {
        params: {
            method: `flickr.photos.search`,
            api_key: API_URL,
            format: `json`,
            nojsoncallback: 2,
            page: queryPage,
            text: queryText
        }
    })
    .then( res => {
        console.log('Error loading search results', (res.data));
        renderSearchResults(res.data.photos);
    })

    .catch( err => {
        console.log('Error loading search results', err);
        
    });
}; // getSearchResults()

const renderSearchResults = (results) => {
    
        console.log('renderSearchResults()', results);
    
        $('#results').empty(); // clear any previous results
    
        results.photo.forEach( photo => {
            const imageUrl = generateImageUrl( photo );
            console.log('photo:', imageUrl);
    
            const $img = $(`<img data-photoid="${photo.id}" data-photosecret="${photo.secret}" src="${imageUrl}" alt="${photo.title}">`);
            const $secret = $(`<img data-photosecret="${photo.secret}" src="${imageUrl}" alt="${photo.title}">`);
            // const $server = $(`<img data-photoserver="${photo.server}" src="${imageUrl}" alt="${photo.title}">`);


            // const $secret = $img.secret;
            // console.log($secret);
            $('#results').append($img);
    
            $('#results img').on('click', function(ev){
                // console.log(`image clicked!`);
                const id = $(ev.target).data('photoid');
                console.log((`ID:`, id));
                generateImageUrl(id)
                const secret = $(ev.target).data('photosecret')
                console.log('Secret:', secret);
                console.log(photo.server);
                // getImageDetailsById(photo)
                
                axios.get(`https://live.staticflickr.com/${photo.server}/${id}_${secret}_q.jpg`)
                 .then(function( res ){
                console.log(res.data);
                $('#results').hide()
                $('#details').empty()
                $('#details').show()
                
                $('#details').append(`
                    <img src="https://live.staticflickr.com/${photo.server}/${id}_${secret}_q.jpg" alt="${res.data.title}" >
                
                `); // details
                    $(`#details`).on(`click`, function(){
                        
                        $('#details').empty()
                        $('#details').hide()
                        $('#results').show()

                        
                    });

                });
               
               
                
        
            });
            
        });
    }; // renderSearchResults

  

    const generateImageUrl = ( p ) => {
        return `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`
    }; // generateImageUrl

    // const getImageDetailsById = function(photo){
    //     axios.get(`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`)
    //     .then(function( res ){
    //         console.log(res.data);
    //         // $('#results').hide()
    //         // // $('#details').empty()
    //         // $('#details').show()
            
    //         $('#details').append(`
    //             <img src="${res.data.url}" alt="${res.data.title}" >
            
    //         `); // details
    //     })
    //     .catch(function( err ){
    //         console.log('Error loading Photo by ID');
    //     });
    //   };


// const renderSearchResults = (results) => {
//     // console.log('renderSearchResults():', results);

//     $(`#results`).empty(); //clear search results

//     results.photo.forEach( photo => {
//         // console.log('photo:', photo);
//         const imageUrl = generateImageUrl( photo );
//         // console.log(imageUrl);
//         const $img = $(`<img photo-id="${photo.id}" "src="${imageUrl}" alt="${photo.title}">`)
//         $(`#results`).append($img);

//         // $(`#results img`).click(function(ev){
//         //     const id = $(ev.target).data('photo-id');
//         //     console.log('image clicked', id);
//         //     // generateImageUrl(id);
//         //     // const secret = $(ev.target).data('photosecret');
//         //     // console.log('secret:', secret);
//         //     // const ser = $(ev.target).data('photosecret');
//         //     // console.log('secret:', secret);
        
        
            
//         // })
//         //on.click
        
//     });

    
    
// }; // renderSearchResults
// // $img.on('click', )

// function generateImageUrl(p) {
//     return `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`;
// } // generateImageUrl ()

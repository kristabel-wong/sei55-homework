
console.log('connected!');

// https://api.nasa.gov/planetary/apod?api_key=bs2U2NEvPovbTI4pZXMqFl15S4K536aQKoIwgt8N

$( function(){

    // when DOM is loaded

    $('#submitButton').on('click', function(){

        // on click function for search
        const query = $('#query').val(); // gets the value typed into the form

        console.log(`Button clicked! Photo date is:`, query);

        getImageSearchResults( query ); // give the form input contents to the search function

    });

    // click enter function for search
    $('#query').on('keypress',function (press){
       
        if(press.which == 13){ // 13 corresponds to the return key
            const query = $('#query').val();
            getImageSearchResults( query );
        };

    });

}); // DOM ready


const getImageSearchResults = function( date ){

    // console.log(`getImageSearchResults()`, date);

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=BI7RY9lpcxcJbXlfpObpq2uCcCmbI3oNnIU3MvZo&count=10`)
    .then(function( res ){
        // .then is for successful request
        console.log(`data:`, res.data);

        $('#results').empty(); // clear any previous results
        $('#results').show();
        $('#details').empty();



        res.data.forEach(function ( photo ) {
            console.log(photo.url);

            $('#results').append(`
                <img data-imagedate="${photo.date}" src="${photo.url}" alt="${photo.title}">
            `); // results
        });
        
        
        $('#results img').on('click', function(ev){
            // console.log(`image clicked!`, ev.target.id);
            const id = $(ev.target).data('imagedate');
            console.log(`ID:`, id );
            getImageDetailsById( id );
        });
            
    })
    .catch(function(err){
        console.log('Error!', err);
    });

};
    
const getImageDetailsById = function(date){

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=BI7RY9lpcxcJbXlfpObpq2uCcCmbI3oNnIU3MvZo&date=${date}`)
    .then(function( res ){
        console.log(res.data);

        $('#results').hide()
        $('#details').empty()
        $('#details').show()
        
        $('#details').append(`
            <img src="${res.data.url}" alt="${res.data.title}" >
            <h2>${res.data.title}</h2> <p>${res.data.explanation}</p>
        `); // details


    })
    .catch(function( err ){
        console.log('Error loading Photo by ID');
    });

};
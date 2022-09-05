
console.log('js loaded');
console.log(`${jQuery} loaded`);

const queryMovieDatabase = function( movieTitle ) {
    

    $('#results').html('Loading...');   // clears last results, also provides info to user

    const xhr = new XMLHttpRequest();   // make new instance - this is the constructor

    xhr.onload = function(){
      
        console.log('onload available response =', xhr.response );


        const data = JSON.parse( xhr.response );
        

        $(`#results`)
            .empty()    //                  remove previous results    
            .prepend(`
                <h2>'${ '#movieSearchInput' }' Search Results</h3>
                ${ for (let i = 0; i < array.length; i++) {
                    const element = array[i];
                    
                    }


                }
                <h4>${ data }</h4>

            `);         //                  output of queryData to index.html page as #results div
 

    };    
    //              Tell XML-HTTP-Request which URL to open and HOW
    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${movieTitle}?json` )

    xhr.send();     //                  SENDS request & does NOT block - unlike Ruby        
    
 

};                  //                  queryMovieDatabase

$( function(){

    $('#submitButton').on('click', function(){

        const userSearchTerm = $('#movieSearchInput').val();    // saves user input into const

        console.log(`Search submitted, user searched:`, userSearchTerm); //   check === true
        

        queryMovieDatabase(userSearchTerm); // ** CALLS queryMovieDatabase WITH USERINPUT ** 


    });             //                  close #submitButton.on('click')

});                 //                  close searchHandler
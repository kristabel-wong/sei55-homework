
// console.log('main.js loaded!');
console.log('API KEY IS 3G0mhLXfi7LK0i9Dr3rmWcTX4q7SYiUP');

$(function(){

    $('#submitButton').on('click', function(){
        const query = $('#giphyQuery').val();
        // console.log(`clicked:`, query);
        getGiphyResults(query);

    }); // on click

}); // DOM ready


// // Method 1 .then & .catch
// const getGiphyResults = function(searchBar){
//     console.log(`getGiphyResults`, searchBar);

//     axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchBar}&api_key=3G0mhLXfi7LK0i9Dr3rmWcTX4q7SYiUP&limit=20`)
//         .then(function(res){
//             // Success
//             // console.log(`data:`, res.data.data)

//             $('#results').html('Loading...')

//             $('#results').empty();

//             res.data.data.forEach(function(item){
//                 $('#results')
//                 .append(`
//                 <h2>${item.title}</h2>
//                 <img src="${item.images.original.url}" alt="${item.title}">
//                 `);

//             }); // .forEach

//         }) // end of .then()
//         .catch(function(err){
//             // Error
//             console.error('WHOOPS', err);
//         }); // end of .catch()

// }; // getGiphyResults()



// Method 2 async & await
const getGiphyResults = async function(searchBar){
    try {
        // Success

        // The maximum number of objects is 20
        const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchBar}&api_key=3G0mhLXfi7LK0i9Dr3rmWcTX4q7SYiUP&limit=20`)
        // console.log(`response:`, res.data.data);

        $('#results').html('Loading...')

        $('#results').empty();

        res.data.data.forEach(function(item){
            $('#results')
            .append(`
            <h2>${item.title}</h2>
            <img src="${item.images.original.url}" alt="${item.title}">
            `);

        }); // .forEach

    } catch(err){
        console.log(`Something went wrong`, err);
    }
}; // getGiphyResults()










$( function(){
    // When DOM is loaded
    $('#searchButton').on('click', function(){
        const startDate = $('#startDate').val()
        const endDate = $('#endDate').val()
        
        console.log(`button clicked`, startDate, endDate);
        getPhotos(startDate, endDate)

    })
    
})

const getPhotos = function( startDate, endDate ){

    // console.log(`getPhoto():`, date);

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=ck6JfRaH5OyKQUHFxZ3BpB6bmqyGt9jlHHYqb4ez&start_date=${startDate}&end_date=${endDate}`)
        .then( function(res) {
            // console.log(`data:`, res.data)

            $('#results').empty()
            $('#results').show()
            $('#details').hide()
            $('#errors').hide()

            res.data.forEach( function(photo){

                console.log(photo.title);
                $(`#results`).append(`
                    
                    <div class="resultBox">
                        <img src="${photo.url}" alt="${photo.title}" class="result_img">
                        <h3>${photo.title}</h3>
                        <a href="#" id="${photo.date}">Click here for description</a>
                        <br><br>
                    </div>

                `) //.append


            }) //forEach results

            // Attach click handler for showing photo descriptio
            $(`#results a`).on('click', function(){

                const photoDate = $(this).attr(`id`)

                showPhotoDescription(photoDate)
            })

        }) //.then
        .catch( function(err) {

            $(`#errors`).empty()
            $(`#errors`).show()
            $('#results').hide()
            $('#details').hide()

            // console.log(`Oopsie!`, err.request.statusText);
            $(`#errors`).append(`
                <h2>Oops! ${err.request.statusText}</h2>
            `)

        })//.catch

}

const showPhotoDescription = function( date ){

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=ck6JfRaH5OyKQUHFxZ3BpB6bmqyGt9jlHHYqb4ez&date=${date}`)
        .then( function(res){

            $('#results').hide()
            $('#details').empty()
            $('#details').show()
            $('#errors').hide()

            console.log(res.data.title);
            $(`#details`).append(`
                <img src="${res.data.url}" alt="${res.data.title}" class="detail_img">
                <h1 id="img_header">${res.data.title}</h1>
                <h3>Image Credit & Copyright</h3>
                <p>${res.data.copyright}</p>
                <h3>Date</h3>
                <p>${res.data.date}</p>
                <h3>Description</h3>
                <p id="description">${res.data.explanation}</p>

                <button id="backToSearch">Go Back to Search Results</button>
                <br><br>
            
            `) //.append

            $('#backToSearch').on('click', function(){

                $(`#details`).hide()
                $(`#results`).show()

            })

        }) //.then
        .catch( function(err){

        })
}
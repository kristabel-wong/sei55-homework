

// API key you can use: ck6JfRaH5OyKQUHFxZ3BpB6bmqyGt9jlHHYqb4ez

//e.g. https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5

// HTTP Request
// GET https://api.nasa.gov/planetary/apod

// concept_tags are now disabled in this service. Also, an optional return parameter copyright is returned if the image is not public domain.

// Query Parameters
// Parameter	Type	Default	Description
// date	YYYY-MM-DD	today	The date of the APOD image to retrieve
// start_date	YYYY-MM-DD	none	The start of a date range, when requesting date for a range of dates. Cannot be used with date.
// end_date	YYYY-MM-DD	today	The end of the date range, when used with start_date.
// count	int	none	If this is specified then count randomly chosen images will be returned. Cannot be used with date or start_date and end_date.
// thumbs	bool	False	Return the URL of video thumbnail. If an APOD is not a video, this parameter is ignored.
// api_key	string	DEMO_KEY	api.nasa.gov key for expanded usage

const apiKey = 'ck6JfRaH5OyKQUHFxZ3BpB6bmqyGt9jlHHYqb4ez'

const httpByNumber = function (count) {
    return `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`
}

const httpByDate = function (date) {
    return `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
}

const httpByTwoDates = function (start, end) {
    return `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${start}&end_date=${end}`
}



$(function () {
    // DOM ready
    $('#btn').on('click', function () {
        $('#details').empty().hide()
        $('#results').empty().show()
        const query = $('#query').val()
        getImagesResults(query)
    }) // query button handler

    $('#dateBtn').on('click', function () {
        $('#details').empty().hide()
        $('#results').empty().show()
        const startDate = $('#startDate').val()
        const endDate = $('#endDate').val()
        getImagesByDate(startDate, endDate)
    }) // dates button handler

    $('#todayBtn').on('click', function () {
        $('#results').empty().hide()
        $('#details').empty().show()
        const today = $('#today').val()
        getDetails(today)
    }) // dates button handler

    $('#searchType').change(function(){
        const type = $(this).val()
        if(type==='0'){
            $('#searchByNumber').show()
            $('#searchByDateRange').hide()
            $('#searchByDate').hide()
        } else if (type==='1') {
            $('#searchByNumber').hide()
            $('#searchByDateRange').show()
            $('#searchByDate').hide()
        } else {
            $('#searchByNumber').hide()
            $('#searchByDateRange').hide()
            $('#searchByDate').show()
        }
    })
}) //DOM ready

const getImagesResults = function (queryNumber) {
    axios.get(httpByNumber(queryNumber))
        .then(function (res) {
            //success
            const data = res.data
            showImages(data)
        })
        .catch(function (err) {
            // err
            showError(err)
        })
} // getImagesResults

const getDetails = function (queryDate) {
    axios.get(httpByDate(queryDate))
        .then(function (res) {
         
            const data = res.data
            $('#results').hide()
            $('#details').empty().append(`
                <h3>${data.title}</h3>
                <img class="back" src="${data.hdurl}" alt="${data.title}">
                <em>By: ${data.copyright}, on: ${data.date}</em>
                <br><br>
                <strong>Explanation:</strong>
                <p> ${data.explanation}</p>
                <br>
                <button class="back">Back</button>
                `).show()

            $('.back').on('click', function () {
         
                $('#details').hide()
                $('#results').show()
            }) // back button handler

        })
        .catch(function (err) {
            showError(err)
        })
} // getDetails


const getImagesByDate = function (startDate, endDate) {
    axios.get(httpByTwoDates(startDate, endDate))
        .then(function (res) {
            const data = res.data
            showImages(data)
        })
        .catch(function (err) {
            showError(err)
        })
} // getImagesByDate

const showImages = function (data) {

    data.forEach(function (ele) {
        $('#results').append(
            `
                    <img src="${ele.url}" alt="${ele.title}" data-date=${ele.date}>
                    `
        )
    }); // forEach

    $('#results img').on('click', function (e) {
        const date = $(e.target).data('date')
        getDetails(date)
    }) // img click
}

const showError = function (err) {
    console.error(err.response.data.error.message);
            const error = err.response.data.error.message
            $('#errors').empty().append(`
              <h4>${error}</h4>
            `)
}
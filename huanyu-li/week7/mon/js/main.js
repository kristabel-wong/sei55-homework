


const searchMoive = function (input,page=1) {
    
    const movies = new XMLHttpRequest()
    movies.open('GET',`https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${input}&page=${page}`)
    movies.send()
    movies.onload = function () {

        const data = JSON.parse(movies.response)

        $('#resultsNumber').empty().append(`
        <em style="color:red">There are ${data.total_results} results, and ${data.total_pages} pages in totoal</em>`)
        $('#result').empty()

        data.results.forEach(element => {

            $('#result').append(`
            <li>
            
            Title: <a class="detailBtn" id="${element.id}" href="#details">${element.title}
            </a>

            <br>
            Popularity: ${element.popularity}
            <br>
            Overview: ${element.overview}
            <br>
            <img src="https://image.tmdb.org/t/p/w185/${element.poster_path}" alt="${element.title}">
            
            </li>
        `)
        });
        
        // details
        $('.detailBtn').on('click',function (target) {
         console.log('clicked',target.target.id);
         const detailId = target.target.id
         const detail = new XMLHttpRequest()
         detail.open('GET',`https://api.themoviedb.org/3/movie/${detailId}?api_key=24d863d54c86392e6e1df55b9a328755`)
         
         detail.send()

         detail.onload = function () {
            const dataD = JSON.parse(detail.response)
            console.log(dataD); 

            const genres=[]
            dataD.genres.forEach(ele=>{
                genres.push(ele.name)
            })

            $('.rlts').hide()
            $('.details').empty().show().append(`
            <br>
            <h2>${dataD.title}</h2>
            Budget: ${dataD.budget}
            <br>
            Genres: ${genres.join(', ')}
            <br>
            Overview: ${dataD.overview}
            <br>
            <img src="https://image.tmdb.org/t/p/w185/${dataD.poster_path}" alt="${dataD.title}">
            <br>
            <button id="backBtn">Back</button>
            `)

            $('#backBtn').on('click',function(){
                $('.details').hide()
                $('.rlts').show()
            })
         } // detail.onload
        }) // onclick ->.detailBtn


        // Page Controller
        $('.nextPageBtn').empty()
        $('.previousPageBtn').empty()

        if (data.total_pages > 1 && data.page < data.total_pages) {
            
            $('.nextPageBtn').append(`
            <button id="nextPage">Next Page ${page} / ${data.total_pages}</button>
            `)
        }

        if (data.total_pages > 1 && data.page > 1 && data.page <= data.total_pages) {

            $('.previousPageBtn').append(`
            <button id="previousPage">Previous Page ${page} / ${data.total_pages}</button>
            `)
        }
        
        $('#nextPage').on('click',function(){
            searchMoive(input,page+1)
        })

        $('#previousPage').on('click',function(){
            searchMoive(input,page-1)
        })
    }

}


$(function () {
    $('#searchBtn').on('click',function(){
        const userInput = $('#searchItem').val()
        searchMoive(userInput,1)
    
    })
})
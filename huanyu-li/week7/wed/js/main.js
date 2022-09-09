
const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/';
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';


$(function () {

  $('#query').focus();  // so we can test easily by pressing enter

  // EITHER a click of the button OR (yeesss) pressing enter in an input
  // will trigger the form submit
  $('#searchForm').off().on('submit', function (ev) {
    ev.preventDefault(); // stop the form from reloading the page
    const query = $('#query').val();
    getSearchResults(query);
  }); // form submit

}); // DOM ready

const getSearchResults = (queryText, queryPage = 1, isScroll = false) => {
  // console.log('getSearchResults(): ', queryText);

  // $('#results').html('<p>Loading results...</p>'); // replace old results with loading message

  // https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2f5ac274ecfac5a455f38745704ad084&text=ocean+coral&format=json&nojsoncallback=1)

  axios.get(FLICKR_BASE_URL, {
    params: {
      // These key-value pairs turn into querystring &key=value pairs
      method: 'flickr.photos.search',
      api_key: FLICKR_API_KEY,
      format: 'json',
      nojsoncallback: 1,
      text: queryText,
      page: queryPage
    }
  })
    .then(res => {
      console.log(res.data);
      const results = res.data.photos;
      const currentPage = results.page;
      const totalPages = results.pages;
      renderSearchResults(results, isScroll);

      renderPagesController(currentPage, totalPages, queryText)

      renderNextPage(currentPage, queryText)


    })
    .catch(err => {
      console.error('Error loading search results', err);
    });

  

}; // getSearchResults()


const renderSearchResults = (results, isScroll) => {
  // console.log('renderSearchResults():', results);
  if (!isScroll) {
    $('#results').empty(); // clear any previous results

  }

  results.photo.forEach(photo => {
    // console.log(photo);
    const imageUrl = generateImageUrl(photo);
    // console.log('photo:', imageUrl);
    const $img = $(`<img src="${imageUrl}" alt="${photo.title}" data-photoId="${photo.id}">`);
    $('#results').append($img);
    // $img.on('click', )
  });

  $('#results img').off().on('click', function (e) {
    e.preventDefault()
    const photoId = $(this).data("photoid")
    showDetails(photoId)
  })

  // console.log(results);
}; // renderSearchResults()


const generateImageUrl = (photo, size = 'q') => {
  return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
}; // generateImageUrl()

const renderPagesController = (currentPage, totalPages, queryText) => {
  // append buttons
  $('#pages').empty().append(`
    <br>
    <button class="position">Prev</button>
    <span></span>
    <button class="position">Next</button>
  `)

  // append numbers
  const t = Math.floor(currentPage / 10)

  for (let i = t * 10; i <= 10 + t * 10; i++) {
    if (i !== 0) {
      if (i === currentPage) {
        $('#pages span').append(`<a style="color:red">${currentPage}</a>\n`)
      } else {
        $('#pages span').append(`<a class="position">${i}</a>\n`)
      }
    }
  } //  for

  // handler
  $('.position').off().on('click', function () {
    console.log(this.innerText);

    let goToPage = currentPage
    if (this.innerText === 'Next') {
      goToPage += 1
    } else if (this.innerText === 'Prev') {
      goToPage -= 1
    } else {
      goToPage = Number(this.innerText)
    }
    console.log(goToPage, totalPages);

    if (goToPage > 0 && goToPage <= totalPages) {
      getSearchResults(queryText, goToPage, false)
    } // disable btn if it is out of range

  }) // handler
}

const showDetails = photoId => {
  axios.get(FLICKR_BASE_URL, {
    params: {
      // These key-value pairs turn into querystring &key=value pairs
      method: 'flickr.photos.getInfo',
      api_key: FLICKR_API_KEY,
      format: 'json',
      nojsoncallback: 1,
      photo_id: photoId
    }
  })
    .then(res => {
      $("#results").hide()
      console.log(res.data.photo);
      const photo = res.data.photo;
      const url = generateImageUrl(photo, 'b');
      $('#details').empty().append(`
    <img class="back" src="${url}" alt="${photo.title}" data-photoId="${photo.id}">
    <br>
    <h3>${photo.title._content}</h3>
    <em>Taken on: ${photo.dates.taken} By: ${photo.owner.realname}</em>
    <br>
    <button class="back">Back</button>
    `).show();

      $(".back").off().on('click', function () {
        $("#details").hide()
        $("#results").show()
      })

    })
    .catch(err => {
      console.error('Error showing photo details', err);
    });
}

const renderNextPage = (currentPage, queryText) => {

  // scroll down
  $(window).off().on('scroll', function () {
    let goToPage = currentPage
    if ($(window).scrollTop() + $(window).height() === $(document).height()) {
      console.log("Bottom");
      getSearchResults(queryText, goToPage + 1, true)
    }
  })
}


//Q1. show detail page will fire scroll down function
//Q2. show detail page can not return the original position
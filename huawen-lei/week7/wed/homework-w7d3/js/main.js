console.log('flickr search')

//https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2f5ac274ecfac5a455f38745704ad084&text=ocean+coral&format=json&nojsoncallback=1

const FLICKR_BASE_URL = "https://www.flickr.com/services/rest/";
const FLICKR_API_KEY = "2f5ac274ecfac5a455f38745704ad084";
const pageNum = 1;



$(function(){

  $('#query').focus();
  
  buttonGenerate(5);

  $('#searchForm').on('submit', function(ev){
    ev.preventDefault();
    const query = $('#query').val();
    getSearchResults(query, buttonGenerate(5));
  }); // form submit

  



}); // DOM ready


const getSearchResults = (queryText, pageNum) =>{

  $('#results').html(`<p>Loading results...</p>`);

  axios.get( FLICKR_BASE_URL, {
    params: {
      method: 'flickr.photos.search',
      api_key: FLICKR_API_KEY,
      format: 'json',
      nojsoncallback: 1,
      text: queryText,
      page: pageNum
    }
  }) // axios.get
    .then(res => {
      // console.log(res);
      renderSearchResults(res.data.photos);

      $(`#results img`).on('click', function(ev){
        const id = $(ev.target).data('imageid');
        console.log('ID:', id);
        getSearchResultsById(id);
      });

    }) // .then
    .catch(err => {
      console.error('Error loading search results', err);
    }); // .catch

}; // getSearchResults()


const renderSearchResults = (results) => {
  // console.log('renderSearchResults():', results);

  $('#results').empty();

  results.photo.forEach(item => {
    const imageUrl = generateImageUrl(item);
    // console.log('imageUrl:', imageUrl );
    const $img = $(`<img data-imageid="${item.id}" src="${imageUrl}" alt="${item.title}">`);
    $('#results').append($img);
  });

}; // renderSearchResults()



const generateImageUrl = (p) => {
  return `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`
}; // generateImageUrl()


const getSearchResultsById = (imageId) => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=2f5ac274ecfac5a455f38745704ad084&photo_id=${imageId}&format=json&nojsoncallback=1`)
    .then(res => {
      // console.log(`image details:`, res.data.photo);
      renderImageDetails(res.data.photo);
    })
    .catch(err => {
      console.error('Error loading movie details', err);
    });

}; // getSearchResultsById()


const renderImageDetails = (image) => {

  // const imageUrl = generateImageUrl(image);
  const imageUrl = `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_w.jpg`;
  const $img = $(`<img src="${imageUrl}" alt="${image.owner.username}">`);

  $('#show')
    .empty()
    .append($img)
    .append(`
      <p>Dates: ${image.dates.taken}</p>
      <p>Username: ${image.owner.username}</p>
      <p>Description: ${image.description._content}</p>
    `);
  
    $('#results').hide();
    $('#show').show();

}; // renderImageDetails()






const buttonGenerate = buttonNum => {
  for (i = 0; i < buttonNum; i++ ){
    $('#buttons').append(`<button data-buttonid="${i+1}">${i+1}</button>`);
  }

  $(`#buttons`).on('click', function(ev){
    const buttonid = $(ev.target).data('buttonid');
    console.log('ID:', buttonid);
    pageNum = buttonid;
  });

  return pageNum;

}; // buttonGenerate()










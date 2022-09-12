console.log('Mic check', Vue, axios);

// Flickr global variable
const FLICKR_API_KEY= "2f5ac274ecfac5a455f38745704ad084"

const FLICKR_BASE_URL = "https://www.flickr.com/services/rest/"


Vue.component('photo-info', {
    props: ['phTitle', 'taken', 'description', 'owner'],
    template:`
     <div>
        <h3>{{ phTitle }}</h3>
        <p> Taken: {{ taken }} by {{owner}}</p>
        <p><em> {{ taken }}</em></p>
     </div>
    `,
}); //Vue component

const app =  new Vue( {

   //Where does this Vue app attach to the DOM?

   el: '#app', //i.e attach to the div #app
   //what is the STATE of the app? 
   //i.e.  what is the colection of variables that changes as a user interacts with your app? In Vue, it is called 'data': 
    data: {
        showResults: true,
        queryText: '',
        page: 1,
        photos: {}, //store all search results
        singlePhoto: {}, //store single image info
        singlePhotoUrl : "" //store the Url for the single image

               
    },

    methods: {

        singleResult: function( photo ){
            //store the single image as an object
            //need to use the other axios to store photo data
            //generate a larger url
            this.singlePhotoUrl = this.generateImageUrl(photo, 'b');
            this.singlePhoto = this.getSinglePhoto(photo.id)
        },

        toggleResults: function( photo ) {
           this.showResults = !this.showResults
           console.log('here', photo);
           this.singleResult( photo )

        },

        hoverHandler: function(){
            this.message = 'hover'
        },

        getSearchResults: function(){
            axios.get( FLICKR_BASE_URL, {
                params:{ //Axios will use this object to add the params
                    api_key: FLICKR_API_KEY,
                    method: 'flickr.photos.search',
                    format: 'json',
                    nojsoncallback: 1,
                    text: this.queryText,
                    page: this.page,
                    safe_search: 1,
                    per_page: 300
                }

            })
            .then (res => {

                this.photos = res.data.photos
                //hold on to the photo data in state
                
            })
            .catch ( err => {
                console.error('Error loading search results:', err);

            }) //end axios.get

        },//end getResults()

        getSinglePhoto: function (photoId) {
            axios.get( FLICKR_BASE_URL, {
                params:{ //Axios will use this object to add the params
                    api_key: FLICKR_API_KEY,
                    method: 'flickr.photos.getInfo',
                    format: 'json',
                    nojsoncallback: 1,
                    photo_id: photoId,
                
                }
                
            })
            .then( res => {
                //store the singlePhoto
                this.singlePhoto = res.data
                
        
            })
            
            .catch( err => {
                console.error('Error loading search results:', err);
            })
        },
        

        

        generateImageUrl: function( photo, size = 'q' ){
            return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`
        },

        moveUp: function() {
            this.page ++
            this.getSearchResults()
        },

        moveDown: function(){
            this.page --
            this.getSearchResults()
        }

        





    } // end methods

    
} ); //new Vue

window.onscroll = function(e){
    console.log(e.target);
    if(e.target.documentElement.scrollTop > e.target.documentElement.scrollTopMax - window.innerHeight){
        app.page++
        //throttle needed here
        app.getSearchResults();
      }
}
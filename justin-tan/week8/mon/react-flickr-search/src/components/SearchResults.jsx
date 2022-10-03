import React from 'react';
import axios from 'axios';

const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/';
const FLICKR_API_KEY  = '2f5ac274ecfac5a455f38745704ad084';

const generateImageUrl = (p) => {
    return `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`;
  }; // generateImageUrl()

class SearchResults extends React.Component {

    state = {
        resultPhotos: [],
        loading: true,
        error: null,
        photoId: ''
    }

    getSearchResults = (query) => {
        axios.get( FLICKR_BASE_URL, {
            params: {
            // These key-value pairs turn into querystring &key=value pairs
            method: 'flickr.photos.search',
            api_key: FLICKR_API_KEY,
            format: 'json',
            nojsoncallback: 1,
            text: query
            }
        })
        .then( res => {
            console.log(`resultPhotos:`, res.data.photos.photo);
            this.setState({resultPhotos: res.data.photos.photo})

        })
        .catch( err => {

        })
    }

    componentDidMount(){
        console.log('componentDidMount(): loading data with search query:', this.props.match.params.query)
        this.getSearchResults(this.props.match.params.query)

    }

    // componentWillUnmount(){
    //     console.log('componentWillUnmount()');
    // }

    shouldComponentUpdate(prevProps, prevState){
        console.log('shouldComponentUpdate()');
        return true // to prevent errors
    }

    componentDidUpdate(prevProps){

        console.log('componentDidUpdate(): prevProps:', prevProps.match.params.query )
        console.log('componentDidUpdate(): current.match:', this.props.match.params.query);

        if (this.props.match.params.query !== prevProps.match.params.query) {
            this.componentDidMount()
        }
        
    }

    handleClick = (id) => {
        // this.setState({photoId: ev.target.photoId})
        console.log(`image clicked with id:`, id);
        this.props.history.push(`/photo/${id}`)
    }

    render(){

        return(
            <div>
                <p>your search for {this.props.match.params.query}</p>

                {this.state.resultPhotos.map( p => <a onClick={() => this.handleClick(p.id)}><img src={ generateImageUrl(p) }/></a> )}
            </div>
        );

    }

}

export default SearchResults
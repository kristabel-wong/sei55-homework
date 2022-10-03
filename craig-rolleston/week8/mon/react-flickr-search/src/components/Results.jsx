
import React from 'react';

import axios from 'axios';


const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/';
const FLICKR_API_KEY  = '2f5ac274ecfac5a455f38745704ad084';

const generateImageUrl = (p) => {
    return `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`;
}; // generateImageUrl()

class Results extends React.Component {

    state = {
        
        resultPhotos: [], // the actual response data
        loading: true, // controls whether or not to show loading message
        error: null, // whether or not to show error message
        
    };
    
    performSearch = (query) => {

        console.log('FlickrSearch::performSearch()', query);

        // When you convert this into a Router-based project,
        // the search results page should be a distinct route,
        // which means as soon as it is mounted, you
        // should perform a search... i.e., the axios.get()
        // should be triggered within componentDidMount()
        
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
            console.log( 'response', res.data );
            console.log('test');
            
            this.setState({
                resultPhotos: res.data.photos.photo,
                loading: false,
            })
        })
        .catch( err => {
            console.log( 'Error loading results from API:', err );
            this.setState({ error: err });
        });

    }

    componentDidMount(){
        
        this.performSearch(this.props.match.params.query);
        // THIS IS THE PLACE TO LOAD API DATA
        console.log('componentDidMount() Loading data with query:', this.props.match.params.query);
        
    }
    

    render(){

        return (
            <div>
                <h2>Results</h2>
                <p>Here are your search results...</p>

                {/* <hr />

                <Search onSubmit={ this.performSearch } />

                <hr /> */}

                {this.state.resultPhotos.map( p => <img key={p.id} src={generateImageUrl(p)} alt={ p.title } /> )}
                
            </div>
            
            
        );

    }
} // class Home

export default Results;


import React from 'react';
import '../App.css';

import axios from 'axios';

import SearchForm from './SearchForm';
import SearchFormResults from './SearchFormResults';

import {Route, HashRouter as Router} from 'react-router-dom'; 

const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/';
const FLICKR_API_KEY  = '2f5ac274ecfac5a455f38745704ad084';


const generateImageUrl = (p) => {
  return `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`;
}; // generateImageUrl()

class FlickrSeach extends React.Component {

    // these three elements below are useful when doing Axios request:
    state = {
        resultPhotos: [], // the actual response data
        loading: true, // this controls whether or not to show loading message
        error: null, // whether or not to show error message
    }

    performSearch = (query) => {
        console.log(`FlickrSearch::performSearch()`,query);

        //  when you convert this into a Router-based project, 
        // the search results page should be a distinct route, 
        // which means as soon as it is mounted, you
        // should perform a serach ... ie. the axios.get()
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
    console.log('response:', res.data);
    this.setState({
        resultPhotos: res.data.photos.photo,
        loading: false,

    })

  })
  .catch( err =>{
    console.error('Error loading results from APT:', err);
    this.setState ({error: err}); 
  });

 }


    render(){

        // Handle the special case where there is an error
        // with an early return
        if ( this.state.error !== null){
            return <p>Sorry, there was an error loading your results. Try again. </p>
            // Neater , but stops us rendering ANY of the main template, including heading, search form, etc
        }

        return(
            <div className='App'> 
                <Router>
                <header>
                    <h1>Flickr Search</h1>
                    <hr />
                    {
                        //onSubmit like phoneHome (previous exercise)
                    }
                    
                    <Route component={() => <SearchForm onSubmit={this.performSearch}/>} />

                </header>
                     <Route exact path="/search/:query" component={SearchFormResults}/>


                {
                    // map out the search results which is stored in an array
                    this.state.resultPhotos.map( p => <img src={ generateImageUrl(p) } alt={ p.title }/>) 
                }
            </Router>
            </div>

        )

    }// render()
}

export default FlickrSeach;


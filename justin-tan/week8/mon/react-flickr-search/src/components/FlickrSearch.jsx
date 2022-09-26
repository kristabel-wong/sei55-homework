import React from 'react';
import '../App.css';
import axios from 'axios';
import SearchForm from './SearchForm';
import {Route, HashRouter as Router, Link} from 'react-router-dom'
import SearchResults from './SearchResults';
import PhotoDetails from './PhotoDetails';

// const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/';
// const FLICKR_API_KEY  = '2f5ac274ecfac5a455f38745704ad084';

// const generateImageUrl = (p) => {
//     return `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`;
//   }; // generateImageUrl()

class FlickrSearch extends React.Component {

    render(){

        // Handle the special case where there is an error with an early return
        // if(this.state.error !== null){
        //     return <p>Sorry, there was an error loading your results. Try again.</p>

        //     // Neater, but stop us rendering ANY of the main template, including heading, search form etc.
        // }

        return (
            <div className="App">
                <Router>
                    <header>
                        <h1>Flickr Search</h1>
                        <hr />

                        <Route component={SearchForm} />

                    </header>

                        <Route exact path="/search/:query" component={SearchResults} />
                        <Route exact path="/photo/:id" component={PhotoDetails} />

                </Router>
            </div>
        )

    }

} // class FlickrSearch

export default FlickrSearch
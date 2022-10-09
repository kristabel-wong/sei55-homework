import React from "react";
import '../App.css';
import axios from "axios";
import { Route, HashRouter as Router, Link } from 'react-router-dom';

import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";



class FlickrSearch extends React.Component {

    // state = {
    //     resultPhotos: [], // response data
    //     loading: true, // controls show loading message
    //     error: null, //  show error message?
    // }

    // performSearch = (query) => {

    //     console.log(`FlickrSearch::performSearch()`, query);

    //     // When converting to a Router based project
    //     // the search results page should be a distinct route,
    //     // which means as soon as it is mounted, you
    //     // should perform a search... i.e, the axios.get()
    //     // should be triggered within componentDidMount()

    //     axios.get(FLICKR_BASE_URL, {
    //         params: {
    //             // These key-value pairs turn into querystring &key=value pairs
    //             method: 'flickr.photos.search',
    //             api_key: FLICKR_API_KEY,
    //             format: 'json',
    //             nojsoncallback: 1,
    //             text: query
    //         }
    //     }).then(res => {
    //         console.log('response:', res.data);
    //         this.setState({
    //             resultPhotos: res.data.photos.photo,
    //             loading: false
    //         });
    //     }).catch(err => {
    //         console.log('Error loading results fromAPI:', err);
    //         this.setState({ error: err });
    //     })
    // }

    render() {
        return (
            <div className="App">
                <Router>

                    <header>
                        <h1>Flickr Search</h1>
                        <hr />

                        {/* <SearchForm onSubmit={this.performSearch} /> */}
                        <Route component={SearchForm} />
                    </header>
                    <Route exact path="/search/:query" component={SearchResults} />
                    {/* {
                        this.state.resultPhotos.map(p => <img src={generateImageUrl(p)} alt={p.title} />)
                    } */}

                </Router>
            </div>
        );
    }

} // class FlickrSearch

export default FlickrSearch
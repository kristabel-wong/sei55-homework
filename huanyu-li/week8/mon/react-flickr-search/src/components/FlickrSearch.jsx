import React from "react";
import '../App.css'
import SearchForm from "./SearchForm";
import axios from "axios";
import { Route, HashRouter as Router, Link } from "react-router-dom"


const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/';
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';

const generateImageUrl = (p) => {
    return `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`;
}; // generateImageUrl()


class FlickrSearch extends React.Component {

    state = {
        resultPhotos: [],
        loading: true,
        error: null,

    }

    performSearch = (query) => {
        console.log('performSeach:', query);

        axios.get(FLICKR_BASE_URL, {
            params: {
                // These key-value pairs turn into querystring &key=value pairs
                method: 'flickr.photos.search',
                api_key: FLICKR_API_KEY,
                format: 'json',
                nojsoncallback: 1,
                text: query
            }
        })
            .then(res => {
                console.log(res);
                this.setState({
                    resultPhotos: res.data.photos.photo,
                    loading: false
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({ error: err })
            })


    }



    render() {

        if (this.state.error !== null) {
            return (
                <p>Error</p>
            )
        }

        return (
            <div className="App">
                <Router>
                    <header>
                        <h1>Flickr Search</h1>
                        <hr />

                        <SearchForm onSubmit={this.performSearch} />
                    </header>

                    {
                        this.state.resultPhotos.map(p =>
                            <img src={generateImageUrl(p)} alt={p.title} />
                        )
                    }

                </Router>
            </div>
        )
    }
}

export default FlickrSearch
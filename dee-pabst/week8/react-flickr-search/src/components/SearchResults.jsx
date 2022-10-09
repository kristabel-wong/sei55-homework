import React from "react";
import axios from "axios";

const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/';
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';

const generateImageUrl = (p) => {
    return `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`;
}; // generateImageUrl()

class SearchResults extends React.Component {

    state = {
        resultPhotos: [], // response data
        loading: true, // controls show loading message
        error: null, //  show error message?
    }

    performSearch = (query) => {

        console.log(`FlickrSearch::performSearch()`, query);

        // When converting to a Router based project
        // the search results page should be a distinct route,
        // which means as soon as it is mounted, you
        // should perform a search... i.e, the axios.get()
        // should be triggered within componentDidMount()

        axios.get(FLICKR_BASE_URL, {
            params: {
                // These key-value pairs turn into querystring &key=value pairs
                method: 'flickr.photos.search',
                api_key: FLICKR_API_KEY,
                format: 'json',
                nojsoncallback: 1,
                text: query
            }
        }).then(res => {
            console.log('response:', res.data);
            this.setState({
                resultPhotos: res.data.photos.photo,
                loading: false
            });
        }).catch(err => {
            console.log('Error loading results fromAPI:', err);
            this.setState({ error: err });
        })
    }

    // mounting means 'added to the DOM'
    componentDidMount() {
        console.log(`componentDidMount() - FIRED with query: ${this.props.match.params.query}`);
        this.performSearch(this.props.match.params.query);
    }

    render() {
        //Handle special case - error - early return
        if (this.state.error !== null) {
            return <p>Whoops error loading results, please try again</p>
        }
        return (
            <div><h3>{this.props.match.params.query}</h3>
                {
                    this.state.resultPhotos.map(p => <img src={generateImageUrl(p)} alt={p.title} key={p.id} />)
                }

            </div>
        );
    } // render()

} // class SearchResults

export default SearchResults;
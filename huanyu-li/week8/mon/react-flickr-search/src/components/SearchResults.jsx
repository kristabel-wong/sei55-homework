import React from "react";
import axios from "axios";

const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/';
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';

const generateImageUrl = (p, size = 'q') => {
    return `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_${size}.jpg`;
}; // generateImageUrl()

class SearchResults extends React.Component {

    // this.props.match.params.query

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

    componentDidMount() {
        console.log('Mounted');
        this.performSearch(this.props.match.params.query)
    }

    componentWillUnmount() {
        console.log('Unmounted');
    }

    componentDidUpdate(prevProps) {

        if (prevProps.match.params.query !== this.props.match.params.query) {
            this.performSearch(this.props.match.params.query)
        }
        // 
    }

    handleClick = (p) => {
        console.log('clicked', p);
        this.props.history.push(`/details/${p.id}`)
    }

    render() {
        if (this.state.error !== null) {
            return (
                <p>Error</p>
            )
        }

        return (
            <div>
                {
                    this.state.resultPhotos.map(p =>
                        <img key={p.id} src={generateImageUrl(p)} alt={p.title} onClick={() => { this.handleClick(p) }} />
                    )
                }
            </div>
        )
    }
}

export default SearchResults
import React from "react";

import axios from "axios";

const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/';
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';

const generateImageUrl = (p, size = 'b') => {
    return `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_${size}.jpg`;
}; // generateImageUrl()



class Details extends React.Component {

    state = {
        photo: {}
    }

    performDetailSearch = (query) => {
        console.log('performDetailSearch:', query);

        axios.get(FLICKR_BASE_URL, {
            params: {
                // These key-value pairs turn into querystring &key=value pairs
                method: 'flickr.photos.getInfo',
                api_key: FLICKR_API_KEY,
                format: 'json',
                nojsoncallback: 1,
                photo_id: query
            }
        })
            .then(res => {
                // console.log(res.data.photo.title._content);
                this.setState({
                    photo: res.data.photo
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({ error: err })
            })
    }

    componentDidMount() {
        console.log('Mounted');
        this.performDetailSearch(this.props.match.params.id)

    }

    componentWillUnmount() {
        console.log('Unmounted');

    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.performDetailSearch(this.props.match.params.id)
        }
        // 
    }

    render() {
        return (
            <div>
                <strong>Title:{console.log(this.state.photo.title)} </strong>
                <img src={generateImageUrl(this.state.photo)} alt={this.state.photo.id} />
               
            </div>
        )
    }
}

export default Details
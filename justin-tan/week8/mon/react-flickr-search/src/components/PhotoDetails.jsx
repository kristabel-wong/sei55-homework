import React from 'react'
import axios from 'axios'

const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/';
const FLICKR_API_KEY  = '2f5ac274ecfac5a455f38745704ad084';

class PhotoDetails extends React.Component {

    generateShowImageUrl = (p) => {
        return `https://live.staticflickr.com/${p.photo.server}/${p.photo.id}_${p.photo.secret}_z.jpg`
    }

    getPhotoDetails = (id) => {
        axios.get( FLICKR_BASE_URL, {
            params: {
                method: 'flickr.photos.getInfo',
                api_key: FLICKR_API_KEY,
                format: 'json',
                nojsoncallback: 1,
                photo_id: id
            }
        })
    }

    render(){

        return(
            <div>
                <p>photo description here with id {this.props.match.params.id}</p>

            </div>
        )
    }
}

export default PhotoDetails
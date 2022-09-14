import React from "react";
import FlickrSearch from "./FlickrSearch";

const generateImageUrl = (p) => {
    return `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`;
  }; // generateImageUrl()

  



class FlickrSearchResults extends React.Component {

    // state = {
    //     photoResults: this.props.photoResults
    // }
    componentDidMount(){
        //here React will run it at the appropriate time.
        //"Mounting" means adding to the DOM
        //This is thge place to load API data
        console.log('ComponentDidMount: ', this.props);
    
    }


    render(){

        return(
            <div className="results">
               

            {
                    
                    this.props.photoResults.map(p => <img src={ generateImageUrl(p)} alt={p.title} />)
                }
            
            </div>

        )


    }

}

export default FlickrSearchResults
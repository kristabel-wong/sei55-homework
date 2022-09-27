import React from "react";
import '../App.css';
import SearchForm from './SearchForm'
import axios from 'axios';
import {Route, HashRouter as Router, Link} from 'react-router-dom'
import FlickrSearchResults from "./FlickrSearchResults";

const FLICKR_API_KEY= "2f5ac274ecfac5a455f38745704ad084"
const FLICKR_BASE_URL = "https://www.flickr.com/services/rest/"




class FlickrSearch extends React.Component{



    state = {
        resultPhotos: [],
        loading: false, //this controls whether or not to show a loading message
        error: null //axios catch


    };

    performSearch = ( query ) => {
        console.log('FlickrSearch::performSearch', query);
        console.log(`New route should be #/procedures/search/${query}`);
        this.props.history.push(`flickr/search/${query}`)

        //when you convert this into a router based project, the search results page
        //should be a distninct route,
        //which means as soon as it is mouted, you should perform a search
        //i.e., the axios.get() should be triggered withing componenntDidMount()
        

        axios.get( FLICKR_BASE_URL, {
            params:{ //Axios will use this object to add the params
                api_key: FLICKR_API_KEY,
                method: 'flickr.photos.search',
                format: 'json',
                nojsoncallback: 1,
                text: query
            }
            
        })
        .then( res => {
            this.setState({

                resultPhotos: res.data.photos.photo,
                loading: false
                
            
            });
        }) 

        .catch( err=> {
            this.setState({ error: err});
            console.log('Error loading results from API', err);
        })
        

    }

    render (){

        if( this.state.error !== null){
            return <p>There was an error loading this page. Try again</p>
        }

        return(

            <div className="App">
                <Router>
                    <header>
                        <h1>FlickrSearch</h1>
                        <hr />

                        <SearchForm  onSubmit={ this.performSearch }/>

                      

                    </header>
                   

                    <FlickrSearchResults photoResults = {this.state.resultPhotos} />
                    

               </Router>
            </div>
        )


    }
} // class FlickrSearch


export default FlickrSearch
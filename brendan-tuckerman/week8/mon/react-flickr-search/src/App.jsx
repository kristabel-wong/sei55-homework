import React from 'react';
import './App.css';
import {Route, HashRouter as Router, Link} from 'react-router-dom'
import FlickrSearch from './components/FlickrSearch';
import FlickrSearchResults from './components/FlickrSearchResults';
import SearchForm from './components/SearchForm';


class App extends React.Component {

  render(){

    return(
      <div className="App">
        <Router>
          <header>
            
          
          <Route component={FlickrSearch} />
            

          </header>

         
          <Route exact path="/flickr/search/:query" component={FlickrSearchResults}/>
          


        </Router>



      </div>



    )


  }



}

export default App;

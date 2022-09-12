import React from "react";
import '../App.css'
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

import { Route, HashRouter as Router, Link } from "react-router-dom"


class FlickrSearch extends React.Component {

    render() {

        return (
            <div className="App">
                <Router>
                    <header>
                        <h1>Flickr Search</h1>
                        <hr />
                        <Route component={SearchForm} />
                        {/* <SearchForm onSubmit={this.performSearch} /> */}
                    </header>

                    {/* {
                        this.state.resultPhotos.map(p =>
                            <img src={generateImageUrl(p)} alt={p.title} />
                        )
                    } */}

                    <Route exact path="/search/:query" component={SearchResults} />

                </Router>
            </div>
        )
    }
}

export default FlickrSearch
import React from "react";

class SearchForm extends React.Component {

    state = {
        searchText: ''
    };

    handleChange = (event) => {
        this.setState({ searchText: event.target.value })
    }

    handleSubmit = (event) => {
        console.log(`Form submitted`, this.state.searchText);
        console.log(`New route should be: #/search/${this.state.searchText}`);
        event.preventDefault(); // stop submit from reloading page
        
        // Notify the parent component FlickrSearch
        // that a search has been submitted
        // this.props.onSubmit(this.state.searchText);

        this.props.history.push(`/search/${this.state.searchText}`);

    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <input type="text" />
                    <button>Search</button>
                </form>
            </div>
        );
    }

} // class SearchForm

export default SearchForm;
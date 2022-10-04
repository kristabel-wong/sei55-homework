
import React from "react";


class Search extends React.Component {

    state = {

        searchText: '',
    
    };

    handleChange = (event) => {
        this.setState({ searchText: event.target.value})
    }

    

    handleSubmit = (event) => {

        console.log('Form submitted:', this.state.searchText);
        event.preventDefault(); // stop form submit from reloading the page

        // Notify the parent component FlickrSearch that a
        // search has been submitted
        
        
        this.props.history.push(`/results/${this.state.searchText}`)
        
        // this.props.onSubmit( this.state.searchText );

    }

    render(){

        return (

            <div>
            
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" onChange={ this.handleChange }/>
                    <button>Search</button>
                </form>
             

                {/* <Search onSubmit={ this.performSearch } /> */}

                <br />
                <img className="searchimage" src="https://www.rd.com/wp-content/uploads/2018/02/25_Hilarious-Photos-that-Will-Get-You-Through-the-Week_280228817_Doty911.jpg?fit=640,800" alt="" />
                <br />
            
            </div>

        );

    }

}

export default Search;
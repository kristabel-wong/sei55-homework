import React from "react";

class SearchForm extends React.Component{

    

    state = {
      searchText:  ""  
    };

    handleChange = (event) => {
        this.setState({searchText: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // this.props.history.push(`/flickr/search/${this.state.searchText}`)
        this.props.onSubmit( this.state.searchText )
       
        
    }

    render(){

        return(
            <div>
                <form onSubmit={this.handleSubmit}>

                <input type="text" onChange={ this.handleChange }/>
                <button>Submit</button>

                </form>

                


            </div>

        );


    }


}

export default SearchForm
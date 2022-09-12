
import React from "react";



class SearchForm extends React.Component {

    state = {
        searchText: ''
    }

    handleChange = (e) => {
        this.setState({ searchText: e.target.value })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        console.log('Form submit:', this.state.searchText);

        this.props.onSubmit(this.state.searchText)
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>Search</button>
                </form>


            </div>
        )
    }
}

export default SearchForm

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

        // this.props.onSubmit(this.state.searchText)

        this.props.history.push(`/search/${this.state.searchText}`)
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
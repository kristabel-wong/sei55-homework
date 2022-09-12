
import React from 'react';


// const generateImageUrl = (p) => {
//     return `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`;
// }; // generateImageUrl()

class Results extends React.Component {


    componentDidMount(){
        
        // THIS IS THE PLACE TO LOAD API DATA
        console.log('componentDidMount() Loading data with query:', this.props.match.params.query);
        
    }
    

    render(){

        return (
            <div>
                <h2>Results</h2>
                <p>Here are your search results...</p>

                {/* <hr />

                <Search onSubmit={ this.performSearch } />

                <hr /> */}



                {/* {this.state.resultPhotos.map( p => <img key={p.id} src={generateImageUrl(p)} alt={ p.title } /> )} */}
            </div>
            
            
        );

    }
} // class Home

export default Results;
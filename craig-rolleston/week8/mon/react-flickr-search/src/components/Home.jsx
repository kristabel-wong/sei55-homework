
import React from "react";

class Home extends React.Component {

    render(){
        
        return (

            <div>
                <h2>Home</h2>
                <h3><em>Welcome to Flickr! Search and Explore</em></h3>
                <br />
                <img className="homeimage" src="https://i.pinimg.com/originals/00/2b/b1/002bb1c5aa0d0d36bb44585d1cd10cfb.jpg" alt="tropical paradise" />
                <br />
            </div>

        );

    }

} // class Home

export default Home;
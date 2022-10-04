import React from 'react'

// class Square extends React.Component {

    // define instance variable this.state
    // state = {
    //     value: null
    // };

    // render() {
    //     return (
    //         <button className="square" onClick={ () => this.props.onClick() }>
    //             {this.props.value}
    //         </button>

    //     )
    // }
    // }
    
function Square(props) {
    // console.log(`props:`,props, `props.value`, props.value);
    
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
    
}

export default Square
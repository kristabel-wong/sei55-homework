
import React from "react";


function Square(props){
    
    return (
        <button className= "square" onClick={props.onClick}>
            {props.value}
        </button>
    )
    
}

export default Square;

// class Square extends React.Component {

//     // state = {

//     //     value: null,

//     // };

//     render() {

//         return (

//             <button className="square" 
//                     onClick={() => this.props.onClick({value: 'X'})} >
//                     {this.props.value}
//             </button>

//         )

//     }


// }; // class Square


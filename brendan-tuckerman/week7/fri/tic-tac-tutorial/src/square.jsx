import React from 'react'

function Square( props ) {
    return (
      <button 
      className="square" 
      onClick={props.onClick}
      >
        {props.value}
      </button>
    );
  
  
  } //end Square

  export default Square;
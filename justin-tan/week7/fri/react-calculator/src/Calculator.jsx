import React from 'react';

class Calculator extends React.Component {

    // Define an instance variable "this.state"
    // which is special because it's a centralised 
    // storage area for any variables that might change
    // as our component is interacted with -
    // in particular, any variables we might want to 
    // show on the page
    state = {
        firstNum: 0, // default values for each piece of state
        secondNum: 0
    };

    // The old way
    // We need the equivalent of Ruby's "def initialise"
    // constructor(props){
    //     super(props)

    //     this.state = {

    //         firstNum: 0,
    //         secondNum: 0
    //     }

    // }

    // We MUST use arrow functions to define methods which are used
    // as event handlers, otherwise they get the wrong definition of 'this'
    updateFirstNum = ( ev ) => {
        console.log( ev.target.value );

        // To update a piece of state in React, we call a method provided
        // by the parent class Component, which is called this.setState()
        // The whole point of setState() is that it re-runs your render()
        // method, which in turn will cause any update state variables
        // used in your JSX to be updated in the DOM

        this.setState({
            firstNum: parseInt(ev.target.value) //update the specific state called 'firstNum'
        })
    }

    updateSecondNum = ( ev ) => {
        this.setState({
            secondNum: parseInt(ev.target.value)
        })
    }

    render(){

        console.log('render value of "this":', this);

        // const firstNum = this.state.firstNum
        // const secondNum = this.state.secondNum

        const {firstNum, secondNum} = this.state; //ES6 object destructuring

        return (
            <div>
                <h1>CalculatoReact</h1>

                <input type="text" placeholder="First number" onChange={ this.updateFirstNum } />

                <input type="text" placeholder="Second number" onChange={ this.updateSecondNum } />

                <br/>

                <p>Answer go here</p>
                <p>{ firstNum } + { secondNum } = { firstNum + secondNum }</p>
                <p>{ firstNum } - { secondNum } = { firstNum - secondNum }</p>
                <p>{ firstNum } / { secondNum } = { firstNum / secondNum }</p>
                <p>{ firstNum } * { secondNum } = { firstNum * secondNum }</p>


            </div>
        )

    } // render()

} // class calculator

export default Calculator;


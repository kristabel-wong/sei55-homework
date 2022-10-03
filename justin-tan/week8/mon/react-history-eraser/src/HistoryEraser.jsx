import React from 'react';
import Clickr from './Clickr';

class HistoryEraser extends React.Component{

    // State is the place where React asks you to keep all the related 
    // data about a component which might change as the component is
    // interacted with by a user -- or data that is e.g. loaded by
    // an AJAX request...
    // Any data which, when you update it, should be update on the DOM
    // needs to be in state BECAUSE when you call this.setState() React
    // will AUTOMATICALLY run your render() method to update the visible page.
    state = {
        historyStillExists: true,
    };

    checkClickCount = (count) => {
        console.log('in HistoryEraser::checkClickCount():', count);
        console.log('  value of this:', this);
        // this.setState()??

        if(count >= 5){
            this.setState({ historyStillExists: false})
        }

    } // checkClickCount()  

    render(){

        // let status; // scope of this variable is the whole render()

        // if (this.state.historyStillExists === true){
        //     status = <p>All is well, history still exists</p> // scope of this var is the if{}
        // } else {
        //     status = <p>You fool, you erased history!</p>
        // }

        return (
            <div>
                <h1>History Eraser YOU FOOL!!</h1>
                {   
                    // Inside JSX {} tags, YOU CAN ONLY USE EXPRESSIONS, NOT STATEMENTS
                    
                    this.state.historyStillExists === true 
                    ? 
                    <p>All is well</p> 
                    : 
                    <p>You erased history!</p>

                }

                <Clickr phoneHome={ this.checkClickCount }/>

            </div>
        );

    }

} // class HistoryEraser

export default HistoryEraser
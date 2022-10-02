import React from 'react';

class SearchFormResults extends React.Component{

    // React 'lifecycle' method:
    // If you give this method this exact name, React will
    // run it at the appropriate time: in this case, 
    // when the component is 'mounted', meaning 'added to 
    // the DOM'
    componentDidMount(){
        console.log('componentDidMount(): Loading data with query:', this.props.match.params.query)
    }

    // componentWillUnmount is for detaching any weird event 
    // handlers you might have attached to the DOM but which
    // are only relevent to this component;
    // you might also use it to 'unsubsribe' from any 
    // notifications or streaming data the component might
    // have started listing to;
    // i.e. any cleanup you need to do
    componentWillUnmount(){
        console.log('componentWillUnmount()')
    }

    // This runs after a prop or a state is updatged,
    // but before the render() - if you return
    // false from it, you can prevent the render
    shouldComponentUpdate(preProps, prevState){
        console.log('shouldComponentUpdate()');
        return true; // to prevent errors

    }

    // This runs AFTER a prop or state is update, and
    // after render() - you can use it to see if 
    // props have changed, i.e.earch query props from the router - i.e. do you need to 
    // trigger another AJAX axios.get() request?
    componentDidUpdate(prevProps, prevState){

    }


    render(){

        return (
            <div>
                <h3> Search results for "{this.props.match.params.query}"</h3>
            </div>

        );
    }




}

export default SearchFormResults;
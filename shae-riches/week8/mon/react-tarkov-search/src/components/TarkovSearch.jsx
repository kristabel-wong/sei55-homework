import React from 'react'
import '../App.css'

import axios from 'axios';
import { useQuery } from 'react-query';
import { Route, HashRouter as Router, Link, Switch } from 'react-router-dom';

import Home from './Home';
import SearchForm from './SearchForm';


const endpoint = "https://api.tarkov.dev/graphql";
const TASKS_QUERY = `
{
tasks{
    id
    name
}
}
`;

class TarkovSearch extends React.Component {
    
    state = {
        resultTasks: [],
        loading: true,
        error: null,
    }; // state

    performSearch = (TASKS_QUERY) =>{
        console.log(`TarkovSearch::performSearch()`, TASKS_QUERY);

        const { data, isLoading, error } = useQuery("tasks", () => {

            // Attempted to follow instructions form this link
            // to use graphQL API with axios, whilst also
            // utilising instructions given in class;
            // URL:
            // https://www.freecodecamp.org/news/5-ways-to-fetch-data-react-graphql/

            return axios({
                url: endpoint,
                method: "POST",
                data: {
                    query: TASKS_QUERY
                }
            }).then( response => {
                console.log(`Response:`, response.data.data );
                
                this.setState({
                    resultsTasks: response.data,
                    loading: false
                });
            }) // .then
            .catch( error => {
                console.log(`Error loading results from API:`, error );
                this.setState({error: error})
            }); // .catch
        
        }); // useQuery() 
        


    }

    render(){


        return(
            
            <div className="App">
            
                <Router>
                
                    <header>
                        
                        <h1>Tasks of Tarkov</h1>

                        <nav>
                            {'	'}|{'	'}
                            <Link to="/">Home</Link>
                            {'	'}|{'	'}
                            <Link to="/"></Link>
                            {'	'}|{'	'}
                        </nav>
                        
                        <SearchForm onSubmit={this.performSearch}/>

                    </header>

                    
                    <ul>
                        {
                        this.state.resultTasks.map( (task) => (
                        <li key={task.id}>{task.name}</li>
                        ))}
                    </ul> 
                    

                    {/* ROUTES */}
                    < Route exact path="/" component={ Home } />
                    < Route exact path="/tasks" component={ SearchForm } />

                    <footer>
                        <hr />
                        &copy; Tasks of Tarkov .2022
                    </footer>
                
                </Router>
            
            </div> // close div

        ); // return

    } // render()


} // class TarkovSearch



export default TarkovSearch;
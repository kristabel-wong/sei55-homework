import React from 'react';
import './App.css';

// Page components 







export default function App(){
  
  const {data, loading, error} = useQuery(TASKS_QUERY);

  if (loading) return "loading"
  if (error) return <p>Unfortuntately you have encountered and error, please try again</p>

  return (
  
    <div>
      
      <h1>Tasks of Tarkov</h1>

      <ul>
      
        {data.tasks.map((task) =>(
          <li key={task.id}>{task.name}</li>
        ))}
      
      </ul>

    </div>

  ) // return

}; // App()


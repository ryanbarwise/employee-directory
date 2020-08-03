import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';

function App() {

  const [employees, setEmployees] = useState(null);

  if(!employees){
      // fetch employees
      fetch('https://randomuser.me/api/?results=15').then(response => {
          return response.json()
      }).then(data => {
          setEmployees(data.results)
          console.log(data.results)
      })
  }

  const filterEmployess = (e) => {

  }
  
  return (
    <div className="App">
      <h1> Employee Directory</h1>
      <input placeholder="Search by Name"/> 
      {/* after input working, go through employees to filter criteria */}
      <Table employees={employees || []}/>
    </div>
  );
}

export default App;

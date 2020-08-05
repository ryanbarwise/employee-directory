import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';

class App extends Component {
  state = {
    unfilteredEmployees: [],
    filteredEmployees: []
  };

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=15')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          unfilteredEmployees: data.results, 
          filteredEmployees: data.results
         });
        console.log(data.results);
      });
  }

  filterBy = (event) => {
    const gender = event.target.innerText.toLowerCase();
    const filteredEmployees = this.state.unfilteredEmployees.filter(
      (employee) => employee.gender === gender
    );

    this.setState({ filteredEmployees }); //creates key, value of unfilteredEmployees //rerenders component
  };



  render() {
    return (
      <div className="App">
        <h1> Employee Directory</h1>

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            // onClick={() => this.filterBy("male")} when you need to pass an argument
            
          >
            Filter
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button" onClick={this.filterBy}>
              Male
            </button>
            <button class="dropdown-item" type="button" onClick={this.filterBy}>
              Female
            </button>
            
          </div>
        </div>

        <input placeholder="search by name" />
        {/* after input working, go through unfilteredEmployees to filter criteria */}
        <Table filteredEmployees={this.state.filteredEmployees || []} />
      </div>
    );
  }
}

export default App;

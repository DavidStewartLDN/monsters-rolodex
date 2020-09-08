import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
    
  }
  
/*  When this component mounts, e.g. puts the componet on the page. It calls whatever is inside the block of code */

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters: users}))
}

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }



  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
      <SearchBox 
        placeholder = 'Search Monsters'
        handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;

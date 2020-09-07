import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }
  
/*  When this component mounts, e.g. puts the componet on the page. It calls whatever is inside the block of code */

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters: users}))
}



  render() {
    return (
      <div className="App">
      <CardList name="Mike"> 
        {
          this.state.monsters.map(monster => <h1 key={monster.id}> {monster.name}</h1>)
        }
      </CardList>
      </div>
    );
  }
}

export default App;

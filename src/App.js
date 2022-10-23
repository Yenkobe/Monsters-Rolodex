import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();


    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users }
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  // render state what to show
  render() {
    return (
      <div className="App">
        {/* Adding the searching and filtering*/}
        <input
          className='search-box'
          type='search'
          placeholder='Search Monters'
          onChange={(event) => {
            console.log(event.target.value);
            // Its better to always lowercase everything.---> toLocaleLowerCase()
            const searchString = event.target.value.toLocaleLowerCase();
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(searchString);
            });

            this.setState(() => {
              return { monsters: filteredMonsters };
            })
          }}
        />
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

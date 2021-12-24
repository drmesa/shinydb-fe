import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    mons: []
  };

    async componentDidMount() {
      const response = await fetch('/mon/mons');
      const body = await response.json();
      this.setState({ mons: body, isLoading: false });
    }

  render() {
    const {mons, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2>Pokemon List</h2>
            <table>
              <tr>
                <th>National Dex Id</th>
                <th>Name</th>
              </tr>
              <tr>
              {mons.map(mon =>
                            <div key={mon.id}>
                              <td>{mon.dexId}</td>
                              <td>{mon.name}</td>
                            </div>
                          )}
              </tr>
            </table>

          </div>
        </header>
      </div>
    );
  }
}

export default App;






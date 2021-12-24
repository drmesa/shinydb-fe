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
        <body>
        <div className="App-intro">
        <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Pokemon</label>
                        <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput"
                          placeholder="Search by dex id or name"
                        />
                      </div>
          <h2>Pokemon List</h2>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>National Dex Id</th>
                <th>Name</th>
                <th>Regional Form</th>
                <th>Best Game</th>
                <th>Odds</th>
              </tr>
            </thead>
            <tbody>
              {mons.map(mon =>
                <tr>
                  <React.Fragment>
                    <td>{mon.dexId}</td>
                    <td>{mon.name}</td>
                    <td>{mon.form}</td>
                    <td>game</td>
                    <td>odds</td>
                  </React.Fragment>
                </tr>
              )}

            </tbody>
          </table>

        </div>
        </body>
      </div>
    );
  }
}

export default App;






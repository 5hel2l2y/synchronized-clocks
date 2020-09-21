import React, { Component } from 'react';
import './app.css';

import Analog from './components/Analog';
import Digital from './components/Digital';

class App extends Component {
  constructor() {
    super();

    this.state = {
      time: '4:34'
    };
  }

  handleTimeChange = (e, newTime) => {
    e.preventDefault();
    
    this.setState({
      time: newTime
    });
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1>Synchronized Clocks</h1>
        </header>

        {/* Analog */}
        <Analog time={this.state.time} handleTimeChange={this.handleTimeChange} />
        {/* Digital */}
        <Digital time={this.state.time} handleTimeChange={this.handleTimeChange}/>

        {/* Footer */}
      </div>
    );
  }
}

export default App;

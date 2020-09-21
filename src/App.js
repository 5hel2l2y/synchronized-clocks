import React, { Component } from 'react';
import './app.css';

import Analog from './components/Analog';
import Digital from './components/Digital';

class App extends Component {
  constructor() {
    super();

    this.state = {
      time: new Date().toLocaleTimeString(),
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),
    });
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
        <Digital time={this.state.time} hour={this.state.hour} minute={this.state.minute} second={this.state.second} handleTimeChange={this.handleTimeChange}/>

        {/* Footer */}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './app.scss';

import Analog from './components/Analog';
import Digital from './components/Digital';

class App extends Component {
  constructor() {
    super();

    this.state = {
      set: false,
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

  tick = () => {
    if(this.state.set) {
      const event = new Date();
      event.setHours(this.state.hour, this.state.minute, this.state.second);
      
      const live = new Date(event.getTime() + 1000);

      this.setState({
        hour: live.getHours(),
        minute: live.getMinutes(),
        second: live.getSeconds(),
      });
    } else {
      this.setState({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
      });
    }
  }

  handleTimeChange = (e, newTime) => {
    e.preventDefault();
    
    this.setState({
      set: true,
      hour: newTime.hourInput,
      minute: newTime.minuteInput,
      second: newTime.secondInput
    });
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <header>
            <h1>Synchronized Clocks</h1>
            <p>Try setting a time on the analog or digital clock.</p>
          </header>

          <Analog hour={this.state.hour} minute={this.state.minute} second={this.state.second}handleTimeChange={this.handleTimeChange} />
          <Digital hour={this.state.hour} minute={this.state.minute} second={this.state.second} handleTimeChange={this.handleTimeChange}/>
        </div>

        <footer>
          © <a href="http://https://5hel2l2y.github.io/" target="_blank" rel="noopener noreferrer">Sherry Yang</a>
        </footer>
      </div>
    );
  }
}

export default App;

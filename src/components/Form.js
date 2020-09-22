import React, { Component } from 'react';
import '../app.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      timeInput: '',
      hourInput: '',
      minuteInput: '',
      secondInput: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={e => this.props.handleTimeChange(e, this.state)}>
        <div>
          <label htmlFor="hourInput">Hour</label>:
          <label htmlFor="minuteInput">Minute</label>:
          <label htmlFor="secondInput">Second</label>
          <input type="number" id="hourInput" min="0" max="23" onChange={this.handleChange} />:<input type="number" id="minuteInput" min="0" max="59" onChange={this.handleChange} />:<input type="number" id="secondInput" min="0" max="59" onChange={this.handleChange} />
        </div>
        <button>Change Time</button>
      </form>
    );
  }
}

export default Form;
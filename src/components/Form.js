import React, { Component } from 'react';
import '../app.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      timeInput: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      timeInput: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={e => this.props.handleTimeChange(e, this.state.timeInput)}>
        <label htmlFor="newTime">Enter new time</label>
        <input type="text" id="newTime" onChange={this.handleChange} />
        <button>Change Time</button>
      </form>
    );
  }
}

export default Form;
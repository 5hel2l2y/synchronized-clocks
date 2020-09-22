import React from 'react';
import '../app.scss';

import Form from './Form';

const Analog = props => {
  const secondsStyle = {
    transform: `rotate(${props.second * 6}deg)`
  };
  const minutesStyle = {
    transform: `rotate(${props.minute * 6}deg)`
  };
  const hoursStyle = {
    transform: `rotate(${props.hour * 30}deg)`
  };

  return (
    <section className="clock">
      <h2>Analog</h2>
      <div className="analog">
        <div className={"dial seconds"} style={secondsStyle} />
        <div className={"dial minutes"} style={minutesStyle} />
        <div className={"dial hours"} style={hoursStyle} />
      </div>

      <Form handleTimeChange={props.handleTimeChange} />
    </section>
  );
}

export default Analog;
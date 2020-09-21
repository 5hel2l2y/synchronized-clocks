import React from 'react';
import '../app.css';

import Form from './Form';

const Analog = props => {
  return (
    <section className="clock">
      <h2>Analog</h2>
      <div className="analog"></div>
      <p>{props.time}</p>

      <Form handleTimeChange={props.handleTimeChange} />
    </section>
  );
}

export default Analog;
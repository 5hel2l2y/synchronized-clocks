import React from 'react';
import '../app.css';

import Form from './Form';

const Digital = props => {
  return (
    <section className="clock">
      <h2>Digital</h2>
      <div className="digital"></div>
      <p>{props.time}</p>

      <Form handleTimeChange={props.handleTimeChange} />
    </section>
  );
}

export default Digital;
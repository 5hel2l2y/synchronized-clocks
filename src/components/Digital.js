import React from 'react';
import '../app.scss';

import Form from './Form';

const Digital = props => {
  return (
    <section className="clock">
      <h2>Digital</h2>
      <div className="digital">
        <p>{props.hour}:{props.minute}:{props.second}</p>
      </div>

      <Form handleTimeChange={props.handleTimeChange} />
    </section>
  );
}

export default Digital;
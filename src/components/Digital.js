import React from 'react';
import '../app.css';

const Digital = props => {
  return (
    <section className="clock">
      <h2>Digital</h2>
      <div className="digital"></div>
      <p>{props.time}</p>
    </section>
  );
}

export default Digital;
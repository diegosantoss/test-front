import React from 'react';
import './index.css';

const Box = (props) => (
  <section className={`content_box ${props.addClass ? props.addClass : ''}`} >
    {props.children}
  </section>
);

export default Box;
import React from 'react';
import './index.css';

const Title = props => (
  <h2 className={`${props.addClass ? props.addClass : 'default_title'}`}>{props.title}</h2>
);

export default Title;
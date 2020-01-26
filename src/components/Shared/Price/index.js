import React from 'react';
import './index.css';

const Price = props => (
  <ins className={`${props.addClass ? props.addClass : 'default_title'}`}>{props.price}</ins>
)

export default Price;
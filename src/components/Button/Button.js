import React from 'react';
import './Button.css';

const Button = ({ variant = 'btn-primary', textValue }) => {
  return <button className={`btn ${variant}`}>{textValue}</button>;
};

export default Button;

import React from 'react';

const Button = ({ variant = 'btn-primary', textValue }) => {
  return <button className={`btn ${variant}`}>{textValue}</button>;
};

export default Button;

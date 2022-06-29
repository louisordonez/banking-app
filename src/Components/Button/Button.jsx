import React from 'react';

const Button = ({ variant = 'btn-primary', textValue, onClick }) => {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {textValue}
    </button>
  );
};

export default Button;

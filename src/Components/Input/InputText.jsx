import React from 'react';

const InputText = ({ label }) => {
  return (
    <div className="input-container">
      <div>
        {label}
        <div className="input-flex-container">
          <input type="text"></input>
        </div>
      </div>
    </div>
  );
};

export default InputText;

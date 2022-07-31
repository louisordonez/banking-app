import React from 'react';

const CreateUserButton = ({ textValue, onClick }) => {
  return (
    <button className="btn-create-user btn-primary" onClick={onClick}>
      {textValue}
    </button>
  );
};

export default CreateUserButton;

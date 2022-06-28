import React from 'react';

const InputText = () => {
  return (
    <div className='input-container'>
      <div>
          {`Enter amount`}
          <div className='amount-flex-container'>
            <span>₱</span><input></input>
          </div>
      </div>
    </div>
  );
}

export default InputText;

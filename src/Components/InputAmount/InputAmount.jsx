import React from 'react';

const InputAmount = () => {
  return (
    <div className='input-container'>
      <div>
          {`Enter amount`}
          <div className='amount-flex-container'>
            <span>₱</span><input type='text'></input>
          </div>
      </div>
    </div>
  );
}

export default InputAmount;

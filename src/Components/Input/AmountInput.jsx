import React from 'react';

const AmountInput = () => {
  return (
    <div className="input-container">
      <div>
        {`Enter amount`}
        <div className="input-flex-container">
          <span>₱</span>
          <input type="text"></input>
        </div>
      </div>
    </div>
  );
};

export default AmountInput;

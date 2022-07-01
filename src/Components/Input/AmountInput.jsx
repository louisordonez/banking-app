import React from 'react';

const AmountInput = () => {
  return (
    <div className="input-container">
      <div>
        {`Enter amount`}
        <div className="input-flex-container">
          <span>₱</span>
          <input type="number" step=".01"></input>
        </div>
      </div>
    </div>
  );
};

export default AmountInput;

import React from 'react';

const UserDepositForm = ({
  showDeposit,
  handleDeposit,
  depositAmountRef,
  handleDepositAmount,
  handleCloseDeposit,
}) => {
  return (
    <div style={{ display: `${showDeposit}` }}>
      <div className="modal center">
        <div className="modal-content center">
          <div className="modal-header">
            <div>
              <span>Deposit</span>
            </div>
          </div>
          <div className="modal-body">
            <form onSubmit={handleDeposit}>
              <div className="create-user-flex">
                <div>
                  <input
                    className="user-input-text"
                    data-amount=""
                    placeholder="Amount"
                    type="number"
                    step=".01"
                    min=".01"
                    onChange={handleDepositAmount}
                    ref={depositAmountRef}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <input
                  className="btn-small btn-cancel"
                  onClick={handleCloseDeposit}
                  type="button"
                  value="Cancel"
                />
                <input
                  className="btn-small btn-primary"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDepositForm;

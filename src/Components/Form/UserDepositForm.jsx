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
                <div style={{ width: `100%` }}>
                  <input
                    className="user-input-text"
                    style={{ width: `100%` }}
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
                <div className="create-user-flex">
                  <input
                    className="btn-small btn-primary btn-modal"
                    type="submit"
                    value="Deposit"
                  />
                </div>
                <div className="create-user-flex flex-center">
                  <input
                    className="btn-small btn-cancel btn-modal-cancel"
                    onClick={handleCloseDeposit}
                    type="button"
                    value="Cancel"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDepositForm;

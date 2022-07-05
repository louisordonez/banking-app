import React from 'react';

const DepositForm = ({
  showDeposit,
  handleDeposit,
  accountNumber,
  firstName,
  lastName,
  balance,
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
                    placeholder="Balance"
                    type="number"
                    defaultValue={accountNumber}
                    disabled
                  />
                </div>
              </div>
              <div className="create-user-flex">
                <div>
                  <input
                    className="user-input-text"
                    placeholder="First Name"
                    type="text"
                    defaultValue={firstName}
                    disabled
                  />
                </div>
                <div>
                  <input
                    className="user-input-text"
                    placeholder="Last Name"
                    type="text"
                    defaultValue={lastName}
                    disabled
                  />
                </div>
              </div>
              <div className="create-user-flex">
                <div>
                  <input
                    className="user-input-text"
                    placeholder="Balance"
                    type="number"
                    defaultValue={balance}
                    disabled
                  />
                </div>
                <div>
                  <input
                    className="user-input-text"
                    data-amount=""
                    placeholder="Amount"
                    type="number"
                    step=".01"
                    min=".01"
                    ref={depositAmountRef}
                    onChange={handleDepositAmount}
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

export default DepositForm;

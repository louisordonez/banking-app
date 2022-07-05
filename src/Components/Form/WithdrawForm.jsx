import React from 'react';

const WithdrawForm = ({
  showWithdraw,
  handleWithdraw,
  accountNumber,
  firstName,
  lastName,
  balance,
  withdrawAmount,
  handleWithdrawAmount,
  handleCloseWithdraw,
}) => {
  return (
    <div style={{ display: `${showWithdraw}` }}>
      <div className="modal center">
        <div className="modal-content center">
          <div className="modal-header">
            <div>
              <span>Withdraw</span>
            </div>
          </div>
          <div className="modal-body">
            <form onSubmit={handleWithdraw}>
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
                    defaultValue={withdrawAmount}
                    onChange={handleWithdrawAmount}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <input
                  className="btn-small btn-cancel"
                  onClick={handleCloseWithdraw}
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

export default WithdrawForm;

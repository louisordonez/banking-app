import React from 'react';

const UserWithdrawForm = ({
  showWithdraw,
  handleWithdraw,
  withdrawAmountRef,
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
                    data-amount=""
                    placeholder="Amount"
                    type="number"
                    step=".01"
                    min=".01"
                    onChange={handleWithdrawAmount}
                    ref={withdrawAmountRef}
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

export default UserWithdrawForm;

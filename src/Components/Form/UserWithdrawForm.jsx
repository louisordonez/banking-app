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
                <div style={{ width: `100%` }}>
                  <input
                    className="user-input-text"
                    style={{ width: `100%` }}
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
                <div className="create-user-flex">
                  <input
                    className="btn-small btn-primary btn-modal"
                    type="submit"
                    value="Withdraw"
                  />
                </div>
                <div className="create-user-flex flex-center">
                  <input
                    className="btn-small btn-cancel btn-modal-cancel"
                    onClick={handleCloseWithdraw}
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

export default UserWithdrawForm;

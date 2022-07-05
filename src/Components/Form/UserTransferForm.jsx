import React from 'react';

const UserTransferForm = ({
  showTransfer,
  handleTransfer,
  handleTransferAccountNumber,
  transferAccountNumber,
  handleTransferAmount,
  transferAmount,
  handleCloseTransfer,
}) => {
  return (
    <div style={{ display: `${showTransfer}` }}>
      <div className="modal center">
        <div className="modal-content center">
          <div className="modal-header">
            <div>
              <span>Transfer</span>
            </div>
          </div>
          <div className="modal-body">
            <form onSubmit={handleTransfer}>
              <div className="create-user-flex">
                <div>
                  <input
                    className="user-input-text"
                    placeholder="Account Number"
                    type="number"
                    pattern="[0-9]*"
                    defaultValue={transferAccountNumber}
                    onChange={handleTransferAccountNumber}
                    required
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
                    defaultValue={transferAmount}
                    onChange={handleTransferAmount}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <input
                  className="btn-small btn-cancel"
                  onClick={handleCloseTransfer}
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

export default UserTransferForm;

import React from 'react';

const TransferForm = ({
  showTransfer,
  handleTransfer,
  fullName,
  balance,
  handleTransferAccountNumber,
  transferAccountNumberRef,
  handleTransferAmount,
  transferAmountRef,
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
                    placeholder="Name"
                    type="text"
                    defaultValue={fullName}
                    disabled
                  />
                </div>
                <div>
                  <input
                    className="user-input-text"
                    placeholder="Balance"
                    type="number"
                    step=".01"
                    defaultValue={balance}
                    disabled
                  />
                </div>
              </div>
              <div className="create-user-flex">
                <div>
                  <input
                    className="user-input-text"
                    placeholder="Account Number"
                    type="number"
                    pattern="[0-9]*"
                    onChange={handleTransferAccountNumber}
                    ref={transferAccountNumberRef}
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
                    onChange={handleTransferAmount}
                    ref={transferAmountRef}
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

export default TransferForm;

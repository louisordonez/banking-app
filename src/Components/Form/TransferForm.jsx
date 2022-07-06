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
                <span className="user-modal-text user-modal-text-margin user-modal-text-info">
                  Name
                  <p className="user-modal-text">{fullName}</p>
                </span>
              </div>
              <div className="create-user-flex">
                <span className="user-modal-text user-modal-text-margin user-modal-text-info">
                  Balance
                  <p className="user-modal-text">{balance}</p>
                </span>
              </div>
              <div className="create-user-flex">
                <div style={{ width: '100%' }}>
                  <p className="user-modal-label">Account Number</p>
                  <input
                    className="user-input-text"
                    style={{ width: '100%' }}
                    type="number"
                    pattern="[0-9]*"
                    ref={transferAccountNumberRef}
                    onChange={handleTransferAccountNumber}
                    required
                  />
                </div>
              </div>
              <div className="create-user-flex">
                <div style={{ width: '100%' }}>
                  <p className="user-modal-label">Amount</p>
                  <input
                    className="user-input-text"
                    style={{ width: '100%' }}
                    data-amount=""
                    type="number"
                    step=".01"
                    min=".01"
                    ref={transferAmountRef}
                    onChange={handleTransferAmount}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <div className="create-user-flex">
                  <input
                    className="btn-small btn-primary btn-modal"
                    type="submit"
                    value="Transfer"
                  />
                </div>
                <div className="create-user-flex flex-center">
                  <input
                    className="btn-small btn-cancel btn-modal-cancel"
                    onClick={handleCloseTransfer}
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

export default TransferForm;

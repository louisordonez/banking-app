import React from 'react';

const ViewTransactionModal = ({ showTransactionDetails, transactionList }) => {
  return (
    <div style={{ display: 'block' }}>
      <div className="modal center">
        <div className="modal-content center">
          <div className="modal-header">
            <div>
              <span>Transaction</span>
            </div>
          </div>
          <div className="modal-body">
            <form onSubmit>
              <div className="create-user-flex">
                <span className="user-modal-text user-modal-text-margin user-modal-text-info">
                  Name
                  <p className="user-modal-text">
                    {} {}
                  </p>
                </span>
              </div>
              <div className="create-user-flex">
                <span className="user-modal-text user-modal-text-margin user-modal-text-info">
                  Account Number
                  <p className="user-modal-text">{}</p>
                </span>
              </div>
              <div className="create-user-flex">
                <span className="user-modal-text user-modal-text-margin user-modal-text-info">
                  Balance
                  <p className="user-modal-text">{}</p>
                </span>
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

export default ViewTransactionModal;

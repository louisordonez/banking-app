import React from 'react';

const ViewTransactionModal = ({
  showTransactionDetails,
  handleCloseTransaction,
  referenceNumber,
  accountNumber,
  email,
  firstName,
  lastName,
  date,
  description,
  amount,
  prevBalance,
  currentBalance,
}) => {
  return (
    <div style={{ display: `${showTransactionDetails}` }}>
      <div className="modal center">
        <div className="modal-content center">
          <div className="modal-header">
            <div>
              <span>Transaction</span>
            </div>
          </div>
          <div className="modal-body">
            <div className="create-user-flex">
              <span className="user-modal-text user-modal-text-margin user-modal-text-info">
                Reference Number
                <p className="user-modal-text">{referenceNumber}</p>
              </span>
            </div>
            <div className="create-user-flex">
              <span className="user-modal-text user-modal-text-margin user-modal-text-info">
                Date
                <p className="user-modal-text">{date}</p>
              </span>
            </div>
            <div className="create-user-flex">
              <span className="user-modal-text user-modal-text-margin user-modal-text-info">
                Account Number
                <p className="user-modal-text">{accountNumber}</p>
              </span>
            </div>
            <div className="create-user-flex">
              <span className="user-modal-text user-modal-text-margin user-modal-text-info">
                Name
                <p className="user-modal-text">
                  {firstName} {lastName}
                </p>
              </span>
            </div>
            <div className="create-user-flex">
              <span className="user-modal-text user-modal-text-margin user-modal-text-info">
                Description
                <p className="user-modal-text">{description}</p>
              </span>
            </div>
            <div className="create-user-flex">
              <span className="user-modal-text user-modal-text-margin user-modal-text-info">
                Amount
                <p className="user-modal-text">{amount}</p>
              </span>
            </div>
            <div className="create-user-flex">
              <span className="user-modal-text user-modal-text-margin user-modal-text-info">
                Previous Balance
                <p className="user-modal-text">{prevBalance}</p>
              </span>
            </div>
            <div className="create-user-flex">
              <span className="user-modal-text user-modal-text-margin user-modal-text-info">
                Current Balance
                <p className="user-modal-text">{currentBalance}</p>
              </span>
            </div>
            <div className="modal-footer">
              <div className="create-user-flex flex-center">
                <input
                  className="btn-small btn-cancel btn-modal-cancel"
                  type="button"
                  value="Close"
                  onClick={handleCloseTransaction}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTransactionModal;

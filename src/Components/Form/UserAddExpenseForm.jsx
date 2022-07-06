import React from 'react';

const UserAddExpenseForm = ({
  showExpense,
  handleExpense,
  handleCloseExpense,
}) => {
  return (
    <div style={{ display: `${showExpense}` }}>
      <div className="modal center">
        <div className="modal-content center">
          <div className="modal-header">
            <div>
              <span>Add Expense</span>
            </div>
          </div>
          <div className="modal-body">
            <form onSubmit={handleExpense}>
              <div className="create-user-flex">
                <div style={{ width: `100%` }}>
                  <p className="user-modal-label">Item</p>
                  <input
                    className="user-input-text"
                    style={{ width: `100%` }}
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="create-user-flex">
                <div style={{ width: `100%` }}>
                  <p className="user-modal-label">Amount</p>
                  <input
                    className="user-input-text"
                    style={{ width: `100%` }}
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
                    value="Add Expense"
                  />
                </div>
                <div className="create-user-flex flex-center">
                  <input
                    className="btn-small btn-cancel btn-modal-cancel"
                    onClick={handleCloseExpense}
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

export default UserAddExpenseForm;

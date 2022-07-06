import React from 'react';

const UserAddExpenseForm = ({
  showAddExpense,
  handleAddExpense,
  handleCloseAddExpense,
  expenseItemAddRef,
  expenseAmountAddRef,
}) => {
  return (
    <div style={{ display: `${showAddExpense}` }}>
      <div className="modal center">
        <div className="modal-content center">
          <div className="modal-header">
            <div>
              <span>Add Expense</span>
            </div>
          </div>
          <div className="modal-body">
            <form onSubmit={handleAddExpense}>
              <div className="create-user-flex">
                <div style={{ width: `100%` }}>
                  <p className="user-modal-label">Item</p>
                  <input
                    className="user-input-text"
                    style={{ width: `100%` }}
                    type="text"
                    ref={expenseItemAddRef}
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
                    ref={expenseAmountAddRef}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <div className="create-user-flex">
                  <input
                    className="btn-small btn-primary btn-modal"
                    type="submit"
                    value="Add"
                  />
                </div>
                <div className="create-user-flex flex-center">
                  <input
                    className="btn-small btn-cancel btn-modal-cancel"
                    onClick={handleCloseAddExpense}
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

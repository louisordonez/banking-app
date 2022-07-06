import React from 'react';

const UserEditExpenseForm = ({
  showEditExpense,
  handleEditExpense,
  handleCloseEditExpense,
  expenseItemRef,
  expenseAmountRef,
}) => {
  return (
    <div style={{ display: `${showEditExpense}` }}>
      <div className="modal center">
        <div className="modal-content center">
          <div className="modal-header">
            <div>
              <span>Edit Expense</span>
            </div>
          </div>
          <div className="modal-body">
            <form onSubmit={handleEditExpense}>
              <div className="create-user-flex">
                <div style={{ width: `100%` }}>
                  <p className="user-modal-label">Item</p>
                  <input
                    className="user-input-text"
                    style={{ width: `100%` }}
                    type="text"
                    ref={expenseItemRef}
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
                    ref={expenseAmountRef}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <div className="create-user-flex">
                  <input
                    className="btn-small btn-primary btn-modal"
                    type="submit"
                    value="Edit"
                  />
                </div>
                <div className="create-user-flex flex-center">
                  <input
                    className="btn-small btn-cancel btn-modal-cancel"
                    onClick={handleCloseEditExpense}
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

export default UserEditExpenseForm;

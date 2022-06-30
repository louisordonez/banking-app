import React from 'react';

const EditUserForm = ({
  showEdit,
  handleEditSubmit,
  accountNumberEditRef,
  firstNameEditRef,
  lastNameEditRef,
  birthdateEditRef,
  genderEditRef,
  emailEditRef,
  passwordEditRef,
  balanceEditRef,
  handleCloseEdit,
}) => {
  return (
    <div style={{ display: `${showEdit}` }}>
      <div className="modal center">
        <div className="modal-content center">
          <div className="modal-header">
            <div>
              <span>Edit User</span>
            </div>
          </div>
          <div className="modal-body">
            <form onSubmit={handleEditSubmit}>
              <div className="create-user-flex">
                <div>
                  <input
                    className="user-input-text"
                    placeholder="Account Number"
                    type="number"
                    ref={accountNumberEditRef}
                    disabled
                  />
                </div>
              </div>
              <div className="create-user-flex">
                <div>
                  <input
                    className="user-input-text"
                    placeholder="First Name"
                    type="text"
                    ref={firstNameEditRef}
                    required
                  />
                </div>
                <div>
                  <input
                    className="user-input-text"
                    placeholder="Last Name"
                    type="text"
                    ref={lastNameEditRef}
                    required
                  />
                </div>
              </div>
              <div className="create-user-flex">
                <div>
                  <input
                    className="user-input-text"
                    placeholder="Birthdate"
                    type="date"
                    ref={birthdateEditRef}
                    required
                  />
                </div>
                <div>
                  <select
                    className="user-input-text"
                    ref={genderEditRef}
                    required
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
              <div className="create-user-flex">
                <div>
                  <input
                    className="user-input-text"
                    placeholder="Email"
                    type="email"
                    ref={emailEditRef}
                    required
                  />
                </div>
                <div>
                  <input
                    className="user-input-text"
                    placeholder="Password"
                    type="password"
                    ref={passwordEditRef}
                    required
                  />
                </div>
              </div>
              <div className="create-user-flex">
                <div>
                  <input
                    className="user-input-text"
                    placeholder="Balance"
                    type="number"
                    step=".01"
                    ref={balanceEditRef}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <input
                  className="btn-small btn-cancel"
                  onClick={handleCloseEdit}
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

export default EditUserForm;

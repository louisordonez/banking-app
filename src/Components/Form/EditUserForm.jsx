import React from 'react';

const EditUserForm = ({
  showEdit,
  handleEditUser,
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
            <form onSubmit={handleEditUser}>
              <div className="create-user-flex">
                <div style={{ width: '100%' }}>
                  <p className="user-modal-label">Account Number</p>
                  <input
                    className="user-input-text"
                    style={{ width: '100%' }}
                    type="number"
                    ref={accountNumberEditRef}
                    disabled
                  />
                </div>
              </div>
              <div className="create-user-flex">
                <div>
                  <p className="user-modal-label">First Name</p>
                  <input
                    className="user-input-text"
                    type="text"
                    ref={firstNameEditRef}
                    required
                  />
                </div>
                <div>
                  <p className="user-modal-label">Last Name</p>
                  <input
                    className="user-input-text"
                    type="text"
                    ref={lastNameEditRef}
                    required
                  />
                </div>
              </div>
              <div className="create-user-flex">
                <div>
                  <p className="user-modal-label">Birthdate</p>
                  <input
                    className="user-input-text"
                    type="date"
                    ref={birthdateEditRef}
                    required
                  />
                </div>
                <div>
                  <p className="user-modal-label">Gender</p>
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
                  <p className="user-modal-label">Email</p>
                  <input
                    className="user-input-text"
                    type="email"
                    ref={emailEditRef}
                    required
                  />
                </div>
                <div>
                  <p className="user-modal-label">Password</p>

                  <input
                    className="user-input-text"
                    type="password"
                    ref={passwordEditRef}
                    required
                  />
                </div>
              </div>
              <div className="create-user-flex">
                <div style={{ width: '100%' }}>
                  <p className="user-modal-label">Balance</p>
                  <input
                    className="user-input-text"
                    style={{ width: '100%' }}
                    type="number"
                    step=".01"
                    ref={balanceEditRef}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <div className="create-user-flex">
                  <input
                    className="btn-small btn-primary btn-modal"
                    type="submit"
                    value="Submit"
                  />
                </div>
                <div className="create-user-flex flex-center">
                  <input
                    className="btn-small btn-cancel btn-modal-cancel"
                    onClick={handleCloseEdit}
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

export default EditUserForm;

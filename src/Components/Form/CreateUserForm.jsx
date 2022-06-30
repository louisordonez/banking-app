import React from 'react';

const CreateUserForm = ({
  showCreate,
  handleSubmit,
  firstNameRef,
  lastNameRef,
  birthdateRef,
  genderRef,
  emailRef,
  passwordRef,
  balanceRef,
  handleCloseCreate,
}) => {
  return (
    <div style={{ display: `${showCreate}` }}>
      <div className="modal center">
        <div className="modal-content center">
          <div className="modal-header">
            <div>
              <span>Create User</span>
            </div>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="create-user-flex">
                <div>
                  <input
                    className="user-input-text"
                    placeholder="First Name"
                    type="text"
                    ref={firstNameRef}
                    required
                  />
                </div>
                <div>
                  <input
                    className="user-input-text"
                    placeholder="Last Name"
                    type="text"
                    ref={lastNameRef}
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
                    ref={birthdateRef}
                    required
                  />
                </div>
                <div>
                  <select
                    className="user-input-text"
                    ref={genderRef}
                    defaultValue={''}
                    required
                  >
                    <option value="" disabled hidden>
                      Select an option
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="create-user-flex">
                <div>
                  <input
                    className="user-input-text"
                    placeholder="Email"
                    type="email"
                    ref={emailRef}
                    required
                  />
                </div>
                <div>
                  <input
                    className="user-input-text"
                    placeholder="Password"
                    type="password"
                    ref={passwordRef}
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
                    ref={balanceRef}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <input
                  className="btn-small btn-cancel"
                  onClick={handleCloseCreate}
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

export default CreateUserForm;

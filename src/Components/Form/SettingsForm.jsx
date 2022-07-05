import React from 'react';

const SettingsForm = ({
  handleSettingsEdit,
  accountNumberSettingsRef,
  firstNameSettingsRef,
  lastNameSettingsRef,
  birthdateSettingsRef,
  genderSettingsRef,
  emailSettingsRef,
  passwordSettingsRef,
}) => {
  return (
    <div className="settings-container">
      <div className="settings">
        <div className="modal-header">
          <div>
            <span>Settings</span>
          </div>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSettingsEdit}>
            <div className="create-user-flex">
              <div>
                <input
                  className="user-input-text"
                  placeholder="Account Number"
                  type="number"
                  ref={accountNumberSettingsRef}
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
                  ref={firstNameSettingsRef}
                  required
                />
              </div>
              <div>
                <input
                  className="user-input-text"
                  placeholder="Last Name"
                  type="text"
                  ref={lastNameSettingsRef}
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
                  ref={birthdateSettingsRef}
                  required
                />
              </div>
              <div>
                <select
                  className="user-input-text"
                  required
                  ref={genderSettingsRef}
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
                  ref={emailSettingsRef}
                  required
                />
              </div>
              <div>
                <input
                  className="user-input-text"
                  placeholder="Password"
                  type="password"
                  ref={passwordSettingsRef}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
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
  );
};

export default SettingsForm;

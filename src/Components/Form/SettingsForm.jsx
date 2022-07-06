import React from 'react';

const SettingsForm = ({
  handleSettingsEdit,
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
                <p className="user-modal-label">First Name</p>
                <input
                  className="user-input-text"
                  type="text"
                  ref={firstNameSettingsRef}
                  required
                />
              </div>
              <div>
                <p className="user-modal-label">Last Name</p>
                <input
                  className="user-input-text"
                  type="text"
                  ref={lastNameSettingsRef}
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
                  ref={birthdateSettingsRef}
                  required
                />
              </div>
              <div>
                <p className="user-modal-label">Gender</p>
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
                <p className="user-modal-label">Email</p>
                <input
                  className="user-input-text"
                  placeholder="Email"
                  type="email"
                  ref={emailSettingsRef}
                  required
                />
              </div>
              <div>
                <p className="user-modal-label">Password</p>
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
              <div className="create-user-flex">
                <input
                  className="btn-small btn-primary btn-modal"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsForm;

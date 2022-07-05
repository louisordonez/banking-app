import React from 'react';

const SettingsForm = () => {
  return (
    <div className="center">
      <div className="settings center">
        <div className="modal-header">
          <div>
            <span>Settings</span>
          </div>
        </div>
        <div className="modal-body">
          <form>
            <div className="create-user-flex">
              <div>
                <input
                  className="user-input-text"
                  placeholder="Account Number"
                  type="number"
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
                  required
                />
              </div>
              <div>
                <input
                  className="user-input-text"
                  placeholder="Last Name"
                  type="text"
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
                  required
                />
              </div>
              <div>
                <select className="user-input-text" required>
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
                  required
                />
              </div>
              <div>
                <input
                  className="user-input-text"
                  placeholder="Password"
                  type="password"
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

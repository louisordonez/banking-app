import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Alert from '../../Components/Alert/Alert';

const LogIn = ({
  handleLogin,
  emailRef,
  passwordRef,
  alertType,
  alertHeader,
  alertMessage,
  showAlert,
  handleCloseAlert,
}) => {
  return (
    <main>
      <div className="modal center">
        <div className="modal-content center">
          <div className="modal-header">
            <Alert
              showAlert={showAlert}
              alertType={alertType}
              alertHeader={alertHeader}
              alertText={alertMessage}
              onClick={handleCloseAlert}
            />
            <div>
              <span>Log In</span>
            </div>
          </div>
          <div className="modal-body">
            <form onSubmit={handleLogin}>
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
              <div className="modal-footer">
                <Link to="/signup">
                  <input
                    className="btn-small btn-cancel"
                    type="button"
                    value="Sign Up"
                  />
                </Link>
                <input
                  className="btn-small btn-primary"
                  type="submit"
                  value="Log In"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LogIn;

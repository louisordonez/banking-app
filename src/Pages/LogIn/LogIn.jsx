import React from 'react';
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
    <>
      <Alert
        showAlert={showAlert}
        alertType={alertType}
        alertHeader={alertHeader}
        alertText={alertMessage}
        onClick={handleCloseAlert}
      />
      <main>
        <div className="center">
          <div className="modal center landing-modal-bg">
            <div className="modal-content center">
              <div className="modal-header">
                <div>
                  <span>Log In</span>
                </div>
              </div>
              <div className="modal-body">
                <form onSubmit={handleLogin}>
                  <div className="create-user-flex">
                    <div>
                      <p className="user-modal-label">Email</p>
                      <input
                        className="user-input-text"
                        type="email"
                        ref={emailRef}
                        required
                      />
                    </div>
                    <div>
                      <p className="user-modal-label">Password</p>
                      <input
                        className="user-input-text"
                        type="password"
                        ref={passwordRef}
                        required
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="create-user-flex" style={{ width: `100%` }}>
                      <input
                        className="btn-small btn-primary"
                        style={{ width: `100%` }}
                        type="submit"
                        value="Log In"
                      />
                    </div>
                    <div className="create-user-flex flex-center">
                      <Link to="/signup">
                        <input
                          style={{ width: `100%`, marginTop: `1rem` }}
                          className="btn-small btn-cancel btn-modal-cancel"
                          type="button"
                          value="Sign Up"
                        />
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LogIn;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Alert from '../../Components/Alert/Alert';

const SignUp = ({
  showAlert,
  alertType,
  alertHeader,
  alertMessage,
  handleSignUp,
  firstNameSignUpRef,
  lastNameSignUpRef,
  birthdateSignUpRef,
  genderSignUpRef,
  emailSignUpRef,
  passwordSignUpRef,
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
                  <span>Sign Up</span>
                </div>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSignUp}>
                  <div className="create-user-flex">
                    <div>
                      <p className="user-modal-label">First Name</p>
                      <input
                        className="user-input-text"
                        type="text"
                        ref={firstNameSignUpRef}
                        required
                      />
                    </div>
                    <div>
                      <p className="user-modal-label">Last Name</p>
                      <input
                        className="user-input-text"
                        type="text"
                        ref={lastNameSignUpRef}
                        required
                      />
                    </div>
                  </div>
                  <div className="create-user-flex">
                    <div>
                      <p className="user-modal-label">Birthdate</p>
                      <input
                        className="user-input-text"
                        placeholder="Birthdate"
                        type="date"
                        ref={birthdateSignUpRef}
                        required
                      />
                    </div>
                    <div>
                      <p className="user-modal-label">Gender</p>
                      <select
                        className="user-input-text"
                        defaultValue={''}
                        ref={genderSignUpRef}
                        required
                      >
                        <option value="" disabled hidden>
                          Select an option
                        </option>
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
                        ref={emailSignUpRef}
                        required
                      />
                    </div>
                    <div>
                      <p className="user-modal-label">Password</p>
                      <input
                        className="user-input-text"
                        type="password"
                        ref={passwordSignUpRef}
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
                        value="Sign Up"
                      />
                    </div>
                    <div className="create-user-flex flex-center">
                      <Link to="/">
                        <input
                          style={{ width: `100%`, marginTop: `1rem` }}
                          className="btn-small btn-cancel btn-modal-cancel"
                          type="button"
                          value="Log In"
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

export default SignUp;

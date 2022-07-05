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
          <div className="modal center">
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
                      <input
                        className="user-input-text"
                        placeholder="First Name"
                        type="text"
                        ref={firstNameSignUpRef}
                        required
                      />
                    </div>
                    <div>
                      <input
                        className="user-input-text"
                        placeholder="Last Name"
                        type="text"
                        ref={lastNameSignUpRef}
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
                        ref={birthdateSignUpRef}
                        required
                      />
                    </div>
                    <div>
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
                      <input
                        className="user-input-text"
                        placeholder="Email"
                        type="email"
                        ref={emailSignUpRef}
                        required
                      />
                    </div>
                    <div>
                      <input
                        className="user-input-text"
                        placeholder="Password"
                        type="password"
                        ref={passwordSignUpRef}
                        required
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <Link to="/">
                      <input
                        className="btn-small btn-cancel"
                        type="button"
                        value="Log In"
                      />
                    </Link>
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
      </main>
    </>
  );
};

export default SignUp;

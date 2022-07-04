import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const SignUp = ({}) => {
  return (
    <div className="modal center">
      <div className="modal-content center">
        <div className="modal-header">
          <div>
            <span>Sign Up</span>
          </div>
        </div>
        <div className="modal-body">
          <form>
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
                <select className="user-input-text" defaultValue={''} required>
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
  );
};

export default SignUp;

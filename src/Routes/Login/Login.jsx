import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const LogIn = ({ handleLogin }) => {
  return (
    <div className="center">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email: </label>
          <input type="text"></input>
        </div>
        <div>
          <label>Password: </label>
          <input type="password"></input>
        </div>
        <div>
          <button type="submit" value="Submit">
            Log In
          </button>
        </div>
      </form>
      <Link to="/signup">
        <span>Sign Up</span>
      </Link>
    </div>
  );
};

export default LogIn;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LogInForm from '../../Components/Form/LogInForm';

const LogIn = ({ handleLogin }) => {
  return (
    <div className="center">
      <h1>Login</h1>
      <LogInForm handleLogin={handleLogin} />
      <Link to="/signup">
        <span>Sign Up</span>
      </Link>
    </div>
  );
};

export default LogIn;

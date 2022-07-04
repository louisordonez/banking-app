import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="center">
      <h1>Sign Up</h1>

      <Link to="/">
        <span>Log In</span>
      </Link>
    </div>
  );
};

export default SignUp;

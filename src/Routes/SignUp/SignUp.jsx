import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <>
      <h1>Sign Up Page</h1>
      <Link to="/">
        <span>Log In</span>
      </Link>
    </>
  );
};

export default SignUp;

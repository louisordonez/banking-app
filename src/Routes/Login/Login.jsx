import React from 'react';

const Login = ({ handleLogin }) => {
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

import React from 'react';

const LogInForm = ({ handleLogin }) => {
  return (
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
  );
};

export default LogInForm;

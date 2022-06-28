import React from 'react';
import { Link } from 'react-router-dom';
import InputAmount from './Components/InputAmount/InputAmount';

const App = () => {
  return (
    <div>
      <h1>Bank</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/Dashboard">Dashboard</Link> |{' '}
        <Link to="/Users">Users</Link> |{' '}
        <Link to="/Transactions">Transactions</Link> |{' '}
        <Link to="/Settings">Settings</Link>
      </nav>
      <InputAmount />
    </div>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Routes/Dashboard/Dashboard';
import Users from './Routes/Users/Users';
import Transactions from './Routes/Transactions/Transactions';
import Settings from './Routes/Settings/Settings';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

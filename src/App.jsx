import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Routes/Dashboard';
import Users from './Routes/Users';
import Transactions from './Routes/Transactions';
import Settings from './Routes/Settings';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="Users" element={<Users />} />
          <Route path="Transactions" element={<Transactions />} />
          <Route path="Settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

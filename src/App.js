import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Routes/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Routes/Admin/Dashboard/Dashboard';
import Users from './Routes/Admin/Users/Users';
import Transactions from './Routes/Admin/Transactions/Transactions';
import Settings from './Routes/Admin/Settings/Settings';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <>
        <Router>
          <Navbar handleLogOut={handleLogOut} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </Router>
      </>
    );
  } else {
    return <Login handleLogin={handleLogin} />;
  }
};

export default App;

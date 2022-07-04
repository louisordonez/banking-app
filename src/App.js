import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './Routes/LogIn/LogIn';
import SignUp from './Routes/SignUp/SignUp';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Routes/Admin/Dashboard/Dashboard';
import Users from './Routes/Admin/Users/Users';
import Transactions from './Routes/Admin/Transactions/Transactions';
import Settings from './Routes/Admin/Settings/Settings';
import { USER_LIST } from './Assets/JS/UserList';

const App = () => {
  // eslint-disable-next-line
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userList = JSON.parse(localStorage.getItem('userList'));
    const isLoggedInLocalStorage = localStorage.getItem('isLoggedIn');

    if (isLoggedInLocalStorage === null) {
      handleIsLoggedIn(false);
    } else if (isLoggedInLocalStorage === 'true') {
      setIsLoggedIn(true);
    }

    if (userList) {
      setUsers(userList);
    } else {
      loadUserListLocalStorage();
    }
  }, []);

  const loadUserListLocalStorage = () => {
    localStorage.setItem('userList', JSON.stringify(USER_LIST));

    const userList = JSON.parse(localStorage.getItem('userList'));

    setUsers(userList);
  };

  const handleIsLoggedIn = (isLoggedIn) => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  };

  const handleLogin = () => {
    handleIsLoggedIn(true);
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    handleIsLoggedIn(false);
    setIsLoggedIn(false);
  };

  if (isLoggedIn === true) {
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
  } else if (isLoggedIn === false) {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<LogIn handleLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </>
    );
  }
};

export default App;

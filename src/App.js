import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './Routes/LogIn/LogIn';
import SignUp from './Routes/SignUp/SignUp';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Routes/Dashboard/Dashboard';
import Users from './Routes/Users/Users';
import Transactions from './Routes/Transactions/Transactions';
import Settings from './Routes/Settings/Settings';
import { USER_LIST } from './Assets/JS/UserList';

const App = () => {
  // eslint-disable-next-line
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem('userList'))
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  const [showAlert, setShowAlert] = useState('none');
  const [alertType, setAlertType] = useState('');
  const [alertHeader, setAlertHeader] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    const userList = JSON.parse(localStorage.getItem('userList'));
    const isLoggedInLocalStorage = localStorage.getItem('isLoggedIn');
    const roleLocalStorage = localStorage.getItem('role');

    if (isLoggedInLocalStorage === null) {
      handleIsLoggedIn(false);
    } else if (
      isLoggedInLocalStorage === 'true' &&
      roleLocalStorage === 'admin'
    ) {
      setIsLoggedIn(true);
      setRole('admin');
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

  const handleCloseAlert = () => {
    setShowAlert('none');
  };

  const handleAlert = (alertType, alertHeader, alertMessage) => {
    setAlertType(alertType);
    setAlertHeader(alertHeader);
    setAlertMessage(alertMessage);
    setShowAlert('block');
    setTimeout(handleCloseAlert, 5000);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find((u) => u.email === emailRef.current.value);

    if (user !== undefined) {
      if (
        user.email === emailRef.current.value &&
        user.password === passwordRef.current.value
      ) {
        setRole('admin');
        localStorage.setItem('role', 'admin');
        handleIsLoggedIn(true);
        setIsLoggedIn(true);
      } else {
        handleAlert(`danger`, `Failed!`, `Check your email and password`);
      }
    }
  };

  const handleLogOut = () => {
    handleIsLoggedIn(false);
    setIsLoggedIn(false);
    setRole('');
    localStorage.setItem('role', '');
  };

  if (isLoggedIn === true && role === 'admin') {
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
  } else if (isLoggedIn === true && role === 'user') {
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
            <Route
              path="/"
              element={
                <div className="center">
                  <LogIn
                    handleLogin={handleLogin}
                    emailRef={emailRef}
                    passwordRef={passwordRef}
                    handleAlert={handleAlert}
                    showAlert={showAlert}
                    alertType={alertType}
                    alertHeader={alertHeader}
                    alertMessage={alertMessage}
                    handleCloseAlert={handleCloseAlert}
                  />
                </div>
              }
            />
            <Route
              path="/signup"
              element={
                <div className="center">
                  <SignUp />
                </div>
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
};

export default App;

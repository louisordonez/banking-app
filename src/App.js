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

  const firstNameSignUpRef = useRef(null);
  const lastNameSignUpRef = useRef(null);
  const birthdateSignUpRef = useRef(null);
  const genderSignUpRef = useRef(null);
  const emailSignUpRef = useRef(null);
  const passwordSignUpRef = useRef(null);

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
    } else if (
      isLoggedInLocalStorage === 'true' &&
      roleLocalStorage === 'user'
    ) {
      setIsLoggedIn(true);
      setRole('user');
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
        if (user.role === 'admin') {
          setRole('admin');
          localStorage.setItem('role', 'admin');
        } else if (user.role === 'user') {
          setRole('user');
          localStorage.setItem('role', 'user');
        }

        handleIsLoggedIn(true);
        setIsLoggedIn(true);
      } else {
        handleAlert(`danger`, `Failed!`, `Check your email and password`);
      }
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const newAccountNumber = new Date().getTime();
    const userData = {
      accountNumber: newAccountNumber,
      firstName: `${firstNameSignUpRef.current.value}`,
      lastName: `${lastNameSignUpRef.current.value}`,
      birthdate: `${birthdateSignUpRef.current.value}`,
      gender: `${genderSignUpRef.current.value}`,
      email: `${emailSignUpRef.current.value}`,
      password: `${passwordSignUpRef.current.value}`,
      balance: parseFloat(0.0),
      role: `user`,
    };
    const user = users.find((u) => u.email === emailSignUpRef.current.value);

    if (user !== undefined && user.email === emailSignUpRef.current.value) {
      handleAlert(`danger`, `Failed!`, `Email has already been taken`);
    } else {
      setUsers((state) => [userData, ...state]);
      localStorage.setItem('userList', JSON.stringify([userData, ...users]));
      handleAlert(
        `success`,
        `Success!`,
        `You may now login with your email and password`
      );
    }
  };

  const handleLogOut = () => {
    handleIsLoggedIn(false);
    setIsLoggedIn(false);
    setRole('');
    localStorage.setItem('role', '');
    window.location.reload();
  };

  if (isLoggedIn === true && role === 'admin') {
    return (
      <Router>
        <Navbar handleLogOut={handleLogOut} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="users" element={<Users userList={users} />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </Router>
    );
  } else if (isLoggedIn === true && role === 'user') {
    return (
      <Router>
        <Navbar handleLogOut={handleLogOut} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </Router>
    );
  } else if (isLoggedIn === false) {
    return (
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
                <SignUp
                  showAlert={showAlert}
                  alertType={alertType}
                  alertHeader={alertHeader}
                  alertMessage={alertMessage}
                  handleSignUp={handleSignUp}
                  firstNameSignUpRef={firstNameSignUpRef}
                  lastNameSignUpRef={lastNameSignUpRef}
                  birthdateSignUpRef={birthdateSignUpRef}
                  genderSignUpRef={genderSignUpRef}
                  emailSignUpRef={emailSignUpRef}
                  passwordSignUpRef={passwordSignUpRef}
                  handleCloseAlert={handleCloseAlert}
                />
              </div>
            }
          />
        </Routes>
      </Router>
    );
  }
};

export default App;

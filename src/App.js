import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Pages/Dashboard/Dashboard';
import Users from './Pages/Users/Users';
import Transactions from './Pages/Transactions/Transactions';
import Settings from './Pages/Settings/Settings';
import Home from './Pages/Home/Home';
import { USER_LIST } from './UserList';

const App = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem('userList'))
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
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
    const emailLocalStorage = localStorage.getItem('email');

    if (isLoggedInLocalStorage === null) {
      handleIsLoggedIn(false);
    } else if (
      isLoggedInLocalStorage === 'true' &&
      roleLocalStorage === 'admin'
    ) {
      setEmail(emailLocalStorage);
      setIsLoggedIn(true);
      setRole('admin');
    } else if (
      isLoggedInLocalStorage === 'true' &&
      roleLocalStorage === 'user'
    ) {
      setEmail(emailLocalStorage);
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

        setEmail(emailRef.current.value);
        localStorage.setItem('email', emailRef.current.value);

        handleIsLoggedIn(true);
        setIsLoggedIn(true);
      } else {
        handleAlert(`danger`, `Failed!`, `Check your email and password`);
      }
    } else {
      handleAlert(`danger`, `Failed!`, `Check your email and password`);
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
    localStorage.setItem('email', '');
    window.location.assign('/');
  };

  if (isLoggedIn === true && role === 'admin') {
    return (
      <Router>
        <Navbar handleLogOut={handleLogOut} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="users" element={<Users userList={users} />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="settings" element={<Settings userList={users} />} />
        </Routes>
      </Router>
    );
  } else if (isLoggedIn === true && role === 'user') {
    return (
      <Router>
        <Navbar handleLogOut={handleLogOut} />
        <Routes>
          <Route path="/" element={<Home email={email} users={users} />} />
          <Route path="users" element={<Users />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="settings" element={<Settings userList={users} />} />
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
            }
          />
          <Route
            path="/signup"
            element={
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
            }
          />
        </Routes>
      </Router>
    );
  }
};

export default App;

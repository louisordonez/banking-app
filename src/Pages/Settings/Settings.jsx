import React, { useEffect, useState, useRef } from 'react';
import Alert from '../../Components/Alert/Alert';
import SettingsForm from '../../Components/Form/SettingsForm';

const Settings = ({ userList }) => {
  const [users, setUsers] = useState(userList);
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [showAlert, setShowAlert] = useState('none');
  const [alertType, setAlertType] = useState('');
  const [alertHeader, setAlertHeader] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const accountNumberSettingsRef = useRef(null);
  const firstNameSettingsRef = useRef(null);
  const lastNameSettingsRef = useRef(null);
  const birthdateSettingsRef = useRef(null);
  const genderSettingsRef = useRef(null);
  const emailSettingsRef = useRef(null);
  const passwordSettingsRef = useRef(null);

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem('userList')));
    displayUserInfo();
  }, []);

  const displayUserInfo = () => {
    const user = users.find((u) => u.email === email);

    if (user !== undefined) {
      accountNumberSettingsRef.current.value = user.accountNumber;
      firstNameSettingsRef.current.value = user.firstName;
      lastNameSettingsRef.current.value = user.lastName;
      birthdateSettingsRef.current.value = user.birthdate;
      genderSettingsRef.current.value = user.gender;
      emailSettingsRef.current.value = user.email;
      passwordSettingsRef.current.value = user.password;
    }
  };

  const handleSettingsEdit = (e) => {
    e.preventDefault();

    const userIndex = users.findIndex((u) => u.email === email);
    const user = users.find((u) => u.email === email);
    const existingUser = users.find(
      (u) => u.email === emailSettingsRef.current.value
    );

    if (user !== undefined) {
      if (
        existingUser !== undefined &&
        parseInt(existingUser.accountNumber) !== user.accountNumber
      ) {
        handleAlert(`danger`, `Failed!`, `Email has already been taken`);
      } else {
        users[userIndex].firstName = `${firstNameSettingsRef.current.value}`;
        users[userIndex].lastName = `${lastNameSettingsRef.current.value}`;
        users[userIndex].birthdate = `${birthdateSettingsRef.current.value}`;
        users[userIndex].gender = `${genderSettingsRef.current.value}`;
        users[userIndex].email = `${emailSettingsRef.current.value}`;
        users[userIndex].password = `${passwordSettingsRef.current.value}`;
        localStorage.setItem('email', emailSettingsRef.current.value);
        localStorage.setItem('userList', JSON.stringify(users));
        handleAlert(`success`, `Success!`, `User has been successfully edited`);
      }
    }
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

  const displayAlert = () => {
    if (showAlert === 'block') {
      return (
        <Alert
          alertType={alertType}
          alertHeader={alertHeader}
          alertText={alertMessage}
          showAlert={showAlert}
          onClick={handleCloseAlert}
        />
      );
    }
  };

  return (
    <main>
      <h2 className="page-header">Settings</h2>
      {displayAlert()}
      <SettingsForm
        handleSettingsEdit={handleSettingsEdit}
        accountNumberSettingsRef={accountNumberSettingsRef}
        firstNameSettingsRef={firstNameSettingsRef}
        lastNameSettingsRef={lastNameSettingsRef}
        birthdateSettingsRef={birthdateSettingsRef}
        genderSettingsRef={genderSettingsRef}
        emailSettingsRef={emailSettingsRef}
        passwordSettingsRef={passwordSettingsRef}
      />
    </main>
  );
};

export default Settings;

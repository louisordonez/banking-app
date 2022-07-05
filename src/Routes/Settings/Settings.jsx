import React, { useState } from 'react';
import Alert from '../../Components/Alert/Alert';

const Settings = () => {
  const [showAlert, setShowAlert] = useState('none');
  const [alertType, setAlertType] = useState('');
  const [alertHeader, setAlertHeader] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

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
    </main>
  );
};

export default Settings;

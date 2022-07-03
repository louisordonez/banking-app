import React from 'react';
import * as BoxIcons from 'react-icons/bi';

const SuccessAlert = ({ showAlert, alertType, alertText, onClick }) => {
  // setTimeout(closeAlert, 5000);

  return (
    <div
      style={{ display: `${showAlert}` }}
      className={`alert alert-${alertType} alert-dismissible`}
      data-alert=""
    >
      <div>
        <a href="#" className="close" onClick={onClick}>
          <BoxIcons.BiX size={16} />
        </a>
        <span>Success! </span>
        <span>{alertText}</span>
      </div>
    </div>
  );
};

export default SuccessAlert;

import React from 'react';
import * as BoxIcons from 'react-icons/bi';

const ActionsWithdrawButton = ({ onClick }) => {
  return (
    <button title="Withdraw">
      <BoxIcons.BiArrowToBottom size={16} style={{ color: '#83DEA4' }} />
    </button>
  );
};

export default ActionsWithdrawButton;

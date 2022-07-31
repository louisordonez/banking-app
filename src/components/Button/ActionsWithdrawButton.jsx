import React from 'react';
import * as BoxIcons from 'react-icons/bi';

const ActionsWithdrawButton = ({ onClick }) => {
  return (
    <button title="Withdraw" onClick={onClick}>
      <BoxIcons.BiArrowToBottom size={16} style={{ color: '#22B573' }} />
    </button>
  );
};

export default ActionsWithdrawButton;

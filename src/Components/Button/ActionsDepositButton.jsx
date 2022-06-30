import React from 'react';
import * as BoxIcons from 'react-icons/bi';

const ActionsDepositButton = ({ onClick }) => {
  return (
    <button title="Deposit" onClick={onClick}>
      <BoxIcons.BiArrowToTop size={16} style={{ color: '#A789FF' }} />
    </button>
  );
};

export default ActionsDepositButton;

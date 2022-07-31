import React from 'react';
import * as BoxIcons from 'react-icons/bi';

const ActionsTransferButton = ({ onClick }) => {
  return (
    <button title="Transfer" onClick={onClick}>
      <BoxIcons.BiTransferAlt size={16} style={{ color: '#436CFB' }} />
    </button>
  );
};

export default ActionsTransferButton;

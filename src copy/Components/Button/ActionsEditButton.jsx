import React from 'react';
import * as BoxIcons from 'react-icons/bi';

const ActionsEditButton = ({ onClick }) => {
  return (
    <button title="Edit" onClick={onClick}>
      <BoxIcons.BiPencil size={16} style={{ color: '#f5a623' }} />
    </button>
  );
};

export default ActionsEditButton;

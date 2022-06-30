import React from 'react';
import * as BoxIcons from 'react-icons/bi';

const ActionsEditButton = ({ onClick }) => {
  return (
    <button title="Edit" onClick={onClick}>
      <BoxIcons.BiPencil size={16} style={{ color: '#FCE37E' }} />
    </button>
  );
};

export default ActionsEditButton;

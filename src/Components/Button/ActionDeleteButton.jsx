import React from 'react';
import * as BoxIcons from 'react-icons/bi';

const ActionDeleteButton = ({ onClick }) => {
  return (
    <button title="Delete" onClick={onClick}>
      <BoxIcons.BiTrash size={16} style={{ color: '#F53C3D' }} />
    </button>
  );
};

export default ActionDeleteButton;

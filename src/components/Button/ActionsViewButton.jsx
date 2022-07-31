import React from 'react';
import * as BoxIcons from 'react-icons/bi';

const ActionsViewButton = ({ onClick }) => {
  return (
    <button title="View" onClick={onClick}>
      <BoxIcons.BiShow size={16} style={{ color: 'var(--fourth-color)' }} />
    </button>
  );
};

export default ActionsViewButton;

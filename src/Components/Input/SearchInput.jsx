import React from 'react';

const InputSearch = ({ placeholder, handleSearch, type }) => {
  return (
    <div>
      <input
        className="search"
        placeholder={placeholder}
        onChange={handleSearch}
        type={type}
      />
    </div>
  );
};

export default InputSearch;

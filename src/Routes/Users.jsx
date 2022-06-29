import React from 'react';
import Button from '../Components/Button/Button';
import UsersTable from '../Components/Table/UsersTable';

const Users = () => {
  return (
    <div className="flex-center center">
      <div>
        <div className="add-user-btn">
          <Button textValue={`Create User`} />
        </div>
        <div>
          <UsersTable />
        </div>
      </div>
    </div>
  );
};

export default Users;

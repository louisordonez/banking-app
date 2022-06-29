import React from 'react';
import Button from '../Components/Button/Button';
import UsersTable from '../Components/Table/UsersTable';

const users = [
  {
    accountNumber: 1656396733,
    firstName: 'John',
    lastName: 'Doe',
    age: 19,
    gender: 'Male',
    email: 'jd@email.com',
    password: 'jd',
    balance: 100.25,
  },
  {
    accountNumber: 1656396733,
    firstName: 'John',
    lastName: 'Doe',
    age: 19,
    gender: 'Male',
    email: 'jd@email.com',
    password: 'jd',
    balance: 100.25,
  },
  {
    accountNumber: 1656396733,
    firstName: 'John',
    lastName: 'Doe',
    age: 19,
    gender: 'Male',
    email: 'jd@email.com',
    password: 'jd',
    balance: 100.25,
  },
  {
    accountNumber: 1656396733,
    firstName: 'John',
    lastName: 'Doe',
    age: 19,
    gender: 'Male',
    email: 'jd@email.com',
    password: 'jd',
    balance: 100.25,
  },
  {
    accountNumber: 1656396733,
    firstName: 'John',
    lastName: 'Doe',
    age: 19,
    gender: 'Male',
    email: 'jd@email.com',
    password: 'jd',
    balance: 100.25,
  },
];

const Users = () => {
  return (
    <div className="flex-center center">
      <div>
        <div className="add-user-btn">
          <Button textValue={`Create User`} />
        </div>
        <div>
          <UsersTable users={users} />
        </div>
      </div>
    </div>
  );
};

export default Users;

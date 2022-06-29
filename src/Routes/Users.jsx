import React from 'react';
import UsersTable from '../Components/Table/UsersTable';
import InputText from '../Components/Input/InputText';

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
    <div className="users">
      <UsersTable users={users} />
    </div>
  );
};

export default Users;

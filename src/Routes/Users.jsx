import React from 'react';
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
  },
  {
    accountNumber: 1656396733,
    firstName: 'John',
    lastName: 'Doe',
    age: 19,
    gender: 'Male',
    email: 'jd@email.com',
    password: 'jd',
  },
  {
    accountNumber: 1656396733,
    firstName: 'John',
    lastName: 'Doe',
    age: 19,
    gender: 'Male',
    email: 'jd@email.com',
    password: 'jd',
  },
  {
    accountNumber: 1656396733,
    firstName: 'John',
    lastName: 'Doe',
    age: 19,
    gender: 'Male',
    email: 'jd@email.com',
    password: 'jd',
  },
  {
    accountNumber: 1656396733,
    firstName: 'John',
    lastName: 'Doe',
    age: 19,
    gender: 'Male',
    email: 'jd@email.com',
    password: 'jd',
  },
];

const Users = () => {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Users</h2>
      <UsersTable users={users} />
    </main>
  );
};

export default Users;

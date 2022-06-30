import React, { useRef, useState } from 'react';
import Button from '../Components/Button/Button';
import SearchInput from '../Components/Input/SearchInput';
import ActionsEditButton from '../Components/Button/ActionsEditButton';
import ActionsDeleteButton from '../Components/Button/ActionsDeleteButton';
import CreateUserForm from '../Components/Form/CreateUserForm';
import EditUserForm from '../Components/Form/EditUserForm';
import * as BoxIcons from 'react-icons/bi';

const USER_LIST = [
  {
    accountNumber: 1656480543042,
    firstName: 'John',
    lastName: 'Doe',
    birthdate: '1997-06-22',
    gender: 'Male',
    email: 'jd@email.com',
    password: 'jd',
    balance: 10000.25,
  },
  {
    accountNumber: 1656480543188,
    firstName: 'John',
    lastName: 'Smith',
    birthdate: '1998-12-11',
    gender: 'Male',
    email: 'js@email.com',
    password: 'js',
    balance: 20000.25,
  },
];

const Users = () => {
  const [users, setUsers] = useState(USER_LIST);
  const [showCreate, setShowCreate] = useState('none');
  const [showEdit, setShowEdit] = useState('none');

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const birthdateRef = useRef(null);
  const genderRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const balanceRef = useRef(null);

  const accountNumberEditRef = useRef(null);
  const firstNameEditRef = useRef(null);
  const lastNameEditRef = useRef(null);
  const birthdateEditRef = useRef(null);
  const genderEditRef = useRef(null);
  const emailEditRef = useRef(null);
  const passwordEditRef = useRef(null);
  const balanceEditRef = useRef(null);

  const handleShowCreate = () => setShowCreate('block');

  const handleCloseCreate = () => setShowCreate('none');

  const handleCreateUser = (userData) => {
    const newAccountNumber = new Date().getTime();

    setUsers((state) => [
      {
        accountNumber: newAccountNumber,
        firstName: `${userData.firstName}`,
        lastName: `${userData.lastName}`,
        birthdate: `${userData.birthdate}`,
        gender: `${userData.gender}`,
        email: `${userData.email}`,
        password: `${userData.password}`,
        balance: `${userData.balance}`,
      },
      ...state,
    ]);
  };

  const handleDelete = (accountNumber) => {
    const newUsers = users.filter((u) => u.accountNumber !== accountNumber);

    setUsers(newUsers);
  };

  const resetCreateUserForm = () => {
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    birthdateRef.current.value = '';
    genderRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
    balanceRef.current.value = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      firstName: `${firstNameRef.current.value}`,
      lastName: `${lastNameRef.current.value}`,
      birthdate: `${birthdateRef.current.value}`,
      gender: `${genderRef.current.value}`,
      email: `${emailRef.current.value}`,
      password: `${passwordRef.current.value}`,
      balance: `${balanceRef.current.value}`,
    };

    handleCreateUser(userData);
    handleCloseCreate();
    resetCreateUserForm();
  };

  const handleShowEdit = (accountNumber) => {
    const user = users.find((u) => u.accountNumber === accountNumber);

    setShowEdit('block');

    accountNumberEditRef.current.value = accountNumber;
    firstNameEditRef.current.value = user.firstName;
    lastNameEditRef.current.value = user.lastName;
    birthdateEditRef.current.value = user.birthdate;
    genderEditRef.current.value = user.gender;
    emailEditRef.current.value = user.email;
    passwordEditRef.current.value = user.password;
    balanceEditRef.current.value = user.balance;
  };

  const handleCloseEdit = () => setShowEdit('none');

  const handleEditUser = (userIndex) => {
    users[userIndex].firstName = `${firstNameEditRef.current.value}`;
    users[userIndex].lastName = `${lastNameEditRef.current.value}`;
    users[userIndex].birthdate = `${birthdateEditRef.current.value}`;
    users[userIndex].gender = `${genderEditRef.current.value}`;
    users[userIndex].email = `${emailEditRef.current.value}`;
    users[userIndex].password = `${passwordEditRef.current.value}`;
    users[userIndex].balance = `${balanceEditRef.current.value}`;
  };

  const resetEditCreateUserForm = () => {
    accountNumberEditRef.current.value = '';
    firstNameEditRef.current.value = '';
    lastNameEditRef.current.value = '';
    birthdateEditRef.current.value = '';
    genderEditRef.current.value = '';
    emailEditRef.current.value = '';
    passwordEditRef.current.value = '';
    balanceEditRef.current.value = '';
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const userIndex = users.findIndex(
      (u) => u.accountNumber === accountNumberEditRef.current.value
    );

    handleEditUser(userIndex);
    handleCloseEdit();
    resetEditCreateUserForm();
  };

  return (
    <>
      <div className="flex-center center">
        <div>
          <div className="add-user-btn">
            <Button textValue={`Create User`} onClick={handleShowCreate} />
          </div>
          <div className="flex-center">
            <div className="table">
              <div className="table-header">
                <div>
                  <span>{`Users`}</span>
                  <div>
                    <SearchInput placeholder={`Enter account number`} />
                  </div>
                </div>
              </div>
              <div className="table-container">
                <table>
                  <thead className="users-table-header">
                    <tr>
                      <th>Account Number</th>
                      <th>Name</th>
                      <th>Balance</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((val, key) => {
                      return (
                        <tr key={key}>
                          <td>{val.accountNumber}</td>
                          <td>{`${val.firstName} ${val.lastName}`}</td>
                          <td>{`${val.balance.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'PHP',
                          })}`}</td>
                          <td>
                            <button title="Withdraw">
                              <BoxIcons.BiArrowToBottom
                                size={16}
                                style={{ color: '#83DEA4' }}
                              />
                            </button>
                            <button title="Deposit">
                              <BoxIcons.BiArrowToTop
                                size={16}
                                style={{ color: '#A789FF' }}
                              />
                            </button>
                            <button title="Transfer">
                              <BoxIcons.BiTransferAlt
                                size={16}
                                style={{ color: '#436CFB' }}
                              />
                            </button>
                            <ActionsEditButton
                              onClick={() => {
                                handleShowEdit(val.accountNumber);
                              }}
                            />
                            <ActionsDeleteButton
                              onClick={() => {
                                handleDelete(val.accountNumber);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <CreateUserForm
          showCreate={showCreate}
          handleSubmit={handleSubmit}
          firstNameRef={firstNameRef}
          lastNameRef={lastNameRef}
          birthdateRef={birthdateRef}
          genderRef={genderRef}
          emailRef={emailRef}
          passwordRef={passwordRef}
          balanceRef={balanceRef}
          handleCloseCreate={handleCloseCreate}
        />
        <EditUserForm
          showEdit={showEdit}
          handleEditSubmit={handleEditSubmit}
          accountNumberEditRef={accountNumberEditRef}
          firstNameEditRef={firstNameEditRef}
          lastNameEditRef={lastNameEditRef}
          birthdateEditRef={birthdateEditRef}
          genderEditRef={genderEditRef}
          emailEditRef={emailEditRef}
          passwordEditRef={passwordEditRef}
          balanceEditRef={balanceEditRef}
          handleCloseEdit={handleCloseEdit}
        />
      </div>
    </>
  );
};

export default Users;

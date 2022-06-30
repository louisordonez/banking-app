import React, { useRef, useState } from 'react';
import Button from '../Components/Button/Button';
import SearchInput from '../Components/Input/SearchInput';
import ActionsEditButton from '../Components/Button/ActionsEditButton';
import ActionsDeleteButton from '../Components/Button/ActionsDeleteButton';
import CreateUserForm from '../Components/Form/CreateUserForm';
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
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const birthdateRef = useRef(null);
  const genderRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const balanceRef = useRef(null);

  const [users, setUsers] = useState(USER_LIST);
  const [showCreate, setShowCreate] = useState('none');

  const handleShowCreate = () => setShowCreate('block');

  const handleCloseCreate = () => setShowCreate('none');

  const handleCreateUser = (userData) => {
    const newAccountNumber = new Date().getTime();

    setUsers((state) => [
      ...state,
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
                          <td>{`₱ ${val.balance}`}</td>
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
                            // onClick={() => {
                            //   handleDelete(val.accountNumber);
                            // }}
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
      </div>
    </>
  );
};

export default Users;

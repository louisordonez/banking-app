import React, { useRef, useState } from 'react';
import Button from '../Components/Button/Button';
import SearchInput from '../Components/Input/SearchInput';
import ActionsEditButton from '../Components/Button/ActionsEditButton';
import ActionsDeleteButton from '../Components/Button/ActionsDeleteButton';
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
  const [create, setCreate] = useState('none');

  const handleCreateShow = () => setCreate('block');

  const handleCreateClose = () => setCreate('none');

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
    const userData = {
      firstName: `${firstNameRef.current.value}`,
      lastName: `${lastNameRef.current.value}`,
      birthdate: `${birthdateRef.current.value}`,
      gender: `${genderRef.current.value}`,
      email: `${emailRef.current.value}`,
      password: `${passwordRef.current.value}`,
      balance: `${balanceRef.current.value}`,
    };

    e.preventDefault();
    handleCreateUser(userData);
    resetCreateUserForm();
  };

  return (
    <>
      <div className="flex-center center">
        <div>
          <div className="add-user-btn">
            <Button textValue={`Create User`} onClick={handleCreateShow} />
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
      </div>
      <div style={{ display: `${create}` }}>
        <div className="modal center">
          <div className="modal-content center">
            <div className="modal-header">
              <div>
                <span>Create User</span>
              </div>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="create-user-flex">
                  <div>
                    <input
                      className="user-input-text"
                      placeholder="First Name"
                      type="text"
                      ref={firstNameRef}
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="user-input-text"
                      placeholder="Last Name"
                      type="text"
                      ref={lastNameRef}
                      required
                    />
                  </div>
                </div>
                <div className="create-user-flex">
                  <div>
                    <input
                      className="user-input-text"
                      placeholder="Birthdate"
                      type="date"
                      ref={birthdateRef}
                      required
                    />
                  </div>
                  <div>
                    <select
                      className="user-input-text"
                      ref={genderRef}
                      defaultValue={''}
                      required
                    >
                      <option value="" disabled hidden>
                        Select an option
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="create-user-flex">
                  <div>
                    <input
                      className="user-input-text"
                      placeholder="Email"
                      type="email"
                      ref={emailRef}
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="user-input-text"
                      placeholder="Password"
                      type="password"
                      ref={passwordRef}
                      required
                    />
                  </div>
                </div>
                <div className="create-user-flex">
                  <div>
                    <input
                      className="user-input-text"
                      placeholder="Balance"
                      type="number"
                      step=".01"
                      ref={balanceRef}
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    className="btn-small btn-cancel"
                    onClick={handleCreateClose}
                    type="button"
                    value="Cancel"
                  />
                  <input
                    className="btn-small btn-primary"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;

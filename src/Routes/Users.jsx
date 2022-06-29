import React, { useState } from 'react';
import Button from '../Components/Button/Button';
import SearchInput from '../Components/Input/SearchInput';
import ActionsDeleteButton from '../Components/Button/ActionsDeleteButton';
import * as BoxIcons from 'react-icons/bi';

const USER_LIST = [
  {
    accountNumber: 1656480543042,
    firstName: 'John',
    lastName: 'Doe',
    age: 19,
    gender: 'Male',
    email: 'jd@email.com',
    password: 'jd',
    balance: 100.25,
  },
  {
    accountNumber: 1656480543188,
    firstName: 'John',
    lastName: 'Smith',
    age: 20,
    gender: 'Male',
    email: 'js@email.com',
    password: 'js',
    balance: 200.25,
  },
];

const Users = () => {
  const [users, setUsers] = useState(USER_LIST);
  const [create, setCreate] = useState('none');

  const handleCreateShow = () => setCreate('block');

  const handleCreateClose = () => setCreate('none');

  const handleCreateUser = () => {
    const newAccountNumber = new Date().getTime();

    setUsers((state) => [...state, { accountNumber: newAccountNumber }]);
  };

  const handleDelete = (accountNumber) => {
    const newUsers = users.filter((u) => u.accountNumber !== accountNumber);
    setUsers(newUsers);
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
                            <button title="Edit">
                              <BoxIcons.BiPencil
                                size={16}
                                style={{ color: '#FCE37E' }}
                              />
                            </button>
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
              {/* <form> */}
              <div className="create-user-flex">
                <div>
                  <input
                    className="user-input-text"
                    placeholder="First Name"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <input
                    className="user-input-text"
                    placeholder="Last Name"
                    type="text"
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
                    required
                  />
                </div>
                <div>
                  <select className="user-input-text" required>
                    <option value="" disabled selected hidden>
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
                    required
                  />
                </div>
                <div>
                  <input
                    className="user-input-text"
                    placeholder="Password"
                    type="password"
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
                    required
                  />
                </div>
              </div>
              {/* </form> */}
            </div>
            <div className="modal-footer">
              <button
                className="btn-small btn-cancel"
                onClick={handleCreateClose}
              >
                Cancel
              </button>
              <button
                className="btn-small btn-primary"
                onClick={() => {
                  handleCreateUser();
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;

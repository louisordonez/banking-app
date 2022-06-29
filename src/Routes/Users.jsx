import React, { useState } from 'react';
import Button from '../Components/Button/Button';
import SearchInput from '../Components/Input/SearchInput';
import ActionDeleteButton from '../Components/Button/ActionDeleteButton';
import * as BoxIcons from 'react-icons/bi';

let USER_LIST = [
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
    accountNumber: 1756396733,
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

  const handleDelete = (accountNumber) => {
    const newUsers = users.filter((u) => u.accountNumber !== accountNumber);
    setUsers(newUsers);
  };

  return (
    <div className="flex-center center">
      <div>
        <div className="add-user-btn">
          <Button textValue={`Create User`} />
        </div>
        <div className="flex-center">
          <div className="table">
            <div className="table-header">
              <div>
                <span>{`Users`}</span>
                <div>
                  <SearchInput placeholder={`Search a user`} />
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
                          <ActionDeleteButton
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
  );
};

export default Users;

import React from 'react';
import * as BoxIcons from 'react-icons/bi';

const UsersTable = ({ users }) => {
  return (
    <div className="table">
      <div className="table-header">
        <span>{`Users`}</span>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Account Number</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
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
                  <td>{val.age}</td>
                  <td>{val.gender}</td>
                  <td>{`₱ ${val.balance}`}</td>
                  <td>
                    <BoxIcons.BiDotsVerticalRounded size={16} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;

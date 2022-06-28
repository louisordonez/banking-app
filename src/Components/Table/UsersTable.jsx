import React from 'react';

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

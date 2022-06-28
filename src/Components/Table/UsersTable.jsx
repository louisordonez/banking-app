import React from 'react';
import * as BoxIcons from 'react-icons/bi';

const UsersTable = ({ users }) => {
  return (
    <div className="flex-center">
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
                      <button>
                        <BoxIcons.BiArrowToBottom
                          size={16}
                          style={{ color: '#83DEA4' }}
                        />
                      </button>
                      <button>
                        <BoxIcons.BiArrowToTop
                          size={16}
                          style={{ color: '#A789FF' }}
                        />
                      </button>
                      <button>
                        <BoxIcons.BiTransferAlt
                          size={16}
                          style={{ color: '#436CFB' }}
                        />
                      </button>
                      <button>
                        <BoxIcons.BiTrash
                          size={16}
                          style={{ color: '#F53C3D' }}
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;

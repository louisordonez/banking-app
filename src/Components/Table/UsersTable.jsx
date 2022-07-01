import React from 'react';
import SearchInput from '../Input/SearchInput';
import ActionsWithdrawButton from '../Button/ActionsWithdrawButton';
import ActionsDepositButton from '../Button/ActionsDepositButton';
import ActionsEditButton from '../Button/ActionsEditButton';
import ActionsTransferButton from '../Button/ActionsTransferButton';
import ActionsDeleteButton from '../Button/ActionsDeleteButton';

const UsersTable = ({
  handleSearch,
  users,
  handleShowWithdraw,
  handleShowDeposit,
  handleShowTransfer,
  handleShowEdit,
  handleDelete,
}) => {
  return (
    <div className="table">
      <div className="table-header">
        <div>
          <span>{`Users`}</span>
          <div>
            <SearchInput
              placeholder={`Enter account number`}
              handleSearch={handleSearch}
              type={`number`}
            />
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
              const parseFloatBalance = parseFloat(val.balance);
              const balanceLocaleString = parseFloatBalance.toLocaleString(
                'en-US',
                {
                  style: 'currency',
                  currency: 'PHP',
                }
              );

              return (
                <tr key={key} data-row="">
                  <td data-account-number="">{val.accountNumber}</td>
                  <td>{`${val.firstName} ${val.lastName}`}</td>
                  <td>{balanceLocaleString}</td>
                  <td>
                    <ActionsWithdrawButton
                      onClick={() => {
                        handleShowWithdraw(
                          val.accountNumber,
                          val.firstName,
                          val.lastName,
                          val.balance
                        );
                      }}
                    />
                    <ActionsDepositButton
                      onClick={() => {
                        handleShowDeposit(
                          val.accountNumber,
                          val.firstName,
                          val.lastName,
                          val.balance
                        );
                      }}
                    />
                    <ActionsTransferButton
                      onClick={() => {
                        handleShowTransfer(
                          val.accountNumber,
                          val.firstName,
                          val.lastName,
                          val.balance
                        );
                      }}
                    />
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
  );
};

export default UsersTable;

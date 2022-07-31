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
          <h2>{`Users`}</h2>
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
              const { accountNumber, firstName, lastName, balance } = val;
              const fullName = `${firstName} ${lastName}`;
              const parseBalance = parseFloat(balance);
              const localeStringBalance = parseBalance.toLocaleString('en-US', {
                style: 'currency',
                currency: 'PHP',
              });

              return (
                <tr
                  key={key}
                  data-row=""
                  data-row-account-number={accountNumber}
                >
                  <td data-account-number={accountNumber}>{accountNumber}</td>
                  <td>{fullName}</td>
                  <td>{localeStringBalance}</td>
                  <td>
                    <ActionsWithdrawButton
                      onClick={() => {
                        handleShowWithdraw(
                          accountNumber,
                          firstName,
                          lastName,
                          balance
                        );
                      }}
                    />
                    <ActionsDepositButton
                      onClick={() => {
                        handleShowDeposit(
                          accountNumber,
                          firstName,
                          lastName,
                          balance
                        );
                      }}
                    />
                    <ActionsTransferButton
                      onClick={() => {
                        handleShowTransfer(
                          accountNumber,
                          firstName,
                          lastName,
                          balance
                        );
                      }}
                    />
                    <ActionsEditButton
                      onClick={() => {
                        handleShowEdit(accountNumber);
                      }}
                    />
                    <ActionsDeleteButton
                      onClick={() => {
                        handleDelete(accountNumber);
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

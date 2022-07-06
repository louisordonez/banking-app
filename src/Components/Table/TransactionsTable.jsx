import React from 'react';
import SearchInput from '../Input/SearchInput';
import ActionsViewButton from '../Button/ActionsViewButton';

const TransactionsTable = ({
  handleShowTransaction,
  transactionList,
  currentEmail,
}) => {
  return (
    <div className="table">
      <div className="table-header">
        <div>
          <h2>Transactions</h2>
          <div>
            <SearchInput
              placeholder={`Enter reference number`}
              // handleSearch={handleSearch}
              type={`number`}
            />
          </div>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead className="transactions-table-header">
            <tr>
              <th>Reference Number</th>
              <th>Date</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactionList
              .filter((u) => u.email !== currentEmail)
              .map((val, key) => {
                const {
                  referenceNumber,
                  accountNumber,
                  email,
                  firstName,
                  lastName,
                  date,
                  amount,
                  description,
                  prevBalance,
                  currentBalance,
                } = val;
                const fullName = `${firstName} ${lastName}`;
                const parseBalance = parseFloat(amount);
                const localeStringBalance = parseBalance.toLocaleString(
                  'en-US',
                  {
                    style: 'currency',
                    currency: 'PHP',
                  }
                );

                return (
                  <tr
                    key={key}
                    data-row=""
                    data-row-account-number={accountNumber}
                  >
                    <td data-reference-number={referenceNumber}>
                      {referenceNumber}
                    </td>
                    <td data-account-number={date}>{date}</td>
                    <td>{description}</td>
                    <td>
                      <ActionsViewButton
                        onClick={() => {
                          handleShowTransaction(
                            referenceNumber,
                            accountNumber,
                            email,
                            firstName,
                            lastName,
                            date,
                            description,
                            amount,
                            prevBalance,
                            currentBalance
                          );
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

export default TransactionsTable;

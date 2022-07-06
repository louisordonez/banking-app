import React from 'react';
import SearchInput from '../Input/SearchInput';
import ActionsViewButton from '../Button/ActionsViewButton';

const TransactionsTable = ({}) => {
  const TRANSACTION_LIST = [
    {
      referenceNumber: 9876,
      accountNumber: 1234,
      firstName: 'Juan',
      lastName: 'Dela Cruz',
      date: '01-01-2020',
      amount: 1000.0,
      description: 'Withdraw',
      prevBalance: 5000.0,
      currentBalance: 4000.0,
    },
    {
      referenceNumber: 5678,
      accountNumber: 4567,
      firstName: 'Maria',
      lastName: 'Dela Cruz',
      date: '02-02-2022',
      amount: 2000.0,
      description: 'Deposit',
      prevBalance: 1000.0,
      currentBalance: 3000.0,
    },
  ];

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
          <thead className="users-table-header">
            <tr>
              <th>Reference Number</th>
              <th>Date</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {TRANSACTION_LIST.map((val, key) => {
              const {
                referenceNumber,
                accountNumber,
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
                  <td data-reference-number={referenceNumber}>
                    {referenceNumber}
                  </td>
                  <td data-account-number={date}>{date}</td>
                  <td>{description}</td>
                  <td>
                    <ActionsViewButton />
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

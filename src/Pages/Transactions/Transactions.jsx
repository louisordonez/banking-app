import React from 'react';
import TransactionsTable from '../../Components/Table/TransactionsTable';

const Transactions = () => {
  return (
    <main>
      <h2 className="page-header">Transactions</h2>
      <div className="user-container">
        <div className="flex-center table-whole transactions-container">
          <TransactionsTable />
        </div>
      </div>
    </main>
  );
};

export default Transactions;

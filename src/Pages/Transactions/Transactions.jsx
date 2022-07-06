import React, { useEffect, useState } from 'react';
import TransactionsTable from '../../Components/Table/TransactionsTable';

const Transactions = () => {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    setTransaction(JSON.parse(localStorage.getItem('transactionList')));
  }, []);

  return (
    <main>
      <h2 className="page-header">Transactions</h2>
      <div className="user-container">
        <div className="flex-center table-whole transactions-container">
          <TransactionsTable transaction={transaction} />
        </div>
      </div>
    </main>
  );
};

export default Transactions;

import React, { useEffect, useState } from 'react';
import TransactionsTable from '../../Components/Table/TransactionsTable';
import ViewTransactionModal from '../../Components/Modal/ViewTransactionModal';

const Transactions = ({ users, email }) => {
  const [transactionList, setTransactionList] = useState(
    JSON.parse(localStorage.getItem('transactionList'))
  );
  const [userList, setUserList] = useState(users);
  const [showTransactionDetails, setShowTransactionDetails] = useState('none');
  const [userTransaction, setUserTransaction] = useState(null);
  const [accoutNumber, setAccountNumber] = useState(null);
  const [currentEmail, setCurrentEmail] = useState(email);

  useEffect(() => {
    // const userListLocalStorage = JSON.parse(localStorage.getItem('userList'));

    setTransactionList(JSON.parse(localStorage.getItem('transactionList')));
    setUserList(JSON.parse(localStorage.getItem('userList')));
    setCurrentEmail(localStorage.getItem('email'));

    // const user = userList.find((u) => u.email === currentEmail);

    // console.log(user.accountNumber);
  }, []);

  // const selectUser = () => {
  //   const user = console.log(user.accoutNumber);
  // };

  return (
    <main>
      <h2 className="page-header">Transactions</h2>
      <div className="user-container">
        <div className="flex-center table-whole transactions-container">
          <TransactionsTable transactionList={transactionList} />
        </div>
      </div>
      <ViewTransactionModal
        showTransactionDetails={showTransactionDetails}
        transactionList={transactionList}
      />
    </main>
  );
};

export default Transactions;

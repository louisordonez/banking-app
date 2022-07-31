import React, { useEffect, useState } from 'react';
import TransactionsTable from '../../components/Table/TransactionsTable';
import ViewTransactionModal from '../../components/Modal/ViewTransactionModal';

const UserTransactions = ({ users, email }) => {
  const [transactionList, setTransactionList] = useState(
    JSON.parse(localStorage.getItem('transactionList'))
  );
  const [userList, setUserList] = useState(users);
  const [showTransactionDetails, setShowTransactionDetails] = useState('none');
  const [referenceNumber, setReferenceNumber] = useState(null);
  const [accountNumber, setAccountNumber] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(null);
  const [prevBalance, setPrevBalance] = useState(null);
  const [currentBalance, setCurrentBalance] = useState(null);
  const [currentEmail, setCurrentEmail] = useState('');

  useEffect(() => {
    setTransactionList(
      JSON.parse(localStorage.getItem('transactionList')).filter(
        (u) => u.email !== currentEmail
      )
    );
    setUserList(JSON.parse(localStorage.getItem('userList')));
    setCurrentEmail(localStorage.getItem('email'));
  }, []);

  const handleShowTransaction = (
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
  ) => {
    setShowTransactionDetails('block');
    setReferenceNumber(referenceNumber);
    setAccountNumber(accountNumber);
    setUserEmail(email);
    setFirstName(firstName);
    setLastName(lastName);
    setDate(date);
    setDescription(description);
    setAmount(
      amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'PHP',
      })
    );
    setPrevBalance(
      prevBalance.toLocaleString('en-US', {
        style: 'currency',
        currency: 'PHP',
      })
    );
    setCurrentBalance(
      currentBalance.toLocaleString('en-US', {
        style: 'currency',
        currency: 'PHP',
      })
    );
  };
  const handleCloseTransaction = () => setShowTransactionDetails('none');

  const handleTransactionSearch = (e) => {
    const referenceNumber = e.target.value;

    const tr = document.querySelectorAll('[data-row]');
    const td = document.querySelectorAll('[data-reference-number]');

    for (let i = 0; i < tr.length; i++) {
      let trValue = td[i].textContent;

      if (trValue.indexOf(referenceNumber) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  };

  return (
    <main>
      <h2 className="page-header">Transactions</h2>
      <div className="user-container">
        <div className="flex-center table-whole transactions-container">
          <TransactionsTable
            handleTransactionSearch={handleTransactionSearch}
            transactionList={transactionList}
            handleShowTransaction={handleShowTransaction}
            currentEmail={currentEmail}
          />
        </div>
      </div>
      <ViewTransactionModal
        showTransactionDetails={showTransactionDetails}
        handleCloseTransaction={handleCloseTransaction}
        referenceNumber={referenceNumber}
        accountNumber={accountNumber}
        userEmail={userEmail}
        firstName={firstName}
        lastName={lastName}
        date={date}
        description={description}
        amount={amount}
        prevBalance={prevBalance}
        currentBalance={currentBalance}
      />
    </main>
  );
};

export default UserTransactions;

import React, { useEffect, useState } from 'react';

const Home = ({ email, users }) => {
  const [userList, setUserList] = useState(users);
  const [balance, setBalance] = useState(null);
  const [displayBalance, setDisplayBalance] = useState('');

  useEffect(() => {
    const currentUser = userList.find((obj) => obj.email === email);
    setBalance(currentUser.balance);

    setDisplayBalance(
      currentUser.balance.toLocaleString('en-US', {
        style: 'currency',
        currency: 'PHP',
      })
    );
  }, []);

  return (
    <main>
      <h2 className="page-header">Home</h2>
      <div className="budget-app-content">
        <div className="budget-app-container">
          <h2 className="budget-header">Budget App</h2>
          <p className="description">Track your Expenses</p>
          <button className="budget-btn">Add Budget</button>
          <p className="balance-text">My Balance</p>
          <p className="amount-text">{displayBalance}</p>
        </div>
      </div>
    </main>
  );
};

export default Home;

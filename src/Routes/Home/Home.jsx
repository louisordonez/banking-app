import React, { useEffect, useState } from 'react';
import * as BoxIcons from 'react-icons/bi';

const Home = ({ email, users }) => {
  // eslint-disable-next-line
  const [userList, setUserList] = useState(users);
  // eslint-disable-next-line
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main>
      <h2 className="page-header">Home</h2>
      <div className="flex-center">
        <div className="balance-card">
          <div className="balance-text">
            Balance
            <div className="balance-amount">{displayBalance}</div>
          </div>
          <div className="wallet-icon-container">
            <div className="wallet-icon">
              <div>
                <BoxIcons.BiWallet
                  style={{ color: 'var(--fourth-color)' }}
                  size={42}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="budget-app-content">
        <div className="budget-app-container">
          <h2 className="budget-header">Budget App</h2>
          <p className="description">Track your Expenses</p>
          <button className="budget-btn">Add Budget</button>
          <p className="balance-text">My Balance</p>
          <p className="amount-text"></p>
        </div>
      </div> */}
    </main>
  );
};

export default Home;

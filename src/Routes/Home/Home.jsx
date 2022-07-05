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
        <div className="action-card" title="Withdraw">
          <div className="action-icon-container">
            <div className="action-icon">
              <div>
                <BoxIcons.BiArrowToBottom
                  style={{ color: 'var(--fourth-color)' }}
                  size={42}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="action-card" title="Deposit">
          <div className="action-icon-container">
            <div className="action-icon">
              <div>
                <BoxIcons.BiArrowToTop
                  style={{ color: 'var(--fourth-color)' }}
                  size={42}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="action-card" title="Transfer">
          <div className="action-icon-container">
            <div className="action-icon">
              <div>
                <BoxIcons.BiTransferAlt
                  style={{ color: 'var(--fourth-color)' }}
                  size={42}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="add-expense-container">
        <div className="flex-center">
          <button className="btn-create-user btn-primary">Add Expense</button>
        </div>
      </div>
      <div className="flex-center">
        <div className="budget-container">
          <div className="budget-header">
            <h2>Expenses</h2>
          </div>
          <div>
            <table className="budget-margin">
              <thead className="budget-table-header">
                <tr>
                  <th>Item</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tuition Fee</td>
                  <td>80,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

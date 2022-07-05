import React, { useEffect, useState, useRef } from 'react';
import * as BoxIcons from 'react-icons/bi';
import UserWithdrawForm from '../../Components/Form/UserWithdrawForm';
import UserDepositForm from '../../Components/Form/UserDepositForm';

const Home = ({ email, users }) => {
  // eslint-disable-next-line
  const [userList, setUserList] = useState(users);
  const [showWithdraw, setShowWithdraw] = useState('none');
  const [withdrawAmount, setWithdrawAmount] = useState(null);
  const [showDeposit, setShowDeposit] = useState('none');
  const [depositAmount, setDepositAmount] = useState(null);
  // eslint-disable-next-line
  const [displayBalance, setDisplayBalance] = useState('');
  const withdrawAmountRef = useRef(null);
  const depositAmountRef = useRef(null);

  useEffect(() => {
    const currentUser = userList.find((obj) => obj.email === email);

    setDisplayBalance(
      currentUser.balance.toLocaleString('en-US', {
        style: 'currency',
        currency: 'PHP',
      })
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleShowWithdraw = () => {
    setShowWithdraw('block');
  };

  const handleCloseWithdraw = () => {
    setShowWithdraw('none');
  };

  const handleWithdraw = (e) => {
    e.preventDefault();

    const userIndex = userList.findIndex((obj) => obj.email === email);
    const prevBalance = userList[userIndex].balance;
    const totalBalance = prevBalance - withdrawAmount;

    if (withdrawAmount > prevBalance) {
      alert('Insufficient balance.');
    } else {
      userList[userIndex].balance = totalBalance;
    }

    setDisplayBalance(
      totalBalance.toLocaleString('en-US', {
        style: 'currency',
        currency: 'PHP',
      })
    );

    localStorage.setItem('userList', JSON.stringify(userList));
    handleCloseWithdraw();
    handleResetWithdrawForm();
  };

  const handleShowDeposit = () => {
    setShowDeposit('block');
  };

  const handleCloseDeposit = () => {
    setShowDeposit('none');
  };

  const handleDeposit = (e) => {
    e.preventDefault();

    const userIndex = userList.findIndex((obj) => obj.email === email);
    const prevBalance = userList[userIndex].balance;
    const totalBalance = prevBalance + depositAmount;

    userList[userIndex].balance = totalBalance;

    setDisplayBalance(
      totalBalance.toLocaleString('en-US', {
        style: 'currency',
        currency: 'PHP',
      })
    );

    localStorage.setItem('userList', JSON.stringify(userList));
    handleCloseDeposit();
    handleResetDepositForm();
  };

  const handleWithdrawAmount = (e) => {
    setWithdrawAmount(parseFloat(e.target.value));
  };

  const handleResetWithdrawForm = () => {
    withdrawAmountRef.current.value = '';
  };

  const handleDepositAmount = (e) => {
    setDepositAmount(parseFloat(e.target.value));
  };

  const handleResetDepositForm = () => {
    depositAmountRef.current.value = '';
  };

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
        <div
          className="action-card"
          title="Withdraw"
          onClick={handleShowWithdraw}
        >
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
        <div
          className="action-card"
          title="Deposit"
          onClick={handleShowDeposit}
        >
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
                <tr>
                  <td>Tuition Fee</td>
                  <td>80,000.00</td>
                </tr>
                <tr>
                  <td>Tuition Fee</td>
                  <td>80,000.00</td>
                </tr>
                <tr>
                  <td>Tuition Fee</td>
                  <td>80,000.00</td>
                </tr>
                <tr>
                  <td>Tuition Fee</td>
                  <td>80,000.00</td>
                </tr>
                <tr>
                  <td>Tuition Fee</td>
                  <td>80,000.00</td>
                </tr>
                <tr>
                  <td>Tuition Fee</td>
                  <td>80,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <UserWithdrawForm
        showWithdraw={showWithdraw}
        handleCloseWithdraw={handleCloseWithdraw}
        handleWithdrawAmount={handleWithdrawAmount}
        handleWithdraw={handleWithdraw}
        withdrawAmountRef={withdrawAmountRef}
      />
      <UserDepositForm
        showDeposit={showDeposit}
        handleCloseDeposit={handleCloseDeposit}
        handleDepositAmount={handleDepositAmount}
        handleDeposit={handleDeposit}
        depositAmountRef={depositAmountRef}
      />
    </main>
  );
};

export default Home;

import React, { useEffect, useState, useRef } from 'react';
import * as BoxIcons from 'react-icons/bi';
import UserWithdrawForm from '../../Components/Form/UserWithdrawForm';
import UserDepositForm from '../../Components/Form/UserDepositForm';
import UserTransferForm from '../../Components/Form/UserTransferForm';
import ActionsEditButton from '../../Components/Button/ActionsEditButton';
import ActionsDeleteButton from '../../Components/Button/ActionsDeleteButton';

const Home = ({ email, users }) => {
  // eslint-disable-next-line
  const [userList, setUserList] = useState(users);
  const [showWithdraw, setShowWithdraw] = useState('none');
  const [withdrawAmount, setWithdrawAmount] = useState(null);
  const [showDeposit, setShowDeposit] = useState('none');
  const [depositAmount, setDepositAmount] = useState(null);
  const [showTransfer, setShowTransfer] = useState('none');
  const [accountNumber, setAccountNumber] = useState(null);
  const [transferAmount, setTransferAmount] = useState(null);
  const [transferAccountNumber, setTransferAccountNumber] = useState(null);
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

  const handleShowTransfer = (accountNumber) => {
    setShowTransfer('block');
    setAccountNumber(accountNumber);
  };

  const handleCloseTransfer = () => {
    setShowTransfer('none');
  };

  const handleTransferAmount = (e) => {
    setTransferAmount(parseFloat(e.target.value));
  };

  const resetTransferForm = () => {
    setTransferAccountNumber(null);
    setTransferAmount(null);
  };

  const handleTransferAccountNumber = (e) => {
    setTransferAccountNumber(parseInt(e.target.value.replace('.', '')));
  };

  const setUserIndex = (accountNumber) => {
    return userList.findIndex((u) => u.accountNumber === accountNumber);
  };

  const handleTransfer = (e) => {
    e.preventDefault();

    const transferUserIndex = setUserIndex(transferAccountNumber);

    if (transferUserIndex === -1) {
      alert(`danger`, `Failed!`, `User account number does not exist`);
    } else {
      const userIndex = userList.findIndex((obj) => obj.email === email);
      const user = userList[userIndex];
      const userPrevBalance = user.balance;
      const totalBalance = userPrevBalance - transferAmount;
      const transferUser = userList[transferUserIndex];
      const transferUserPrevBalance = transferUser.balance;
      const transferUserTotalBalance = transferUserPrevBalance + transferAmount;

      if (transferAmount > userPrevBalance) {
        alert(`danger`, `Failed!`, `User has insufficient balance`);
      } else {
        user.balance = totalBalance;
        transferUser.balance = transferUserTotalBalance;

        setDisplayBalance(
          totalBalance.toLocaleString('en-US', {
            style: 'currency',
            currency: 'PHP',
          })
        );

        localStorage.setItem('userList', JSON.stringify(userList));
        alert(`success`, `Success!`, `Money has been successfully transferred`);
      }
    }

    handleCloseTransfer();
    resetTransferForm();
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
        <div
          className="action-card"
          title="Transfer"
          onClick={handleShowTransfer}
        >
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
            <table className="budget-table budget-margin">
              <thead className="budget-table-header">
                <tr>
                  <th>Item</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tuition Fee</td>
                  <td>80,000.00</td>
                  <td>
                    <ActionsEditButton
                    // onClick={() => {
                    //   handleShowEdit(accountNumber);
                    // }}
                    />
                    <ActionsDeleteButton
                    // onClick={() => {
                    //   handleDelete(accountNumber);
                    // }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Tuition Fee</td>
                  <td>80,000.00</td>
                  <td>
                    <ActionsEditButton
                    // onClick={() => {
                    //   handleShowEdit(accountNumber);
                    // }}
                    />
                    <ActionsDeleteButton
                    // onClick={() => {
                    //   handleDelete(accountNumber);
                    // }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Tuition Fee</td>
                  <td>80,000.00</td>
                  <td>
                    <ActionsEditButton
                    // onClick={() => {
                    //   handleShowEdit(accountNumber);
                    // }}
                    />
                    <ActionsDeleteButton
                    // onClick={() => {
                    //   handleDelete(accountNumber);
                    // }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Tuition Fee</td>
                  <td>80,000.00</td>
                  <td>
                    <ActionsEditButton
                    // onClick={() => {
                    //   handleShowEdit(accountNumber);
                    // }}
                    />
                    <ActionsDeleteButton
                    // onClick={() => {
                    //   handleDelete(accountNumber);
                    // }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Tuition Fee</td>
                  <td>80,000.00</td>
                  <td>
                    <ActionsEditButton
                    // onClick={() => {
                    //   handleShowEdit(accountNumber);
                    // }}
                    />
                    <ActionsDeleteButton
                    // onClick={() => {
                    //   handleDelete(accountNumber);
                    // }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Tuition Fee</td>
                  <td>80,000.00</td>
                  <td>
                    <ActionsEditButton
                    // onClick={() => {
                    //   handleShowEdit(accountNumber);
                    // }}
                    />
                    <ActionsDeleteButton
                    // onClick={() => {
                    //   handleDelete(accountNumber);
                    // }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Tuition Fee</td>
                  <td>80,000.00</td>
                  <td>
                    <ActionsEditButton
                    // onClick={() => {
                    //   handleShowEdit(accountNumber);
                    // }}
                    />
                    <ActionsDeleteButton
                    // onClick={() => {
                    //   handleDelete(accountNumber);
                    // }}
                    />
                  </td>
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
      <UserTransferForm
        showTransfer={showTransfer}
        handleCloseTransfer={handleCloseTransfer}
        handleTransferAmount={handleTransferAmount}
        handleTransfer={handleTransfer}
        handleTransferAccountNumber={handleTransferAccountNumber}
        transferAmount={transferAmount}
        transferAccountNumber={transferAccountNumber}
      />
    </main>
  );
};

export default Home;

import React, { useEffect, useState, useRef } from 'react';
import * as BoxIcons from 'react-icons/bi';
import UserWithdrawForm from '../../Components/Form/UserWithdrawForm';
import UserDepositForm from '../../Components/Form/UserDepositForm';
import UserTransferForm from '../../Components/Form/UserTransferForm';
import UserAddExpenseForm from '../../Components/Form/UserAddExpenseForm';
import UserEditExpenseForm from '../../Components/Form/UserEditExpenseForm';
import ActionsEditButton from '../../Components/Button/ActionsEditButton';
import ActionsDeleteButton from '../../Components/Button/ActionsDeleteButton';
import Alert from '../../Components/Alert/Alert';

const EXPENSE_LIST = [
  {
    id: 1,
    item: `Tuition Fee`,
    amount: 80000.0,
  },
  {
    id: 2,
    item: `Electricity`,
    amount: 1000.0,
  },
];

const Home = ({ email, users }) => {
  const [userList, setUserList] = useState(users);
  const [showWithdraw, setShowWithdraw] = useState('none');
  const [withdrawAmount, setWithdrawAmount] = useState(null);
  const [showDeposit, setShowDeposit] = useState('none');
  const [depositAmount, setDepositAmount] = useState(null);
  const [showTransfer, setShowTransfer] = useState('none');
  const [accountNumber, setAccountNumber] = useState(null);
  const [transferAmount, setTransferAmount] = useState(null);
  const [transferAccountNumber, setTransferAccountNumber] = useState(null);
  const [displayBalance, setDisplayBalance] = useState('');
  const [expectedBalance, setExpectedBalance] = useState(null);
  const [showAddExpense, setShowAddExpense] = useState('none');
  const [transaction, setTransaction] = useState([]);
  const [showAlert, setShowAlert] = useState('none');
  const [alertType, setAlertType] = useState('');
  const [alertHeader, setAlertHeader] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [expenses, setExpense] = useState(EXPENSE_LIST);
  const [showEditExpense, setShowEditExpense] = useState('none');
  const [expenseId, setExpenseId] = useState('none');
  const [expenseTotal, setExpenseTotal] = useState('none');

  const withdrawAmountRef = useRef(null);
  const depositAmountRef = useRef(null);
  const transferAccountNumberRef = useRef(null);
  const transferAmountRef = useRef(null);

  const expenseItemAddRef = useRef(null);
  const expenseAmountAddRef = useRef(null);

  const expenseItemEditRef = useRef(null);
  const expenseAmountEditRef = useRef(null);

  useEffect(() => {
    const currentUser = userList.find((obj) => obj.email === email);

    setDisplayBalance(
      currentUser.balance.toLocaleString('en-US', {
        style: 'currency',
        currency: 'PHP',
      })
    );

    setAccountNumber(currentUser.accountNumber);

    setTransaction(JSON.parse(localStorage.getItem('transactionList')));

    let total = 0;

    expenses.forEach((element) => {
      total += element.amount;
    });

    setExpenseTotal(
      total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'PHP',
      })
    );

    let expected = currentUser.balance - total;

    setExpectedBalance(
      expected.toLocaleString('en-US', {
        style: 'currency',
        currency: 'PHP',
      })
    );
  }, [expenses, expectedBalance]);

  const handleAlert = (alertType, alertHeader, alertMessage) => {
    setAlertType(alertType);
    setAlertHeader(alertHeader);
    setAlertMessage(alertMessage);
    setShowAlert('block');
    setTimeout(handleCloseAlert, 5000);
  };

  const handleCloseAlert = () => {
    setShowAlert('none');
  };

  const updateTransactionListLocalStorage = (item) => {
    localStorage.setItem('transactionList', JSON.stringify(item));
  };

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
      handleAlert(`danger`, `Failed!`, `User has insufficient balance`);
    } else {
      userList[userIndex].balance = totalBalance;

      setDisplayBalance(
        totalBalance.toLocaleString('en-US', {
          style: 'currency',
          currency: 'PHP',
        })
      );

      localStorage.setItem('userList', JSON.stringify(userList));

      const referenceNumber = parseInt(new Date().getTime());
      const date = new Date().toLocaleString('en-US', {
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      const newTransaction = {
        referenceNumber: referenceNumber,
        accountNumber: accountNumber,
        email: userList[userIndex].email,
        firstName: userList[userIndex].firstName,
        lastName: userList[userIndex].lastName,
        date: date,
        description: 'Withdraw',
        amount: withdrawAmount,
        prevBalance: prevBalance,
        currentBalance: totalBalance,
      };

      setTransaction((state) => [newTransaction, ...state]);
      updateTransactionListLocalStorage([newTransaction, ...transaction]);
      handleAlert(
        `success`,
        `Success!`,
        `Money has been successfully withdrew`
      );
    }

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

    const referenceNumber = parseInt(new Date().getTime());
    const date = new Date().toLocaleString('en-US', {
      hour12: false,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    const newTransaction = {
      referenceNumber: referenceNumber,
      accountNumber: accountNumber,
      email: userList[userIndex].email,
      firstName: userList[userIndex].firstName,
      lastName: userList[userIndex].lastName,
      date: date,
      description: 'Deposit',
      amount: depositAmount,
      prevBalance: prevBalance,
      currentBalance: totalBalance,
    };

    setTransaction((state) => [newTransaction, ...state]);
    updateTransactionListLocalStorage([newTransaction, ...transaction]);

    setDisplayBalance(
      totalBalance.toLocaleString('en-US', {
        style: 'currency',
        currency: 'PHP',
      })
    );

    localStorage.setItem('userList', JSON.stringify(userList));
    handleAlert(`success`, `Success!`, `Money has been successfully deposited`);
    handleCloseDeposit();
    handleResetDepositForm();
  };

  const handleShowTransfer = () => setShowTransfer('block');

  const handleCloseTransfer = () => {
    setShowTransfer('none');
  };

  const handleTransferAmount = (e) => {
    setTransferAmount(parseFloat(e.target.value));
  };

  const resetTransferForm = () => {
    transferAccountNumberRef.current.value = '';
    transferAmountRef.current.value = '';
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
      handleAlert(`danger`, `Failed!`, `User account number does not exist`);
    } else {
      const userIndex = userList.findIndex((obj) => obj.email === email);
      const user = userList[userIndex];
      const userPrevBalance = user.balance;
      const totalBalance = userPrevBalance - transferAmount;
      const transferUser = userList[transferUserIndex];
      const transferUserPrevBalance = transferUser.balance;
      const transferUserTotalBalance = transferUserPrevBalance + transferAmount;

      if (transferAmount > userPrevBalance) {
        handleAlert(`danger`, `Failed!`, `User has insufficient balance`);
      } else {
        user.balance = totalBalance;
        transferUser.balance = transferUserTotalBalance;

        const referenceNumber = parseInt(new Date().getTime());
        const date = new Date().toLocaleString('en-US', {
          hour12: false,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        const newTransaction = {
          referenceNumber: referenceNumber,
          accountNumber: accountNumber,
          email: userList[userIndex].email,
          firstName: userList[userIndex].firstName,
          lastName: userList[userIndex].lastName,
          date: date,
          description: `${accountNumber} Transfer to ${userList[transferUserIndex].accountNumber}`,
          amount: transferAmount,
          prevBalance: userPrevBalance,
          currentBalance: totalBalance,
        };

        setTransaction((state) => [newTransaction, ...state]);
        updateTransactionListLocalStorage([newTransaction, ...transaction]);

        setDisplayBalance(
          totalBalance.toLocaleString('en-US', {
            style: 'currency',
            currency: 'PHP',
          })
        );

        localStorage.setItem('userList', JSON.stringify(userList));
        handleAlert(
          `success`,
          `Success!`,
          `Money has been successfully transferred`
        );
      }
    }

    resetTransferForm();
    handleCloseTransfer();
  };

  const handleShowAddExpense = () => {
    setShowAddExpense('block');
  };

  const handleCloseAddExpense = () => {
    setShowAddExpense('none');
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

  const displayAlert = () => {
    if (showAlert === 'block') {
      return (
        <Alert
          alertType={alertType}
          alertHeader={alertHeader}
          alertText={alertMessage}
          showAlert={showAlert}
          onClick={handleCloseAlert}
        />
      );
    }
  };

  const handleDeleteExpense = (id) => {
    const newExpenses = expenses.filter((u) => u.id !== id);

    setExpense(newExpenses);
    handleAlert(`success`, `Success!`, `Expense has been successfully deleted`);
  };

  const handleShowEditExpense = (id) => {
    setShowEditExpense('block');

    const expense = expenses.find((u) => u.id === id);

    expenseItemEditRef.current.value = expense.item;
    expenseAmountEditRef.current.value = expense.amount;

    setExpenseId(id);
  };

  const resetEditExenseForm = () => {
    expenseItemEditRef.current.value = '';
    expenseAmountEditRef.current.value = '';
  };

  const handleEditExpense = (e) => {
    e.preventDefault();

    const expenseIndex = expenses.findIndex(
      (u) => u.id === parseInt(expenseId)
    );

    expenses[expenseIndex].item = `${expenseItemEditRef.current.value}`;
    expenses[expenseIndex].amount = parseFloat(
      expenseAmountEditRef.current.value
    );

    handleAlert(`success`, `Success!`, `Expense has been successfully edited`);
    handleCloseEditExpense();
    resetEditExenseForm();
  };

  const resetAddExenseForm = () => {
    expenseItemAddRef.current.value = '';
    expenseAmountAddRef.current.value = '';
  };

  const handleAddExpense = (e) => {
    e.preventDefault();

    const newExpenseId = new Date().getTime();
    const expenseData = {
      id: parseInt(newExpenseId),
      item: expenseAmountAddRef.current.value,
      amount: parseFloat(expenseAmountAddRef.current.value),
    };

    setExpense((state) => [expenseData, ...state]);

    handleAlert(`success`, `Success!`, `Expense has been successfully created`);

    handleCloseAddExpense();
    resetAddExenseForm();
  };

  const handleCloseEditExpense = () => setShowEditExpense('none');

  return (
    <main>
      <h2 className="page-header">Home</h2>
      {displayAlert()}
      <div className="flex-center">
        <div className="balance-card">
          <div className="account-number-header-text">
            Account Number
            <div className="account-number-text">{accountNumber}</div>
          </div>
          <div className="balance-text">
            Balance
            <div className="balance-amount">{displayBalance}</div>
          </div>
          <div className="wallet-icon-container">
            <div className="wallet-icon">
              <div>
                <BoxIcons.BiWallet
                  style={{ color: 'var(--fourth-color)' }}
                  size={64}
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
          <button
            className="btn-create-user btn-primary"
            onClick={handleShowAddExpense}
          >
            Add Expense
          </button>
        </div>
      </div>
      <div className="flex-center">
        <div className="budget-container">
          <div className="budget-header-container">
            <div className="budget-header">
              <h2>Expenses: {expenseTotal}</h2>
            </div>
            <div className="budget-header"></div>
            <div className="budget-header">
              <h2>Expected Balance: {expectedBalance}</h2>
            </div>
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
                {expenses.map((val, key) => {
                  const { id, item, amount } = val;
                  const parseAmount = parseFloat(amount);
                  const localeStringAmount = parseAmount.toLocaleString(
                    'en-US',
                    {
                      style: 'currency',
                      currency: 'PHP',
                    }
                  );
                  return (
                    <tr>
                      <td>{item}</td>
                      <td>{localeStringAmount}</td>
                      <td>
                        <ActionsEditButton
                          onClick={() => {
                            handleShowEditExpense(id);
                          }}
                        />
                        <ActionsDeleteButton
                          onClick={() => {
                            handleDeleteExpense(id);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
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
        transferAmountRef={transferAmountRef}
        transferAccountNumberRef={transferAccountNumberRef}
      />
      <UserAddExpenseForm
        handleAddExpense={handleAddExpense}
        showAddExpense={showAddExpense}
        handleCloseAddExpense={handleCloseAddExpense}
        expenseItemAddRef={expenseItemAddRef}
        expenseAmountAddRef={expenseAmountAddRef}
      />
      <UserEditExpenseForm
        handleEditExpense={handleEditExpense}
        showEditExpense={showEditExpense}
        handleCloseEditExpense={handleCloseEditExpense}
        expenseItemEditRef={expenseItemEditRef}
        expenseAmountEditRef={expenseAmountEditRef}
      />
    </main>
  );
};

export default Home;

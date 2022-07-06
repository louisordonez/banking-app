import React, { useEffect, useRef, useState } from 'react';
import CreateUserButton from '../../Components/Button/CreateUserButton';
import UsersTable from '../../Components/Table/UsersTable';
import CreateUserForm from '../../Components/Form/CreateUserForm';
import EditUserForm from '../../Components/Form/EditUserForm';
import WithdrawForm from '../../Components/Form/WithdrawForm';
import DepositForm from '../../Components/Form/DepositForm';
import TransferForm from '../../Components/Form/TransferForm';
import Alert from '../../Components/Alert/Alert';

const Users = ({ userList }) => {
  const [users, setUsers] = useState(userList);
  const [accountNumber, setAccountNumber] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [balance, setBalance] = useState(null);
  const [withdrawAmount, setWithdrawAmount] = useState(null);
  const [depositAmount, setDepositAmount] = useState(null);
  const [transferAccountNumber, setTransferAccountNumber] = useState(null);
  const [transferAmount, setTransferAmount] = useState(null);
  const [showCreate, setShowCreate] = useState('none');
  const [showEdit, setShowEdit] = useState('none');
  const [showWithdraw, setShowWithdraw] = useState('none');
  const [showDeposit, setShowDeposit] = useState('none');
  const [showTransfer, setShowTransfer] = useState('none');
  const [showAlert, setShowAlert] = useState('none');
  const [alertType, setAlertType] = useState('');
  const [alertHeader, setAlertHeader] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [transaction, setTransaction] = useState([]);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const birthdateRef = useRef(null);
  const genderRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const balanceRef = useRef(null);
  const depositAmountRef = useRef(null);
  const withdrawAmountRef = useRef(null);
  const transferAccountNumberRef = useRef(null);
  const transferAmountRef = useRef(null);

  const accountNumberEditRef = useRef(null);
  const firstNameEditRef = useRef(null);
  const lastNameEditRef = useRef(null);
  const birthdateEditRef = useRef(null);
  const genderEditRef = useRef(null);
  const emailEditRef = useRef(null);
  const passwordEditRef = useRef(null);
  const balanceEditRef = useRef(null);

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem('userList')));
    setTransaction(JSON.parse(localStorage.getItem('transactionList')));
  }, []);

  const updateUserListLocalStorage = (item) => {
    localStorage.setItem('userList', JSON.stringify(item));
  };

  const updateTransactionListLocalStorage = (item) => {
    localStorage.setItem('transactionList', JSON.stringify(item));
  };

  const handleCloseAlert = () => {
    setShowAlert('none');
  };

  const handleAlert = (alertType, alertHeader, alertMessage) => {
    setAlertType(alertType);
    setAlertHeader(alertHeader);
    setAlertMessage(alertMessage);
    setShowAlert('block');
    setTimeout(handleCloseAlert, 5000);
  };

  const setUserIndex = (accountNumber) => {
    return users.findIndex((u) => u.accountNumber === accountNumber);
  };

  const handleSearch = (e) => {
    const accountNumberValue = e.target.value;

    const tr = document.querySelectorAll('[data-row]');
    const td = document.querySelectorAll('[data-account-number]');

    for (let i = 0; i < tr.length; i++) {
      let trValue = td[i].textContent;

      if (trValue.indexOf(accountNumberValue) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  };

  const handleShowCreate = () => setShowCreate('block');

  const handleCloseCreate = () => setShowCreate('none');

  const resetCreateUserForm = () => {
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    birthdateRef.current.value = '';
    genderRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
    balanceRef.current.value = '';
  };

  const handleCreateUser = (e) => {
    e.preventDefault();

    const newAccountNumber = new Date().getTime();
    const userData = {
      accountNumber: newAccountNumber,
      firstName: `${firstNameRef.current.value}`,
      lastName: `${lastNameRef.current.value}`,
      birthdate: `${birthdateRef.current.value}`,
      gender: `${genderRef.current.value}`,
      email: `${emailRef.current.value}`,
      password: `${passwordRef.current.value}`,
      balance: parseFloat(balanceRef.current.value),
      user: `user`,
    };
    const user = users.find((u) => u.email === emailRef.current.value);

    if (user !== undefined && user.email === emailRef.current.value) {
      handleAlert(`danger`, `Failed!`, `Email has already been taken`);
    } else {
      setUsers((state) => [userData, ...state]);
      updateUserListLocalStorage([userData, ...users]);
      handleAlert(`success`, `Success!`, `User has been successfully created`);
    }

    handleCloseCreate();
    resetCreateUserForm();
  };

  const displayBalanceLocaleString = (prevBalance) => {
    return prevBalance.toLocaleString('en-US', {
      style: 'currency',
      currency: 'PHP',
    });
  };

  const handleShowWithdraw = (accountNumber, firstName, lastName, balance) => {
    setShowWithdraw('block');
    setAccountNumber(accountNumber);
    setFirstName(firstName);
    setLastName(lastName);
    setBalance(displayBalanceLocaleString(balance));
  };

  const handleCloseWithdraw = () => setShowWithdraw('none');

  const handleWithdrawAmount = (e) => {
    setWithdrawAmount(parseFloat(e.target.value));
  };

  const resetWithdrawForm = () => {
    withdrawAmountRef.current.value = '';
  };

  const handleWithdraw = (e) => {
    e.preventDefault();

    const userIndex = setUserIndex(accountNumber);
    const user = users[userIndex];
    const userPrevBalance = user.balance;
    const totalBalance = userPrevBalance - withdrawAmount;

    if (withdrawAmount > userPrevBalance) {
      handleAlert(`danger`, `Failed!`, `User has insufficient balance`);
    } else {
      user.balance = totalBalance;

      updateUserListLocalStorage(users);

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
        firstName: firstName,
        lastName: lastName,
        date: date,
        description: 'Withdraw',
        amount: withdrawAmount,
        prevBalance: userPrevBalance,
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
    resetWithdrawForm();
  };

  const handleShowDeposit = (accountNumber, firstName, lastName, balance) => {
    setShowDeposit('block');
    setAccountNumber(accountNumber);
    setFirstName(firstName);
    setLastName(lastName);
    setBalance(displayBalanceLocaleString(balance));
  };

  const handleCloseDeposit = () => setShowDeposit('none');

  const handleDepositAmount = (e) => {
    setDepositAmount(parseFloat(e.target.value));
  };

  const resetDepositForm = () => {
    depositAmountRef.current.value = '';
  };

  const handleDeposit = (e) => {
    e.preventDefault();

    const userIndex = setUserIndex(accountNumber);
    const user = users[userIndex];
    const userPrevBalance = user.balance;
    const totalBalance = userPrevBalance + depositAmount;

    user.balance = totalBalance;

    updateUserListLocalStorage(users);

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
      firstName: firstName,
      lastName: lastName,
      date: date,
      description: 'Deposit',
      amount: depositAmount,
      prevBalance: userPrevBalance,
      currentBalance: totalBalance,
    };

    setTransaction((state) => [newTransaction, ...state]);
    updateTransactionListLocalStorage([newTransaction, ...transaction]);

    handleAlert(`success`, `Success!`, `Money has been successfully deposited`);
    handleCloseDeposit();
    resetDepositForm();
  };

  const handleShowTransfer = (accountNumber, firstName, lastName, balance) => {
    setShowTransfer('block');
    setAccountNumber(accountNumber);
    setFirstName(firstName);
    setLastName(lastName);
    setFullName(`${firstName} ${lastName}`);
    setBalance(displayBalanceLocaleString(balance));
  };

  const handleCloseTransfer = () => {
    setShowTransfer('none');
  };

  const handleTransferAccountNumber = (e) => {
    setTransferAccountNumber(parseInt(e.target.value.replace('.', '')));
  };

  const handleTransferAmount = (e) => {
    setTransferAmount(parseFloat(e.target.value));
  };

  const resetTransferForm = () => {
    transferAccountNumberRef.current.value = '';
    transferAmountRef.current.value = '';
  };

  const handleTransfer = (e) => {
    e.preventDefault();

    const transferUserIndex = setUserIndex(transferAccountNumber);

    if (transferUserIndex === -1) {
      handleAlert(`danger`, `Failed!`, `User account number does not exist`);
    } else {
      const userIndex = setUserIndex(accountNumber);
      const user = users[userIndex];
      const userPrevBalance = user.balance;
      const totalBalance = userPrevBalance - transferAmount;
      const transferUser = users[transferUserIndex];
      const transferUserPrevBalance = transferUser.balance;
      const transferUserTotalBalance = transferUserPrevBalance + transferAmount;

      if (transferAmount > userPrevBalance) {
        handleAlert(`danger`, `Failed!`, `User has insufficient balance`);
      } else {
        user.balance = totalBalance;
        transferUser.balance = transferUserTotalBalance;

        updateUserListLocalStorage(users);

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
          firstName: firstName,
          lastName: lastName,
          date: date,
          description: `${accountNumber} Transfer to ${transferUser.accountNumber}`,
          amount: transferAmount,
          prevBalance: userPrevBalance,
          currentBalance: totalBalance,
        };

        setTransaction((state) => [newTransaction, ...state]);
        updateTransactionListLocalStorage([newTransaction, ...transaction]);

        handleAlert(
          `success`,
          `Success!`,
          `Money has been successfully transferred`
        );
      }
    }

    handleCloseTransfer();
    resetTransferForm();
  };

  const handleShowEdit = (accountNumber) => {
    const user = users.find((u) => u.accountNumber === accountNumber);

    setShowEdit('block');

    accountNumberEditRef.current.value = accountNumber;
    firstNameEditRef.current.value = user.firstName;
    lastNameEditRef.current.value = user.lastName;
    birthdateEditRef.current.value = user.birthdate;
    genderEditRef.current.value = user.gender;
    emailEditRef.current.value = user.email;
    passwordEditRef.current.value = user.password;
    balanceEditRef.current.value = user.balance;
  };

  const handleCloseEdit = () => setShowEdit('none');

  const resetEditCreateUserForm = () => {
    accountNumberEditRef.current.value = '';
    firstNameEditRef.current.value = '';
    lastNameEditRef.current.value = '';
    birthdateEditRef.current.value = '';
    genderEditRef.current.value = '';
    emailEditRef.current.value = '';
    passwordEditRef.current.value = '';
    balanceEditRef.current.value = '';
  };

  const handleEditUser = (e) => {
    e.preventDefault();

    const userIndex = users.findIndex(
      (u) => u.accountNumber === parseInt(accountNumberEditRef.current.value)
    );
    const user = users.find(
      (u) => u.accountNumber === parseInt(accountNumberEditRef.current.value)
    );
    const existingUser = users.find(
      (u) => u.email === emailEditRef.current.value
    );

    if (user !== undefined) {
      if (
        existingUser !== undefined &&
        parseInt(existingUser.accountNumber) !== users[userIndex].accountNumber
      ) {
        handleAlert(`danger`, `Failed!`, `Email has already been taken`);
      } else {
        users[userIndex].firstName = `${firstNameEditRef.current.value}`;
        users[userIndex].lastName = `${lastNameEditRef.current.value}`;
        users[userIndex].birthdate = `${birthdateEditRef.current.value}`;
        users[userIndex].gender = `${genderEditRef.current.value}`;
        users[userIndex].email = `${emailEditRef.current.value}`;
        users[userIndex].password = `${passwordEditRef.current.value}`;
        users[userIndex].balance = parseFloat(balanceEditRef.current.value);

        updateUserListLocalStorage(users);
        handleAlert(`success`, `Success!`, `User has been successfully edited`);
      }
    }

    handleCloseEdit();
    resetEditCreateUserForm();
  };

  const handleDelete = (accountNumber) => {
    if (accountNumber === 1656904372) {
      handleAlert(`danger`, `Failed!`, `Admin user cannot be deleted`);
    } else {
      const newUsers = users.filter((u) => u.accountNumber !== accountNumber);

      setUsers(newUsers);
      updateUserListLocalStorage(newUsers);
      handleAlert(`success`, `Success!`, `User has been successfully deleted`);
    }
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

  return (
    <main>
      <h2 className="page-header">Users</h2>
      {displayAlert()}
      <div className="user-container">
        <CreateUserButton
          textValue={`Create User`}
          onClick={handleShowCreate}
        />
        <div className="flex-center table-whole">
          <UsersTable
            handleSearch={handleSearch}
            users={users}
            handleShowWithdraw={handleShowWithdraw}
            handleShowDeposit={handleShowDeposit}
            handleShowTransfer={handleShowTransfer}
            handleShowEdit={handleShowEdit}
            handleDelete={handleDelete}
          />
        </div>
        <CreateUserForm
          showCreate={showCreate}
          handleCreateUser={handleCreateUser}
          firstNameRef={firstNameRef}
          lastNameRef={lastNameRef}
          birthdateRef={birthdateRef}
          genderRef={genderRef}
          emailRef={emailRef}
          passwordRef={passwordRef}
          balanceRef={balanceRef}
          handleCloseCreate={handleCloseCreate}
        />
        <EditUserForm
          showEdit={showEdit}
          handleEditUser={handleEditUser}
          accountNumberEditRef={accountNumberEditRef}
          firstNameEditRef={firstNameEditRef}
          lastNameEditRef={lastNameEditRef}
          birthdateEditRef={birthdateEditRef}
          genderEditRef={genderEditRef}
          emailEditRef={emailEditRef}
          passwordEditRef={passwordEditRef}
          balanceEditRef={balanceEditRef}
          handleCloseEdit={handleCloseEdit}
        />
        <WithdrawForm
          showWithdraw={showWithdraw}
          handleWithdraw={handleWithdraw}
          accountNumber={accountNumber}
          firstName={firstName}
          lastName={lastName}
          balance={balance}
          withdrawAmountRef={withdrawAmountRef}
          handleWithdrawAmount={handleWithdrawAmount}
          handleCloseWithdraw={handleCloseWithdraw}
        />
        <DepositForm
          showDeposit={showDeposit}
          handleDeposit={handleDeposit}
          accountNumber={accountNumber}
          firstName={firstName}
          lastName={lastName}
          balance={balance}
          depositAmountRef={depositAmountRef}
          handleDepositAmount={handleDepositAmount}
          handleCloseDeposit={handleCloseDeposit}
        />
        <TransferForm
          showTransfer={showTransfer}
          handleTransfer={handleTransfer}
          fullName={fullName}
          balance={balance}
          handleTransferAccountNumber={handleTransferAccountNumber}
          transferAccountNumberRef={transferAccountNumberRef}
          handleTransferAmount={handleTransferAmount}
          transferAmountRef={transferAmountRef}
          handleCloseTransfer={handleCloseTransfer}
        />
      </div>
    </main>
  );
};

export default Users;

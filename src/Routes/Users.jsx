import React, { useRef, useState } from 'react';
import CreateUserButton from '../Components/Button/CreateUserButton';
import UsersTable from '../Components/Table/UsersTable';
import CreateUserForm from '../Components/Form/CreateUserForm';
import EditUserForm from '../Components/Form/EditUserForm';
import WithdrawForm from '../Components/Form/WithdrawForm';
import DepositForm from '../Components/Form/DepositForm';
import TransferForm from '../Components/Form/TransferForm';

const USER_LIST = [
  {
    accountNumber: 1656480543042,
    firstName: 'John',
    lastName: 'Doe',
    birthdate: '1997-06-22',
    gender: 'Male',
    email: 'jd@email.com',
    password: 'jd',
    balance: 15000000.0,
  },
  {
    accountNumber: 2656480543188,
    firstName: 'Maria',
    lastName: 'Dela Cruz',
    birthdate: '1998-12-11',
    gender: 'Female',
    email: 'mdc@email.com',
    password: 'mdc',
    balance: 20000000.0,
  },
];

const Users = () => {
  const [users, setUsers] = useState(USER_LIST);
  const [accountNumber, setAccountNumber] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [balance, setBalance] = useState(null);
  const [withdrawAmount, setWithdrawAmount] = useState(null);
  const [depositAmount, setDepositAmount] = useState(null);
  const [transferAmount, setTransferAmount] = useState(null);
  const [transferAccountNumber, setTransferAccountNumber] = useState(null);
  const [showCreate, setShowCreate] = useState('none');
  const [showEdit, setShowEdit] = useState('none');
  const [showWithdraw, setShowWithdraw] = useState('none');
  const [showDeposit, setShowDeposit] = useState('none');
  const [showTransfer, setShowTransfer] = useState('none');

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const birthdateRef = useRef(null);
  const genderRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const balanceRef = useRef(null);
  const withdrawAmountRef = useRef(null);
  const depositAmountRef = useRef(null);
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

  const setUserIndex = (accountNumber) => {
    return users.findIndex((u) => u.accountNumber === accountNumber);
  };

  const handleSearch = (e) => {
    const tr = document.querySelectorAll('[data-row]');
    const td = document.querySelectorAll('[data-account-number]');

    for (let i = 0; i < tr.length; i++) {
      let trValue = td[i].textContent;

      if (trValue.toUpperCase().indexOf(e.target.value) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  };

  const handleShowCreate = () => setShowCreate('block');

  const handleCloseCreate = () => setShowCreate('none');

  const handleCreateUser = (userData) => {
    const newAccountNumber = new Date().getTime();

    setUsers((state) => [
      {
        accountNumber: newAccountNumber,
        firstName: `${userData.firstName}`,
        lastName: `${userData.lastName}`,
        birthdate: `${userData.birthdate}`,
        gender: `${userData.gender}`,
        email: `${userData.email}`,
        password: `${userData.password}`,
        balance: `${userData.balance}`,
      },
      ...state,
    ]);
  };

  const resetCreateUserForm = () => {
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    birthdateRef.current.value = '';
    genderRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
    balanceRef.current.value = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      firstName: `${firstNameRef.current.value}`,
      lastName: `${lastNameRef.current.value}`,
      birthdate: `${birthdateRef.current.value}`,
      gender: `${genderRef.current.value}`,
      email: `${emailRef.current.value}`,
      password: `${passwordRef.current.value}`,
      balance: `${balanceRef.current.value}`,
    };

    handleCreateUser(userData);
    alert(`User create success`);
    handleCloseCreate();
    resetCreateUserForm();
  };

  const handleShowWithdraw = (accountNumber, firstName, lastName, balance) => {
    setShowWithdraw('block');
    setAccountNumber(accountNumber);
    setFirstName(firstName);
    setLastName(lastName);
    setBalance(balance);
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
    const userPrevBalance = users[userIndex].balance;
    const totalBalance = userPrevBalance - withdrawAmount;

    users[userIndex].balance = totalBalance;

    alert(`Withdraw success`);
    handleCloseWithdraw();
    resetWithdrawForm();
  };

  const handleShowDeposit = (accountNumber, firstName, lastName, balance) => {
    setShowDeposit('block');
    setAccountNumber(accountNumber);
    setFirstName(firstName);
    setLastName(lastName);
    setBalance(balance);
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
    const userPrevBalance = users[userIndex].balance;
    const totalBalance = userPrevBalance + depositAmount;

    users[userIndex].balance = totalBalance;

    alert(`Deposit success`);
    handleCloseDeposit();
    resetDepositForm();
  };

  const handleShowTransfer = (accountNumber, firstName, lastName, balance) => {
    setShowTransfer('block');
    setAccountNumber(accountNumber);
    setFirstName(firstName);
    setLastName(lastName);
    setFullName(`${firstName} ${lastName}`);
    setBalance(balance);
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
      alert(`Account number does not exist`);
      return false;
    } else {
      const userIndex = setUserIndex(accountNumber);
      const userPrevBalance = users[userIndex].balance;
      const totalBalance = userPrevBalance - transferAmount;

      users[userIndex].balance = totalBalance;

      const transferUserPrevBalance = users[transferUserIndex].balance;
      const transferUserTotalBalance = transferUserPrevBalance + transferAmount;

      users[transferUserIndex].balance = transferUserTotalBalance;

      alert(`Transfer success`);
      handleCloseTransfer();
      resetTransferForm();
    }
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

  const handleEditUser = (userIndex) => {
    users[userIndex].firstName = `${firstNameEditRef.current.value}`;
    users[userIndex].lastName = `${lastNameEditRef.current.value}`;
    users[userIndex].birthdate = `${birthdateEditRef.current.value}`;
    users[userIndex].gender = `${genderEditRef.current.value}`;
    users[userIndex].email = `${emailEditRef.current.value}`;
    users[userIndex].password = `${passwordEditRef.current.value}`;
    users[userIndex].balance = `${balanceEditRef.current.value}`;
  };

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

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const accountNumberInt = parseInt(accountNumberEditRef.current.value);

    const userIndex = users.findIndex(
      (u) => u.accountNumber === accountNumberInt
    );

    handleEditUser(userIndex);
    handleCloseEdit();
    resetEditCreateUserForm();
    alert(`User edit success`);
  };

  const handleDelete = (accountNumber) => {
    const newUsers = users.filter((u) => u.accountNumber !== accountNumber);

    setUsers(newUsers);
    alert(`User delete success`);
  };

  return (
    <>
      <div className="user-container">
        <CreateUserButton
          textValue={`Create User`}
          onClick={handleShowCreate}
        />
        <div className="flex-center">
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
          handleSubmit={handleSubmit}
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
          handleEditSubmit={handleEditSubmit}
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
    </>
  );
};

export default Users;

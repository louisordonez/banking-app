import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as BoxIcons from 'react-icons/bi';

const Dashboard = ({ userList, transactionList }) => {
  const [totalUsers, setTotalUsers] = useState(null);
  const [users, SetUsers] = useState(userList);
  const [transactions, setTransactions] = useState(transactionList);
  const [totalBalance, setTotalBalance] = useState('');

  useEffect(() => {
    const userList = JSON.parse(localStorage.getItem('userList'));

    setTotalUsers(userList.length);

    let total = 0;

    userList.forEach((element) => {
      total += element.balance;
    });

    setTotalBalance(
      total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'PHP',
      })
    );
  }, []);

  return (
    <main>
      <h2 className="page-header">Dashboard</h2>
      <div className="align-items-center page-header">
        <Link
          to="/users"
          className="dashboard-box primary-box"
          style={{ width: '30%' }}
        >
          <div className="box-header">
            <div className="align-items-center">
              <BoxIcons.BiUser size={32} />
              <span style={{ fontSize: '18px', marginLeft: '12px' }}>
                Total Users
              </span>
            </div>
            <div className="box-text">
              <span>{totalUsers}</span>
            </div>
          </div>
        </Link>
        <Link to="/transactions" className="dashboard-box primary-box">
          <div className="box-header">
            <div className="align-items-center">
              <BoxIcons.BiMoney size={32} />
              <span style={{ fontSize: '18px', marginLeft: '12px' }}>
                Total Balance
              </span>
            </div>
          </div>
          <div className="box-text">
            <span>{totalBalance}</span>
          </div>
        </Link>
      </div>
      <div className="recent-table">
        <div className="recent-table-container">
          <Link to="/transactions" className="see-all-link">
            See All
          </Link>
          <div className="budget-header">
            <h2>Recent Transactions</h2>
          </div>
          <div>
            <table className="budget-table budget-margin">
              <thead className="budget-table-header">
                <tr>
                  <th>Reference Number</th>
                  <th>Date</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((val, key) => {
                  const { referenceNumber, date, description } = val;

                  return (
                    <tr key={key}>
                      <td>{referenceNumber}</td>
                      <td>{date}</td>
                      <td>{description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="recent-table-container">
          <Link to="/users" className="see-all-link">
            See All
          </Link>
          <div className="budget-header">
            <h2>Recent Users</h2>
          </div>
          <div>
            <table className="budget-table budget-margin">
              <thead className="budget-table-header">
                <tr>
                  <th>Account Number</th>
                  <th>Name</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {users.map((val, key) => {
                  const { accountNumber, firstName, lastName, balance } = val;
                  const fullName = `${firstName} ${lastName}`;
                  const parseBalance = parseFloat(balance);

                  const localeStringBalance = parseBalance.toLocaleString(
                    'en-US',
                    {
                      style: 'currency',
                      currency: 'PHP',
                    }
                  );
                  return (
                    <tr key={key}>
                      <td>{accountNumber}</td>
                      <td>{fullName}</td>
                      <td>{localeStringBalance}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

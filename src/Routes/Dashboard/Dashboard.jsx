import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as BoxIcons from 'react-icons/bi';

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(null);
  const [totalBalance, setTotalBalance] = useState(null);

  useEffect(() => {
    const userList = JSON.parse(localStorage.getItem('userList'));

    setTotalUsers(userList.length);

    let total = 0;

    userList.forEach((element) => {
      total += element.balance;
    });

    setTotalBalance(total);
  }, []);

  return (
    <>
      <h2 className="page-header">Dashboard</h2>
      <div className="align-items-center page-header">
        <Link to="/users" className="dashboard-box primary-box">
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
        <Link to="/transactions" className="dashboard-box secondary-box">
          <div className="box-header">
            <div className="align-items-center">
              <BoxIcons.BiMoney size={32} />
              <span style={{ fontSize: '18px', marginLeft: '12px' }}>
                Total Balance
              </span>
            </div>
          </div>
          <div className="box-text">
            <span>
              {totalBalance.toLocaleString('en-US', {
                style: 'currency',
                currency: 'PHP',
              })}
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;

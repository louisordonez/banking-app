import React from 'react';
import { Link } from 'react-router-dom';
import * as BoxIcons from 'react-icons/bi';

const Dashboard = () => {
  return (
    <>
      <h2 className="page-header">Dashboard</h2>
      <div className="align-items-center page-header">
        <Link to="/users" className="dashboard-box green-box">
          <div className="box-header">
            <div className="align-items-center">
              <BoxIcons.BiUser size={32} />
              <span style={{ fontSize: '18px', marginLeft: '12px' }}>
                Total Users
              </span>
            </div>
            <div className="box-text">
              <span>100</span>
            </div>
          </div>
        </Link>
        <Link to="/transactions" className="dashboard-box green-box">
          <div className="box-header">
            <div className="align-items-center">
              <BoxIcons.BiMoney size={32} />
              <span style={{ fontSize: '18px', marginLeft: '12px' }}>
                Total Balance
              </span>
            </div>
          </div>
          <div className="box-text">
            <span>100.00</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;

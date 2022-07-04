import React from 'react';

const Home = () => {
  return (
    <main>
      <h2 className="page-header">Home</h2>
      <div className="budget-app-content">
        <div className="budget-app-container">
          <h2 className="budget-header">Budget App</h2>
          <p className="description">Track your Expenses</p>
          <button className="budget-btn">Add Budget</button>
          <p className="balance-text">My Balance</p>
          <p className="amount-text">1000</p>
        </div>
      </div>
    </main>
  );
};

export default Home;

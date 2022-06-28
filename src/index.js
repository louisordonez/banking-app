import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './Routes/Dashboard';
import Users from './Routes/Users';
import Transactions from './Routes/Transactions';
import Settings from './Routes/Settings';
import './Assets/Styles/Scss/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="Users" element={<Users />} />
      <Route path="Transactions" element={<Transactions />} />
      <Route path="Settings" element={<Settings />} />
    </Routes>
  </BrowserRouter>
);

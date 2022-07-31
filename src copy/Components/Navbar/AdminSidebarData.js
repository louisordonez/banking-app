import React from 'react';
import * as BoxIcons from 'react-icons/bi';

export const AdminSidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <BoxIcons.BiCategoryAlt />,
    cName: 'nav-text',
  },
  {
    title: 'Users',
    path: 'users',
    icon: <BoxIcons.BiUser />,
    cName: 'nav-text',
  },
  {
    title: 'Transactions',
    path: 'transactions',
    icon: <BoxIcons.BiMoney />,
    cName: 'nav-text',
  },
  {
    title: 'Settings',
    path: 'settings',
    icon: <BoxIcons.BiCog />,
    cName: 'nav-text',
  },
];

import React from 'react';
import * as BoxIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <BoxIcons.BiCategoryAlt />,
    cName: 'nav-text',
  },
  {
    title: 'Users',
    path: 'Users',
    icon: <BoxIcons.BiUser />,
    cName: 'nav-text',
  },
  {
    title: 'Transactions',
    path: 'Transactions',
    icon: <BoxIcons.BiMoney />,
    cName: 'nav-text',
  },
  {
    title: 'Settings',
    path: 'Settings',
    icon: <BoxIcons.BiCog />,
    cName: 'nav-text',
  },
];

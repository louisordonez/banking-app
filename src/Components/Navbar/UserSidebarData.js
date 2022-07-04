import React from 'react';
import * as BoxIcons from 'react-icons/bi';

export const UserSidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <BoxIcons.BiHome />,
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

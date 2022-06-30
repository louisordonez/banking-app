import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as BoxIcons from 'react-icons/bi';

const SidebarData = [
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

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <BoxIcons.BiMenu onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <BoxIcons.BiX />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

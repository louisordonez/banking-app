import React, { useState } from 'react';
import * as BoxIcons from 'react-icons/bi';
import * as SimpleIcons from 'react-icons/si';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

const Navbar = ({ handleLogOut }) => {
  document.body.classList.add('default');
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const expandBody = () => {
    document.body.classList.toggle('expanded');
  };

  return (
    <>
      <div className={sidebar ? 'l-navbar show' : 'l-navbar'} id="navbar">
        <nav className="nav">
          <div>
            <Link to="/" className="nav-logo">
              <i>
                <SimpleIcons.SiWebmoney className="nav-logo-icon" />
              </i>
              <span className="nav-logo-text">Banking</span>
            </Link>
            <div
              className={sidebar ? 'nav-toggle rotate' : 'nav-toggle'}
              id="nav-toggle"
              onClick={() => {
                showSidebar();
                expandBody();
              }}
            >
              <BoxIcons.BiChevronRight />
            </div>
            <ul className="nav-list">
              {SidebarData.map((item, index) => {
                return (
                  <Link to={item.path} key={index} className="nav-link active">
                    <i className="nav-icon">{item.icon}</i>
                    <span className={item.cName}>{item.title}</span>
                  </Link>
                );
              })}
            </ul>
          </div>
          <Link to="/" className="nav-link active" onClick={handleLogOut}>
            <i className="nav-icon">
              <BoxIcons.BiLogOut />
            </i>
            <span className="nav-text">Log&nbsp;Out</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

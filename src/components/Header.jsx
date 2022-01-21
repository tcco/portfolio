import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <div>
      <NavLink
        className={({ isActive }) => (isActive ? 'is-active' : 'none')}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'is-active' : 'none')}
        to="/portfolio"
      >
        Portfolio
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'is-active' : 'none')}
        to="/contact"
      >
        Contact
      </NavLink>
    </div>
  </header>
);

export default Header;

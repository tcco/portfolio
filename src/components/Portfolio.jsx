import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
  <div>
    This is from my portfolio
    <ul>
      <Link
        className={({ isActive }) => (isActive ? 'is-active' : 'none')}
        to="/portfolio/1"
      >
        Portfolio 1
      </Link>
    </ul>
    <ul>
      <Link
        className={({ isActive }) => (isActive ? 'is-active' : 'none')}
        to="/portfolio/2"
      >
        Portfolio 2
      </Link>
    </ul>
  </div>
);

export default Portfolio;

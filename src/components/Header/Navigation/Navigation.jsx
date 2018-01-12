import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li className="active">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/reports">Reports</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;

import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li>
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
      </li>
      <li>
        <NavLink to="/reports" exact activeClassName="active">Reports</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;

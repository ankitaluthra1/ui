import React from 'react';
import './header.scss';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import AccountControl from './AccountControl/AccountControl';

const Header = () => (
  <header className="header">
    <Logo />
    <Navigation />
    <AccountControl />
  </header>
);

export default Header;

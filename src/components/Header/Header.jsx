import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

const Header = props => <header className="header">{props.children}</header>;

Header.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Header;

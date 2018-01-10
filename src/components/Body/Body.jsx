import React from 'react';
import PropTypes from 'prop-types';
import './body.css';

const Body = props => <div>{props.children}</div>;

Body.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Body;

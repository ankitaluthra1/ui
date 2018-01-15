import React from 'react';
import PropTypes from 'prop-types';
import './body.scss';

const Body = props => <div className="layout-wrapper">{props.children}</div>;

Body.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Body;

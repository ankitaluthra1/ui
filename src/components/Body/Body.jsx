import React from 'react';
import PropTypes from 'prop-types';

export default class Body extends React.Component {
  render() {
    return (<div>{this.props.children}</div>);
  }
}

Body.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

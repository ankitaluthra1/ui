import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';

const RequestList = props => (
  <div className="request-list">
    <h4 className="request-list__header">{props.status}</h4>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
);

RequestList.propTypes = {
  status: PropTypes.string.isRequired,
};

export default RequestList;

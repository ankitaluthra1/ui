import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';

const RequestList = (props) => {
  return (
    <div className="request-list">
      <div className="request-list__header">
        {props.status}
      </div>
      <div className="request-list__body">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};

RequestList.propTypes = {
  status: PropTypes.string.isRequired,
};

export default RequestList;

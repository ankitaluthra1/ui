import React from 'react';
import RequestList from './RequestList';

const RequestsContainer = () => (
  <div className="request-container">
    <RequestList status="DRAFT"/>
    <RequestList status="NEW"/>
    <RequestList status="SUBMITTED"/>
    <RequestList status="PENDING"/>
  </div>
);

export default RequestsContainer;

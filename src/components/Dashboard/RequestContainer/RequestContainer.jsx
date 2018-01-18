import React from 'react';
import RequestList from './RequestList';

const RequestsContainer = () => (
  <div className="row">
    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
      <div className="box">
        <RequestList status="DRAFTS"/>
      </div>
    </div>
    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
      <div className="box">
        <RequestList status="NEW"/>
      </div>
    </div>
    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
      <div className="box">
        <RequestList status="SUBMITTED"/>
      </div>
    </div>
    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
      <div className="box">
        <RequestList status="PENDING"/>
      </div>
    </div>
  </div>
);

export default RequestsContainer;

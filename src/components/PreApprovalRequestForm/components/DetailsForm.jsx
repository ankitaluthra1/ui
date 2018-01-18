import React from 'react';
import {Field} from 'redux-form';

const DetailsForm = () => (
  <div>
    <h1>Details</h1>
    <div className="requestor-name">
      <label htmlFor="requestPurpose">
        Purpose of Entertainment
        <Field name="requestPurpose" type="text" component="input" />
      </label>
    </div>
    <div className="requestor-name">
      <label htmlFor="requestDescription">
        Describe purpose of Entertainment
        <Field name="requestDescription" type="text" component="input" />
      </label>
    </div>
    <div className="requestor-name">
      <label htmlFor="requestType">
        Select Type
        <Field name="requestType" type="text" component="input" />
      </label>
    </div>
    <div className="requestor-name">
      <label htmlFor="requestCost">
        Cost Per Person for Gift
        <Field name="requestCost" type="text" component="input" />
      </label>
    </div>
    <div className="requestor-name">
      <label htmlFor="requestDescription">
        Describe Gift Type
        <Field name="requestDescription" type="text" component="input" />
      </label>
    </div>
    <hr />
  </div>
);

export default DetailsForm;


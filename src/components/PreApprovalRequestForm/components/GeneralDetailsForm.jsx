import React from 'react';
import {Field} from 'redux-form';

const GeneralDetailsForm = () =>
  (
    <div>
      <h1>General</h1>
      <div className="requestor-name">
        <label htmlFor="requestorPid">
          Name of requester
          <Field name="requestorPid" type="text" component="input" />
        </label>
      </div>
      <div className="requestor-name">
        <label htmlFor="currency">
          Currency
          <Field name="currency" type="text" component="input" />
        </label>
      </div>
      <div className="requestor-name">
        <label htmlFor="requestMode">
          Are you Giving or Receiving?
          <Field name="requestMode" type="text" component="input" />
        </label>
      </div>
      <div className="requestor-name">
        <label htmlFor="type">
          Select Type
          <Field name="type" type="text" component="input" />
        </label>
      </div>
      <div className="requestor-name">
        <label htmlFor="country">
          Country
          <Field name="country" type="text" component="input" />
        </label>
      </div>
      <div className="requestor-name">
        <label htmlFor="division">
          divsion
          <Field name="division" type="text" component="input" />
        </label>
      </div>
      <div className="requestor-name">
        <label htmlFor="csLegalEntity">
          csLegalEntity
          <Field name="csLegalEntity" type="text" component="input" />
        </label>
      </div>
      <div className="requestor-name">
        <label htmlFor="proposedStartDate">
          Proposed Start Date
          <Field name="proposedStartDate" type="text" component="input" />
        </label>
      </div>
      <div className="requestor-name">
        <label htmlFor="proposedEndDate">
          Proposed End Date
          <Field name="proposedEndDate" type="text" component="input" />
        </label>
      </div>
      <hr />
    </div>
  );

export default GeneralDetailsForm;

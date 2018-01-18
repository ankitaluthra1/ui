import React from 'react';
import {Field} from 'redux-form';

const BusinessContactsForm = () =>
  (
    <div>
      <h1>Tab 3</h1>
      <div className="requestor-name">
        <label>External Participant</label>
        <Field
          name="externalParticipant"
          type="text"
          component="input"
          label="External Participant"
        />
      </div>
      <hr />
    </div>
  );

export default BusinessContactsForm;

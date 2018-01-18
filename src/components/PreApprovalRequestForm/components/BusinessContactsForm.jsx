import React from 'react';
import {Field} from 'redux-form';

class BusinessContactsForm extends React.Component {
  render() {
    return (
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
  }
}

export default BusinessContactsForm;

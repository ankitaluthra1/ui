import React from 'react';
import {Field, reduxForm} from 'redux-form';

class PreApprovalRequestBusinessContactsForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Tab 3</h1>
        <div className="requestor-name">
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

export default PreApprovalRequestBusinessContactsForm;

reduxForm({
  form: 'PreApprovalRequestForm',
  destroyOnUnmount: false,
})(PreApprovalRequestBusinessContactsForm);

import React from 'react';
import {Field, reduxForm} from 'redux-form';

class PreApprovalRequestGeneralDetailsForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Tab 1</h1>
        <div className="requestor-name">
          <label>Name of requester</label>
          <Field name="nameOfRequester" type="text" component="input" />
        </div>
        <hr/>
      </div>
    );
  }
}

reduxForm({
  form: 'PreApprovalRequestForm',
  destroyOnUnmount: false,
})(PreApprovalRequestGeneralDetailsForm);

export default PreApprovalRequestGeneralDetailsForm;

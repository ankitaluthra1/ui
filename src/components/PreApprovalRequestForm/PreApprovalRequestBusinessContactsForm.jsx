import React from 'react';
import {Field, reduxForm} from 'redux-form';

class PreApprovalRequestBusinessContactsForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Tab 3</h1>
        <div className="requestor-name">
          <label>Entity</label>
          <Field name="entity" type="text" component="input" />
        </div>
        <hr />
      </div>
    );
  }
}

export default reduxForm({
  form: 'PreApprovalRequestForm',
  destroyOnUnmount: false,
})(PreApprovalRequestBusinessContactsForm);

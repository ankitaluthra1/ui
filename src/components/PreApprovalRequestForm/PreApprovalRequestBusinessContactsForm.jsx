import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './validate';

const renderField = ({
  input, label, type, meta: {touched, error},
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {error && <span>{error}</span>}
    </div>
  </div>
);

class PreApprovalRequestBusinessContactsForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Tab 3</h1>
        <div className="requestor-name">
          <Field name="email" type="email" component={renderField} label="Entity - email" />
        </div>
        <hr />
      </div>
    );
  }
}

const initialValues = {
  email: 'A',
};

export default reduxForm({
  form: 'PreApprovalRequestForm',
  destroyOnUnmount: false,
  validate,
  initialValues,
})(PreApprovalRequestBusinessContactsForm);

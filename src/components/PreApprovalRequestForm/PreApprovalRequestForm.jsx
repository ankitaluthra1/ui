import React from 'react';
import PropTypes from 'prop-types';
import PreApprovalRequestGeneralDetailsForm from './PreApprovalRequestGeneralDetailsForm';
import PreApprovalRequestDetailsForm from './PreApprovalRequestDetailsForm';
import PreApprovalRequestBusinessContactsForm from './PreApprovalRequestBusinessContactsForm';

export default class PreApprovalRequestForm extends React.Component {
  render() {
    const {handleSubmit, onSubmit} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <PreApprovalRequestGeneralDetailsForm />
          <PreApprovalRequestDetailsForm />
          <PreApprovalRequestBusinessContactsForm />
          <button type="submit">Submit</button>
        </form>
      </div>

    );
  }
}

PreApprovalRequestForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

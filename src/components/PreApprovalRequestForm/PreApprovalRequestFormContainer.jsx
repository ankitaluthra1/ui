import {reduxForm} from 'redux-form';
import PreApprovalRequestForm from './PreApprovalRequestForm';
import {submitRequestForm} from './preApprovalRequestFormActions';

const PreApprovalRequestFormContainer = reduxForm({
  form: 'PreApprovalRequestForm',
  onSubmit: submitRequestForm,
})(PreApprovalRequestForm);

export default PreApprovalRequestFormContainer;

import {reduxForm} from 'redux-form';
import PreApprovalRequestForm from './PreApprovalRequestForm';
import {submitRequestForm} from './requestFormActions';

const PreApprovalRequestFormContainer = reduxForm({
  form: 'RequestForm',
  onSubmit: submitRequestForm,
})(PreApprovalRequestForm);

export default PreApprovalRequestFormContainer;

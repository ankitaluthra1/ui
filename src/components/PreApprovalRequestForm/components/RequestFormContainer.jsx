import {reduxForm} from 'redux-form';
import PreApprovalRequestForm from './RequestForm';
import {submitRequestForm} from '../actions/actions';

const PreApprovalRequestFormContainer = reduxForm({
  form: 'PreApprovalRequestForm',
  onSubmit: submitRequestForm,
})(PreApprovalRequestForm);

export default PreApprovalRequestFormContainer;

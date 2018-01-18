import {reduxForm} from 'redux-form';
import PreApprovalRequestForm from './RequestForm';
import {submitRequestForm} from '../actions/actions';

const RequestFormContainer = reduxForm({
  form: 'PreApprovalRequestForm',
  onSubmit: submitRequestForm,
})(PreApprovalRequestForm);

export default RequestFormContainer;

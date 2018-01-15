import {reduxForm} from 'redux-form';
import RequestForm from './RequestForm';
import {submitRequestForm} from './requestFormActions';

const RequestFormContainer = reduxForm({
  form: 'RequestForm',
  onSubmit: submitRequestForm,
})(RequestForm);

export default RequestFormContainer;

import {reduxForm} from 'redux-form';
import RequestForm from './RequestForm';

const RequestFormContainer = reduxForm({
  form: 'RequestForm',
  onSubmit: values => console.log(values),
})(RequestForm);

export default RequestFormContainer;

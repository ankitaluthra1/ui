import * as requestService from '../../services/requestService';

// TODO: Fix format for action string

export const PreApprovalRequestForActions = {
  REQUEST_FORM_SUBMISSION_STARTED: 'REQUEST_FORM_SUBMISSION_STARTED',
  REQUEST_FORM_SUBMISSION_SUCCESSFUL: 'REQUEST_FORM_SUBMISSION_SUCCESSFUL',
  REQUEST_FORM_SUBMISSION_FAILED: 'REQUEST_FORM_SUBMISSION_FAILED',
};

const requestFormSubmissionStarted = () => ({
  type: PreApprovalRequestForActions.REQUEST_FORM_SUBMISSION_STARTED,
});

const requestFormSubmissionSuccessful = response => ({
  type: PreApprovalRequestForActions.REQUEST_FORM_SUBMISSION_SUCCESSFUL,
  payload: response,
});

const requestFormSubmissionFailed = response => ({
  type: PreApprovalRequestForActions.REQUEST_FORM_SUBMISSION_FAILED,
  payload: response,
});

export const submitRequestForm = (form, dispatch) => {
  dispatch(requestFormSubmissionStarted());
  return requestService.submitRequest(form)
    .then(response => dispatch(requestFormSubmissionSuccessful(response)))
    .catch(error => dispatch(requestFormSubmissionFailed(error)));
};


import {PreApprovalRequestForActions, submitRequestForm} from '../../actions/actions';
import * as requestService from '../../../../services/requestService';

describe('PreApprovalRequestForm Actions', () => {
  describe('SubmitRequestForm Actions', () => {
    let mockDispatch;
    let submitRequestSpy;

    const form = {name: 'A'};

    beforeEach(() => {
      mockDispatch = jest.fn();
      submitRequestSpy = spyOn(requestService, 'submitRequest');
    });

    it('should dispatch REQUEST_FORM_SUBMISSION_STARTED', () => {
      submitRequestSpy.and.returnValue(Promise.resolve({}));
      submitRequestForm(form, mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith({
        type: PreApprovalRequestForActions.REQUEST_FORM_SUBMISSION_STARTED,
      });
    });

    it('should call request service to submit form', () => {
      submitRequestSpy.and.returnValue(Promise.resolve({}));

      submitRequestForm(form, mockDispatch);

      expect(submitRequestSpy).toHaveBeenCalledWith(form);
    });

    it('should dispatch REQUEST_FORM_SUBMISSION_SUCCESSFUL when service returns successful response', async () => {
      const response = {some: 'response'};
      submitRequestSpy.and.returnValue(Promise.resolve(response));

      await submitRequestForm(form, mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith({
        type: PreApprovalRequestForActions.REQUEST_FORM_SUBMISSION_SUCCESSFUL,
        payload: response,
      });
    });

    it('should dispatch REQUEST_FORM_SUBMISSION_FAILED when service returns failed response', async () => {
      const errorResponse = {some: 'error'};
      submitRequestSpy.and.returnValue(Promise.reject(errorResponse));

      await submitRequestForm(form, mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith({
        type: PreApprovalRequestForActions.REQUEST_FORM_SUBMISSION_FAILED,
        payload: errorResponse,
      });
    });
  });
});

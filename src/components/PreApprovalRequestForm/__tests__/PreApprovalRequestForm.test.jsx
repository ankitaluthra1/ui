import * as React from 'react';
import {shallow} from 'enzyme';
import {Field} from 'redux-form';
import PreApprovalRequestForm from '../PreApprovalRequestForm';
import PreApprovalRequestGeneralDetailsForm from '../PreApprovalRequestGeneralDetailsForm';
import PreApprovalRequestDetailsForm from '../PreApprovalRequestDetailsForm';
import PreApprovalRequestBusinessContactsForm from '../PreApprovalRequestBusinessContactsForm';

describe('PreApprovalRequestForm component', () => {
  const handleSubmit = jest.fn();
  const onSubmit = jest.fn();

  const getComponent = () => shallow(<PreApprovalRequestForm
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
  />);

  it('should have PreApprovalRequestGeneralDetailsForm component', () => {
    const requestForm = getComponent();

    const requestorField = requestForm.find(PreApprovalRequestGeneralDetailsForm);
    expect(requestorField).toHaveLength(1);
  });

  it('should have PreApprovalRequestDetailsForm component', () => {
    const requestForm = getComponent();

    const requestorField = requestForm.find(PreApprovalRequestDetailsForm);
    expect(requestorField).toHaveLength(1);
  });

  it('should have PreApprovalRequestBusinessContactsForm component', () => {
    const requestForm = getComponent();

    const requestorField = requestForm.find(PreApprovalRequestBusinessContactsForm);
    expect(requestorField).toHaveLength(1);
  });

  it('should have submit button', () => {
    const requestForm = getComponent();

    const submitButton = requestForm.find('button');
    expect(submitButton).toHaveLength(1);
    expect(submitButton.props().type).toBe('submit');
    expect(submitButton.text()).toBe('Submit');
  });

  it('should call handleSubmit with onSubmit function on click of submit button', () => {
    const requestForm = getComponent();

    const submitButton = requestForm.find('button');
    submitButton.simulate('click');

    expect(handleSubmit).toHaveBeenCalledWith(onSubmit);
    // todo need to assert onSubmit gets called or not?
  });
});

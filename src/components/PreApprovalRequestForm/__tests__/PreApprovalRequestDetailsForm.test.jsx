import * as React from 'react';
import {shallow} from 'enzyme';
import {Field} from 'redux-form';
import PreApprovalRequestGeneralDetailsForm from '../PreApprovalRequestGeneralDetailsForm';
import PreApprovalRequestDetailsForm from "../PreApprovalRequestDetailsForm";

describe('PreApprovalRequestDetailsForm component', () => {
  const getComponent = () => shallow(<PreApprovalRequestDetailsForm />);

  it('should have PreApprovalRequestGeneralDetailsForm component', () => {
    const requestForm = getComponent();

    const requestorField = requestForm.find(Field);
    expect(requestorField).toHaveLength(1);
    expect(requestorField.prop('name')).toBe('purposeOfEntertainment');
  });
});

import * as React from 'react';
import {shallow} from 'enzyme';
import {Field} from 'redux-form';
import PreApprovalRequestGeneralDetailsForm from '../PreApprovalRequestGeneralDetailsForm';

describe('PreApprovalRequestForm component', () => {

  const getComponent = () => shallow(<PreApprovalRequestGeneralDetailsForm />);

  it('should have PreApprovalRequestGeneralDetailsForm component', () => {
    const requestForm = getComponent();

    const requestorField = requestForm.find(Field);
    expect(requestorField).toHaveLength(1);
    expect(requestorField.prop('name')).toBe('nameOfRequester');
  });
});

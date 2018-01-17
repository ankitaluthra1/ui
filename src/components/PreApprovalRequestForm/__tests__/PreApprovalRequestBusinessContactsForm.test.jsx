import * as React from 'react';
import {shallow} from 'enzyme';
import {Field} from 'redux-form';
import PreApprovalRequestBusinessContactsForm from '../PreApprovalRequestBusinessContactsForm';

describe('PreApprovalRequestBusinessContactsForm component', () => {
  const getComponent = () => shallow(<PreApprovalRequestBusinessContactsForm />);

  it('should have PreApprovalRequestBusinessContactsForm component', () => {
    const requestForm = getComponent();

    const requestorField = requestForm.find(Field);
    expect(requestorField).toHaveLength(1);
    expect(requestorField.prop('name')).toBe('externalParticipant');
  });
});

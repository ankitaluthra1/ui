import * as React from 'react';
import {shallow} from 'enzyme';
import {Field} from 'redux-form';
import PreApprovalRequestDetailsForm from '../../components/DetailsForm';

describe('PreApprovalRequestDetailsForm component', () => {
  const getComponent = () => shallow(<PreApprovalRequestDetailsForm />);

  it('should have PreApprovalRequestDetailsForm component', () => {
    const PreApprovalRequestDetailsFormComponent = getComponent();

    const requestorField = PreApprovalRequestDetailsFormComponent.find(Field);
    expect(requestorField).toHaveLength(1);
    expect(requestorField.prop('name')).toBe('purposeOfEntertainment');
    expect(PreApprovalRequestDetailsFormComponent
      .contains(<label>Purpose of entertainment</label>)).toEqual(true);
  });
});

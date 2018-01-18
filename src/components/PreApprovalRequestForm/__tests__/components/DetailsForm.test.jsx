import * as React from 'react';
import {shallow} from 'enzyme';
import {Field} from 'redux-form';
import DetailsForm from '../../components/DetailsForm';

describe('DetailsForm component', () => {
  const getComponent = () => shallow(<DetailsForm />);

  it('should have DetailsForm component', () => {
    const PreApprovalRequestDetailsFormComponent = getComponent();

    const requestorField = PreApprovalRequestDetailsFormComponent.find(Field);
    expect(requestorField).toHaveLength(1);
    expect(requestorField.prop('name')).toBe('purposeOfEntertainment');
    expect(PreApprovalRequestDetailsFormComponent
      .contains(<label>Purpose of entertainment</label>)).toEqual(true);
  });
});

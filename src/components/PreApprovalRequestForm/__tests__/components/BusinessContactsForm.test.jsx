import * as React from 'react';
import {shallow} from 'enzyme';
import {Field} from 'redux-form';
import BusinessContactsForm from '../../components/BusinessContactsForm';

describe('BusinessContactsForm component', () => {
  const getComponent = () => shallow(<BusinessContactsForm />);

  it('should have BusinessContactsForm component', () => {
    const BusinessContactsFormComponent = getComponent();

    const requestorField = BusinessContactsFormComponent.find(Field);
    expect(requestorField).toHaveLength(1);
    expect(requestorField.prop('name')).toBe('externalParticipant');
    expect(BusinessContactsFormComponent
      .contains(<label>External Participant</label>)).toEqual(true);
  });
});

import * as React from 'react';
import {shallow} from 'enzyme';
import {Field} from 'redux-form';
import GeneralDetailsForm from '../../components/GeneralDetailsForm';

describe('RequestForm component', () => {

  const getComponent = () => shallow(<GeneralDetailsForm />);

  it('should have GeneralDetailsForm component', () => {
    const GeneralDetailsRequestForm = getComponent();

    const requestorField = GeneralDetailsRequestForm.find(Field);
    expect(requestorField).toHaveLength(1);
    expect(requestorField.prop('name')).toBe('nameOfRequester');
    expect(GeneralDetailsRequestForm.contains(<label>Name of requester</label>)).toEqual(true);
  });
});

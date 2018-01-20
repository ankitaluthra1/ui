import * as React from 'react';
import {shallow} from 'enzyme';
import {Field} from 'redux-form';
import GeneralDetailsForm from '../../components/GeneralDetailsForm';

describe('RequestForm component', () => {

  const getComponent = () => shallow(<GeneralDetailsForm />);

  it('should have GeneralDetailsForm component', () => {
    const GeneralDetailsRequestForm = getComponent();

    const requestorField = GeneralDetailsRequestForm.find(Field);
    const labelField = GeneralDetailsRequestForm.find('label');
    expect(requestorField).toHaveLength(9);
    expect(labelField).toHaveLength(9);
  });
});

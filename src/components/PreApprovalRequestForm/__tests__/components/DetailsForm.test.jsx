import * as React from 'react';
import {shallow} from 'enzyme';
import {Field} from 'redux-form';
import DetailsForm from '../../components/DetailsForm';

describe('DetailsForm component', () => {
  const getComponent = () => shallow(<DetailsForm />);

  it('should have DetailsForm component', () => {
    const DetailsFormComponent = getComponent();

    const requestorField = DetailsFormComponent.find(Field);
    const label = DetailsFormComponent.find('label');
    expect(requestorField).toHaveLength(5);
    expect(label).toHaveLength(5);
  });
});

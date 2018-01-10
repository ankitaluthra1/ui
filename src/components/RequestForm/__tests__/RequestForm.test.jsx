import * as React from 'react';
import {shallow} from 'enzyme';
import RequestForm from '../RequestForm';
import {Field} from 'redux-form';

describe('RequestForm component', () => {
  const handleSubmit = jest.fn();
  const onSubmit = jest.fn();

  const getComponent = () => shallow(<RequestForm
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
  />);

  it('should have field for requestor', () => {
    const requestForm = getComponent();

    const requestorField = requestForm.find(Field);
    expect(requestorField).toHaveLength(1);

    const props = requestorField.props();
    expect(props.name).toBe('requester');
    expect(props.component).toBe('input');
    expect(props.type).toBe('text');
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

    const requestor = 'Some Requestor';

    const requestorField = requestForm.find(Field);
    const submitButton = requestForm.find('button');

    requestorField.simulate('change', {target: {value: requestor}});
    submitButton.simulate('click');

    expect(handleSubmit).toHaveBeenCalledWith(onSubmit);
  });
});

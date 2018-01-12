import React from 'react';
import {shallow} from 'enzyme';
import AccountControl from '../AccountControl/AccountControl';

describe('AccountControl component', () => {
  it('should load user\'s name ', () => {
    const component = shallow(<AccountControl />);
    expect(component.find('.account-control').text()).toBe('John Doe');
  });
});

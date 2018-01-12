import React from 'react';
import {shallow} from 'enzyme';
import Logo from '../Logo/Logo';

describe('Logo component', () => {
  it('should load the logo title', () => {
    const component = shallow(<Logo/>);
    expect(component.find('.logo').text()).toBe('GIFTS & ENTERTAINMENT');
  });
});

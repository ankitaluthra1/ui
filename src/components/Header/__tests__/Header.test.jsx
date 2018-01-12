import React from 'react';
import {shallow} from 'enzyme';
import Header from '../Header';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import AccountControl from '../AccountControl/AccountControl';

describe('Header Component', () => {
  const component = shallow(<Header/>);
  it('should have a header', () => {
    expect(component.find('.header')).toHaveLength(1);
  });

  it('should have Logo', () => {
    expect(component.find(Logo)).toHaveLength(1);
  });

  it('should have Navigation', () => {
    expect(component.find(Navigation)).toHaveLength(1);
  });

  it('should have AccountControl', () => {
    expect(component.find(AccountControl)).toHaveLength(1);
  });
});

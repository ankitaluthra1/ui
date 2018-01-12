import React from 'react';
import {Link} from 'react-router-dom';
import {shallow} from 'enzyme';
import Navigation from '../Navigation/Navigation';

describe('Navigation component', () => {
  let links;

  beforeEach(() => {
    const component = shallow(<Navigation/>);
    links = component.find(Link);
  });

  it('should have 2 links', () => {
    expect(links).toHaveLength(2);
  });

  it('should have link to home', () => {
    expect(links.at(0).props().to).toBe('/');
  });

  it('should have link to reports', () => {
    expect(links.at(1).props().to).toBe('/reports');
  });
});

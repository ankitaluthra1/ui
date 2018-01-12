import React from 'react';
import {NavLink} from 'react-router-dom';
import {shallow} from 'enzyme';
import Navigation from '../Navigation/Navigation';

describe('Navigation component', () => {
  let links;

  beforeEach(() => {
    const component = shallow(<Navigation />);
    links = component.find(NavLink);
  });

  it('should have 2 links', () => {
    expect(links).toHaveLength(2);
  });

  it('should have link to home', () => {
    const homeLink = links.at(0).props();
    expect(homeLink.to).toBe('/');
    expect(homeLink.exact).toBeDefined();
    expect(homeLink.activeClassName).toBe('active');
  });

  it('should have link to reports', () => {
    const reportsLink = links.at(1).props();
    expect(reportsLink.to).toBe('/reports');
    expect(reportsLink.exact).toBeDefined();
    expect(reportsLink.activeClassName).toBe('active');
  });
});

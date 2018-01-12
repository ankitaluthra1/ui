import React from 'react';
import {shallow} from 'enzyme';
import Header from '../Header';

describe('Header Component', () => {
  it('should have a header', function () {
    const component = shallow(<Header/>);
    expect(component.find('.header')).toHaveLength(1);
  });
});

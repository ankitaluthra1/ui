import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';
import Layout from '../../Layout/Layout';

describe('App component', () => {
  it('should render Layout', () => {
    const app = shallow(<App />);
    expect(app.find(Layout)).toHaveLength(1);
  });
});

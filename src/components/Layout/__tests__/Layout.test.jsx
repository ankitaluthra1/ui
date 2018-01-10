import * as React from 'react';
import {shallow} from 'enzyme';
import {Route} from 'react-router-dom';
import Layout from '../Layout';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Body from '../../Body/Body';
import Dashboard from '../../Dashboard/Dashboard';
import RequestFormContainer from '../../RequestForm/RequestFormContainer';

describe('Layout Component', () => {
  const getComponent = () => shallow(<Layout />);

  it('should have header component', () => {
    const component = getComponent();

    expect(component.find(Header)).toHaveLength(1);
  });

  it('should have body component with Routes', () => {
    const component = getComponent();

    const body = component.find(Body);
    expect(body).toHaveLength(1);

    const dashboardRoute = body.childAt(0).find(Route);
    expect(dashboardRoute).toHaveLength(1);
    expect(dashboardRoute.props().path).toBe('/');
    expect(dashboardRoute.props().component).toBe(Dashboard);

    const requestsRoute = body.childAt(1).find(Route);
    expect(requestsRoute).toHaveLength(1);
    expect(requestsRoute.props().path).toBe('/requests/new');
    expect(requestsRoute.props().component).toBe(RequestFormContainer);
  });

  it('should have footer component', () => {
    const component = getComponent();

    expect(component.find(Footer)).toHaveLength(1);
  });
});

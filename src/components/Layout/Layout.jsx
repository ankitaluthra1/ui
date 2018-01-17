import * as React from 'react';
import {Route} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import Body from '../Body/Body';
import PreApprovalRequestFormContainer from '../PreApprovalRequestForm/components/RequestFormContainer';

const Layout = () => (
  <div id="app">
    <Header />
    <Body>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/requests/new" component={PreApprovalRequestFormContainer} />
    </Body>
  </div>
);

export default Layout;

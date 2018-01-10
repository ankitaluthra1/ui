import * as React from 'react';
import {Route} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Requests from '../Requests/Requests';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

export default class Layout extends React.Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Body>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/requests" component={Requests} />
        </Body>
        <Footer />
      </div>
    );
  }
}

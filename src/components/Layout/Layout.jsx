import * as React from 'react';
import {Route} from "react-router-dom";

const Header = () => <div><h1>Header</h1></div>;
const Requests = () => <div><h1>Requests</h1></div>;
const Dashboard = () => <div><h1>Dashboard</h1></div>;
const Body = (props) => <div>{props.children}</div>;
const Footer = () => <div><h1>Footer</h1></div>;

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

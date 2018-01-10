import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.scss';
import Layout from './components/Layout/Layout';

ReactDOM.render(
  <BrowserRouter>
    <Route component={Layout}/>
  </BrowserRouter>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Route component={Layout}/>
  </BrowserRouter>,
  document.getElementById('root'),
);

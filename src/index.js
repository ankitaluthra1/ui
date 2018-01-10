import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Layout from './components/Layout/Layout';
import './index.css';
import store from './store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={Layout} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

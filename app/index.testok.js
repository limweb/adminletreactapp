import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './testredux/routes';
import configureStore from './testredux/store/configureStore';
import './app.global.css';


// process.env.NODE_ENV = 'production';
// process.env.NODE_ENV = 'development';
console.log('env=',process.env.NODE_ENV);

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
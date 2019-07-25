import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import storeService from './services/store-service';
import { StoreServiceProvider } from './components/store-service-context';

import store from './store';

const DATA = new storeService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <StoreServiceProvider value={DATA}>
        <Router>
          <App />
        </Router>
      </StoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
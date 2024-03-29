import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import ErrorBoundry from './components/error-boundry';

import store from './store';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry >
          <App />
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { DeviceStoreProvider } from './components/deviceStore-context/deviceStore-context';
import ErrorBoundry from './components/error-boundry';
import DeviceStoreService from './components/mobestStoreService/deviceStoreService';

import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <ErrorBoundry >
        <DeviceStoreProvider value={DeviceStoreService}>
          <App />
        </DeviceStoreProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>
);

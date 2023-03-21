import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { store } from './store/store';
import App from './app';
import './index.css';
import { Notification } from './components/notifications/notification';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
        <Notification />
      </Provider>
  </React.StrictMode>
);

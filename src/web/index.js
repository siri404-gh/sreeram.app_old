import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

LogRocket.init(process.env.LOGROCKET_ID);
setupLogRocketReact(LogRocket);

render(<App />, document.getElementById('root'));

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {})
      .catch(registrationError => {});
  });
}

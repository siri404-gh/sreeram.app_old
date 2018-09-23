import React from 'react';
import { render } from 'react-dom';
import Routes from './Routes';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

render(
  <ErrorBoundary>
    <Routes />
  </ErrorBoundary>,
  document.getElementById('root')
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {})
      .catch(registrationError => {});
  });
}

import React from 'react';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import AirbrakeClient from 'airbrake-js';
import Raven from 'raven-js';

if (process.env.NODE_ENV === 'production') {
  LogRocket.init(process.env.LOGROCKET_ID);
  setupLogRocketReact(LogRocket);
}

/**
 *
 * @class ErrorBoundary
 * @extends {React.Component}
 */
export default class ErrorBoundary extends React.Component {
  /**
   * Renders "Amazing div"!
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    if (process.env.NODE_ENV === 'production') {
      this.airbrake = new AirbrakeClient({
        projectId: process.env.AIRBRAKE_ID,
        projectKey: process.env.AIRBRAKE_PROJECT_KEY,
      });
      Raven.config(`https://${process.env.SENTRY_TOKEN}@sentry.io/${process.env.SENTRY_ID}`, {
        release: '0-0-0',
        environment: 'development-test',
      }).install();
    }
  }

  /**
   * Renders "Amazing div"!
   * @param {string} error
   * @param {string} info
   */
  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // Send error to Airbrake
    if (process.env.NODE_ENV === 'production') {
      this.airbrake.notify({
        error: error,
        params: { info: info },
      });
      Raven.captureException(error, { extra: info });
    }
  }

  /**
   * Renders "Amazing div"!
   * @return {Component}
   */
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

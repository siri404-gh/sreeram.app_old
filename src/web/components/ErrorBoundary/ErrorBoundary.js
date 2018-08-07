import React from 'react';
import AirbrakeClient from 'airbrake-js';

/**
 *
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
    this.airbrake = new AirbrakeClient({
      projectId: 192034,
      projectKey: '566cd7dbc2e1eadf8bd5992752f7fb96',
    });
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
    this.airbrake.notify({
      error: error,
      params: { info: info },
    });
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

import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
class App extends Component {
  /**
   * Renders "Amazing div"!
   * @return {Component}
   */
  render() {
    return <h1>Hello, World</h1>;
  }
}

export default hot(module)(App);

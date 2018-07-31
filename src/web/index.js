import React, {Component} from 'react';
import {render} from 'react-dom';


/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default class App extends Component {
  /**
   * Renders "Amazing div"!
   * @return {Component}
   */
  render() {
    return <h1>Hello, World</h1>;
  }
}

render(<App />, document.getElementById('root'));

import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Navbar from '../Navbar/Navbar';

const theme = createMuiTheme();

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
class App extends Component {
  /**
   * Renders "Amazing div"!
   * @return {Component}
   */
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className='app'>
          <Navbar title={'Sreeram Padmanabhan'} />
          {process.env.BUILD_NUM}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default hot(module)(App);

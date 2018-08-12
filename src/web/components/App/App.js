import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

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
      <ErrorBoundary>
        <MuiThemeProvider theme={theme}>
          <Button className='some-button' variant="contained" color="primary">
            {process.env.BUILD_NUM}
          </Button>
        </MuiThemeProvider>
      </ErrorBoundary>
    );
  }
}

export default hot(module)(App);

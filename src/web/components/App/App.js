import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </MuiThemeProvider>
    );
  }
}

export default hot(module)(App);

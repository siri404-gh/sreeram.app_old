import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const theme = createMuiTheme();

/**
 *
 * @param {string} theme
 * @return {Object}
 */
const styles = theme => ({
  app: {
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});


/**
 *
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   *Creates an instance of App.
   * @param {*} props
   * @memberof App
   */
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
    };
  }

  /**
   *
   *
   * @memberof App
   */
  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }

  /**
   *
   *
   * @return {Component}
   * @memberof App
   */
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div id='app' className={classes.app}>
          <Navbar handleDrawerToggle={this.handleDrawerToggle.bind(this)}/>
          <Sidebar mobileOpen={this.state.mobileOpen} handleDrawerToggle={this.handleDrawerToggle.bind(this)}/>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default hot(module)(withStyles(styles)(App));

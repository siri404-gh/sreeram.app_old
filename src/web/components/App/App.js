import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import './app.less';

// Component
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
// Config
import variables from '../../../../config/variables';
import styles from './styles';
import theme from './theme';

const {
  navbar: { title, tagline, tabs },
  defaultTopic, defaultPost,
} = variables;

/**
 *
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  state = {
    mobileOpen: false,
  };

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
    const { classes, match: { params: { post, topic } } } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div id="app" className={classes.app}>
          <Navbar
            handleDrawerToggle={this.handleDrawerToggle.bind(this)}
            title={title}
            tagline={tagline}
            tabs={tabs}
          />
          <Sidebar
            mobileOpen={this.state.mobileOpen}
            handleDrawerToggle={this.handleDrawerToggle.bind(this)}
          />
          <Content topic={topic ? topic : defaultTopic} post={post ? post : defaultPost }/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default hot(module)(withStyles(styles)(App));

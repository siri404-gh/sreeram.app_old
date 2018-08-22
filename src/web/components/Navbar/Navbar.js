import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './styles';

/**
 *
 *
 * @class Navbar
 * @extends {React.Component}
 */
class Navbar extends React.Component {
  /**
   *
   *
   * @return {Component}
   * @memberof Navbar
   */
  render() {
    const { classes, title = '' } = this.props;
    return (
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.props.handleDrawerToggle}
            className={classes.navIconHide}>
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Navbar);

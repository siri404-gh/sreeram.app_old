import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import { mailFolderListItems } from './tileData';

const drawerWidth = 240;

/**
 *
 * @param {string} theme
 * @return {Object}
 */
const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
});


/**
 *
 *
 * @class Sidebar
 * @extends {React.Component}
 */
class Sidebar extends React.Component {
  /**
   *
   *
   * @return {Component}
   * @memberof Sidebar
   */
  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <Hidden smDown>
          <div className={classes.toolbar} />
          <Divider />
        </Hidden>
        <List>{mailFolderListItems}</List>
        <Divider />
      </div>
    );
    return (
      <div>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.props.mobileOpen}
            onClose={this.props.handleDrawerToggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }} >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{ paper: classes.drawerPaper }} >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Sidebar);

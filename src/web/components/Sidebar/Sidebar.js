import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import NestedList from '../NestedList/NestedList';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import styles from './styles';
import topics from '../../../../config/topics';

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
      </Hidden>
        <ListItem component={Link} button className={classes.listItem} to={'/'} dense>
          <ListItemText primary={'Home'} className={classes.listItemText}/>
        </ListItem>
        <Divider />
        {topics.map((topic, i) => <NestedList key={i} title={topic.topic} links={topic.links}/>)}
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

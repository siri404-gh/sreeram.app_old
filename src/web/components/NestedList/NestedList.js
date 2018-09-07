import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import { NavLink } from 'react-router-dom';
import styles from './styles';

/**
 *
 *
 * @class NestedList
 * @extends {React.Component}
 */
class NestedList extends React.Component {
  state = {
    open: false,
  };

  /**
   *
   *
   * @memberof NestedList
   */
  handleClick() {
    this.setState(state => ({ open: !state.open }));
  }

  /**
   *
   *
   * @return {Component}
   * @memberof NestedList
   */
  render() {
    const { classes } = this.props;
    return (
      <List component="nav" className={classes.list}>
        <ListItem className={classes.listItem} button onClick={() => this.handleClick()}>
          <ListItemText className={classes.listItemText} secondary={this.props.title} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" className={classes.nestedList} disablePadding>
            {this.props.links.map((link, i) =>
              <ListItem key={i} component={NavLink} className={classes.nestedListItem} exact to={link.route} activeClassName={classes.active}>
                <ListItemText secondary={link.name} className={classes.nestedListItemText}/>
              </ListItem>)}
          </List>
        </Collapse>
        <Divider />
      </List>
    );
  }
}

export default withStyles(styles)(NestedList);

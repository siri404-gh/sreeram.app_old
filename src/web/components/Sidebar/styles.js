const drawerWidth = 300;

/**
 *
 * @param {string} theme
 * @return {Object}
 */
export default theme => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
});

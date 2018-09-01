const drawerWidth = 300;

/**
 *
 * @param {string} theme
 * @return {Object}
 */
export default theme => ({
  toolbar: {
    minHeight: 50,
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  listItem: {
    padding: 12,
    paddingLeft: 25,
  },
});

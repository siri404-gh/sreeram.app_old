/**
 *
 * @param {string} theme
 * @return {Object}
 */
export default theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  flex: {
    flexGrow: 1,
  },
});

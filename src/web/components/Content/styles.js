/**
 *
 * @param {string} theme
 * @return {Object}
 */
export default theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 2,
  },
  toolbar: theme.mixins.toolbar,
});

/**
 *
 * @param {string} theme
 * @return {Object}
 */
export default theme => ({
  app: {
    flexGrow: 1,
    minHeight: 440,
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

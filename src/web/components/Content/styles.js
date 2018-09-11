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
    wordBreak: 'break-word',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.background.primary,
    padding: theme.spacing.unit * 2,
  },
  toolbar: {
    minHeight: 48,
  },
  markdown: {
    // padding: `${theme.spacing.unit * 1.5}px 0`,
  },
  contentLeft: {
    paddingRight: 10,
    color: 'green',
  },
  contentRight: {
    borderLeft: ' solid 1px #ecf0f2',
  },
  progressHeader: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  innerActiveStep: {
    fontWeight: 'normal',
  },
});

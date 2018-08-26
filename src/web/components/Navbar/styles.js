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
  tabsRoot: {
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    'textTransform': 'initial',
    'minWidth': 72,
    'fontWeight': theme.typography.fontWeightRegular,
    'marginRight': theme.spacing.unit * 4,
    'fontFamily': [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
});

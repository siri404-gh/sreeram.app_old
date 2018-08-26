import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

/**
 *
 *
 * @param {*} props
 * @return {Component}
 */
function PaperSheet(props) {
  const { classes } = props;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    </main>
  );
}

export default withStyles(styles)(PaperSheet);

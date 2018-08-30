import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Markdown from './Markdown';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import post1 from './blog-post-1.md';

const posts = [post1];

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
        <Grid container spacing={40}>
          <Grid item xs={12}>
            {posts.map(post => (
              <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                {post}
              </Markdown>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </main>
  );
}

export default withStyles(styles)(PaperSheet);

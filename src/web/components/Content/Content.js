import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
// import StepContent from '@material-ui/core/StepContent';
import Markdown from './Markdown';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Adsense from '../Adsense/Adsense';
// import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
const variables = require('../../../../config/variables');

import topics from '../../../../config/topics';

/**
 *
 * @param {string} name
 * @param {string} url
 * @return {String}
 */
const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[[\]]/g, '\\$&');
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

/**
 *
 * @param {string} word
 * @return {String}
 */
const capitalize = word => word.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1, word.length).replace(/_/g, ' ')).join(' ');

/**
 *
 *
 * @param {*} props
 * @return {Component}
 */
class PaperSheet extends React.Component {
  state = {
    activeStep: -1,
    mainActiveStep: -1,
  };

  /**
   *
   * @param {*} topic
   * @param {*} post
   * @return {String}
   * @memberof PaperSheet
   */
  createTitle(topic, post) {
    if (post === 'home') return variables.navbar.title;
    return capitalize(topic) + ' | ' + capitalize(post) + ' | ' + variables.navbar.title;
  }

  /**
   *
   *
   * @param {*} title
   * @param {*} description
   * @memberof PaperSheet
   */
  setSeoProps(title, description) {
    const { topic, post } = this.props;
    if (post === 'home') {
      document.title = variables.navbar.title;
      document.querySelector('meta[name=\'Description\']').setAttribute('content', variables.ogDescription);
    } else {
      document.title = title;
      document.querySelector('meta[name=\'Description\']').setAttribute('content', capitalize(topic) + ' - ' + capitalize(post) + '. ' + variables.ogDescription);
    }
  }


  /**
   *
   *
   * @memberof PaperSheet
   */
  componentDidMount() {
    this.setActiveSteps();
  }

  /**
   *
   *
   * @memberof PaperSheet
   */
  setActiveSteps() {
    const { topic, post } = this.props;
      let activeStep = -1;
      let mainActiveStep = -1;
      topics.forEach((t, j) => {
        if (typeof t.route === 'string') {
          if (t.route === `/post/${topic}/${post}`) {
            activeStep = j;
            mainActiveStep = j;
          }
        } else {
          t.route.forEach((tl, i) => {
            if (tl.route === `/post/${topic}/${post}`) {
              activeStep = i;
              mainActiveStep = j;
            }
          });
        }
      });
      this.setState({
        activeStep,
        mainActiveStep,
      });
      this.setSeoProps(this.createTitle(topic, post));
  }

  /**
   *
   *
   * @return {Component}
   * @memberof PaperSheet
   */
  getGoogleSearchResults() {
    const { classes } = this.props;
    return <div>
      <Markdown className={classes.markdown} key={'search'}>
        {require(`../../posts/home/search.md`)}
      </Markdown>
      <div dangerouslySetInnerHTML={{ __html: '<gcse:searchresults-only></gcse:searchresults-only>' }} />
    </div>;
  }

  /**
   *
   *
   * @return {Component}
   * @memberof PaperSheet
   */
  getPost() {
    const { classes, topic, post } = this.props;
    const ppost = require(`../../posts/${topic}/${post}.md`);
    return <Markdown className={classes.markdown} key={post.substring(0, 40)}>
      {ppost || null}
    </Markdown>;
  }

  /**
   *
   *
   * @return {Component}
   * @memberof PaperSheet
   */
  getProgress() {
    const { classes } = this.props;
    const { /* activeStep,*/ mainActiveStep } = this.state;
    return <Hidden smDown>
      <Typography className={classes.progressHeader}>Picture List</Typography>
      <Stepper className={classes.stepper} activeStep={mainActiveStep} orientation="vertical">
        {topics.map((topic, i) => <Step key={i} className={classes.step}>
          <StepLabel className={classes.stepLabel}>
            <a href={topic.route[0] ? topic.route[0].route : '/'} className={classes.innerActiveStepLink}>{topic.topic}</a>
          </StepLabel>
          {/* <StepContent>
            <Stepper className={classes.innerStepper} activeStep={activeStep} orientation="vertical">
              {topic.links.map((link, index) => {
                return (
                  <Step key={link.name}>
                    <StepLabel className={classes.innerActiveStep}><NavLink to={link.route} className={classes.innerActiveStepLink}>{link.name}</NavLink></StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </StepContent> */}
        </Step>)}
      </Stepper>
    </Hidden>;
  }

  /**
   *
   *
   * @return {Component}
   * @memberof PaperSheet
   */
  render() {
    const { classes } = this.props;
    const queryParam = getParameterByName('q');

    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Paper className={classes.root} elevation={1}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={queryParam ? 12 : 8} lg={queryParam ? 10 : 7} xl={queryParam ? 11 : 7} className={classes.contentLeft}>
              {queryParam && this.getGoogleSearchResults()}
              {!queryParam && this.getPost()}
            </Grid>
            {!queryParam && <Grid item md={!queryParam && 4} lg={!queryParam && 3} xl={!queryParam && 3} className={classes.contentRight}>
              {this.getProgress()}
            </Grid>}
            <Hidden mdDown>
              {<Grid item lg={2} xl={2}>
                {process.env.NODE_ENV === 'production' && <Adsense pubID={variables.google.adsense.pubID} adSlot={variables.google.adsense.adSlot}/>}
              </Grid>}
            </Hidden>
          </Grid>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(PaperSheet);

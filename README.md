[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![Build Status](https://travis-ci.org/sreerampr/sreeram.app.svg?branch=master)](https://travis-ci.org/sreerampr/sreeram.app)

[![CircleCI](https://circleci.com/gh/sreerampr/sreeram.app/tree/master.svg?style=svg)](https://circleci.com/gh/sreerampr/sreeram.app/tree/master)

[![Maintainability](https://api.codeclimate.com/v1/badges/7824f3ae21dd6bd87291/maintainability)](https://codeclimate.com/github/sreerampr/sreeram.app/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/7824f3ae21dd6bd87291/test_coverage)](https://codeclimate.com/github/sreerampr/sreeram.app/test_coverage)

[![codecov](https://codecov.io/gh/sreerampr/sreeram.app/branch/master/graph/badge.svg)](https://codecov.io/gh/sreerampr/sreeram.app)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5fdcfb541d7b465ca2e4ac7dc0f05876)](https://www.codacy.com/project/sreeram.com/sreeram.app/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=sreerampr/sreeram.app&amp;utm_campaign=Badge_Grade_Dashboard) 

[![Greenkeeper badge](https://badges.greenkeeper.io/sreerampr/sreeram.app.svg)](https://greenkeeper.io/)


# Features
- React
  - React Hot Loader
  - React router
  - React Styleguide
  - React native
- Redux
  - Redux thunk
  - Redux middlewares
- Unit Testing
  - Karma
  - Jasmine
  - Enzyme
- Cross Browser testing
  - Browserstack 
- Integration testing
  - Cypress
- Performance testing
  - Lighthouse
- Accessibility testing
  - Pa11y
- Build
  - Webpack 4
    - Dev build
    - Prod build
    - Webpack Dev Server
    - Hot Module Replacement
    - SplitChunks
    - Sourcemaps
    - Visualizer
    - Workbox for PWA
    - Compression
    - HtmlWebpackPlugin
- CI
  - Travis CI
  - Circle CI
  - Gitlab CI
- Retporting tools
  - Codecov
  - Coceclimate
  - Codacy
  - Sonarqube
- Deployment
  - Heroku Node app deployment
  - Heroku docker container deployment
  - Heroku pipelines
  - Firebase Hosting
  - Firebase functions
- Devops
  - Docker
  - Docker compose
- SCM
  - Git
  - Github
  - Gitlab
  - Commitizen
  - Commitlint
  - Husky
  - Lighthouse PR integration
- Serverside
  - Express
- Tooling
  - Eslint
  - Editorconfig
- Dependency Management
  - Greenhouse
Analytics
  - Logrocket
  - Airbrake
  - Sentry
  - Google Analytics

## Environment variables

- AIRBRAKE_ID
- AIRBRAKE_PROJECT_KEY
- BROWSERSTACK_TOKEN
- BROWSERSTACK_USER
- CODACY_PROJECT
- CODACY_TOKEN
- CODACY_USERNAME
- CODECLIMATE_REPO_TOKEN
- CODECOV_TOKEN
- FIREBASE_TOKEN
- HEROKU_API_KEY
- HEROKU_APP_NAME
- LIGHTHOUSE_API_KEY
- LOGROCKET_ID
- SENTRY_ID
- SENTRY_TOKEN
- SONAR_ORG
- SONAR_TOKEN

## npm scripts
- npm build - Production build.
- build:dev - Development build, without webpack-dev-server.
- build:devserver - Development build, with webpack-dev-server.
- test - Karma test.
- lint:local - Eslint scan local.
- commit - This is what you use to commit, not git commit.
- docker - Builds the app in a dockerized container
- lighthouse - Perform a lighthouse performance test.
- lighthouse:pr - Travis invokes this for pull requests.
- firebase:deploy - Deploy to firebase. Make sure you build first.
- clean - Remove unnecessary folders.
- sonar - Perform a sonar analysis. (You will need env variables set)
- styleguide - Generate documentaton.
- styleguide:eject - Generate and output documentation.
- test:browserstack - Creates a tunnel to Browserstack and runs the unit tests in browsers specified in customLaunchers.js. (You will need env variables set)

## How it all works

- Fork this repo.
- Husky, Commitizen and Commitlint, all npm installed, ensure that you follow good commit practices.
- Signup at Travis. Here is where most things happen.
- Signup at CircleCI too.
- Every Travis/CircleCi build has 8 stages - Lint, Test, Browserstack, Documentation, Build, Stage, Performance, Host.
- Lint - Performs a lint check.
- Test - Performs unit testing and generates reports and are sent to Codecov, Codeclimate, Codacy and Sonarqube. (You will need to have signed up at all those places and set appropriate environment variables).
  - Browserstack - Runs the unit tests in browsers specified in customLaunchers.js.  (You will need to have signed up and set appropriate environment variables).
  - Documentation - Generates react styleguide.
  - Build - Performs a build and generates a webpack visualizer analysis report.
  - Stage - Stages an app in heroku. (You will need to have signed up and set appropriate environment variables).
  - Performance - Generates a lighthouse performance test report.
  - Host - Pushes the app to firebase. (You will need to have signed up and set appropriate environment variables).

## Examples:
 - Test report - https://test.sreeram.app
 - Codecov report - https://codecov.sreeram.app
 - Codeclimate report - https://codeclimate.sreeram.app
 - Codacy report - https://codacy.sreeram.app
 - Sonar Analysis - https://sonar.sreeram.app
 - Bundle analysis - https://bundle.sreeram.app
 - Documentation - https://styleguide.sreeram.app
 - Stage app - https://heroku.sreeram.app
 - Performance report - https://lighthouse.sreeram.app
 - Production app - https://www.sreeram.app

## Others
  - Browserstack
  - Logrocket
  - Airbrake
  - Sentry
  - Greenhouse

# ``` Configuration```

## Firebase
- Replace app name in .firebaserc
- Signup at all the places and set environment variables at travis, heroku and circle.
- Push the code.

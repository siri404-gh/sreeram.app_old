module.exports = [
  {
    topic: 'Development Environment',
    description: 'Setting up of project',
    links: [{
      name: 'System requirements',
      route: '/post/development-environment/system-requirements',
    },
    {
      name: 'VS Code extensions',
      route: '/post/development-environment/vscode-extensions',
    },
    {
      name: 'VS Code preferences',
      route: '/post/development-environment/vscode-preferences',
    },
    {
      name: 'Command line shortcuts',
      route: '/post/development-environment/aliases',
    },
    {
      name: 'Git aliases',
      route: '/post/development-environment/git-aliases',
    },
    {
      name: 'Browser extensions',
      route: '/post/development-environment/browser-extensions',
    }],
  },
  {
    topic: 'Initial Setup',
    links: [
    {
      name: 'Initial commit',
      route: '/post/initial-setup/initial-commit',
    },
    {
      name: 'Configure Editorconfig',
      route: '/post/initial-setup/editor-config',
    },
    {
      name: 'Configure Eslint',
      route: '/post/initial-setup/eslint-config',
    }],
  },
  {
    topic: 'React view layer',
    links: [{
      name: 'Create entry point',
      route: '/post/react/entry-point',
    },
    {
      name: 'Configure babel',
      route: '/post/react/configure-babel',
    },
    {
      name: 'Hot Module Replacement',
      route: '/post/react/hot-module-replacement',
    },
    {
      name: 'React Router',
      route: '/post/react/react-router',
    },
    {
      name: 'React Native',
      route: '/post/react/react-native',
    }],
  },
  {
    topic: 'Webpack Configurations', // 'Polyfills', 'Clean Webpack Plugin',
    links: [{
      name: 'Development config',
      route: '/post/webpack/dev-config',
    },
    {
      name: 'Production config',
      route: '/post/webpack/prod-config',
    },
    {
      name: 'Bundle analysis plugin',
      route: '/post/webpack/bundle-analysis',
    },
    {
      name: 'Webpack Visualizer plugin',
      route: '/post/webpack/webpack-visualizer',
    },
    {
      name: 'HTML Webpack Plugin',
      route: '/post/webpack/html-webpack-plugin',
    },
    {
      name: 'Common config',
      route: '/post/webpack/common-config',
    },
    {
      name: 'Webpack Dev Server',
      route: '/post/webpack/webpack-dev-server',
    },
    {
      name: 'Sourcemaps',
      route: '/post/webpack/sourcemaps',
    },
    {
      name: 'Hot Module Replacement',
      route: '/post/webpack/hot-module-replacement',
    },
  {
    name: 'Clean Webpack Plugin',
    route: '/post/webpack/clean-webpack-plugin',
  }],
  },
  {
    topic: 'Redux data layer',
    links: [{
      name: 'What is Redux?',
      route: '/post/redux/what-is-redux',
    },
    {
      name: 'Redux thunk',
      route: '/post/redux/redux-thunk',
    },
    {
      name: 'Redux middlewares',
      route: '/post/redux/redux-middlewares',
    }],
  },
  {
    topic: 'Documentation',
    links: [{
      name: 'JSdoc',
      route: '/post/documentation/jsdoc',
    },
    {
      name: 'React styleguidist',
      route: '/post/documentation/react-styleguidist',
    }],
  },
  {
    topic: 'Git',
    links: [
    {
      name: 'Making your project commitizen friendly',
      route: '/post/git/commitizen',
    },
    {
      name: 'Commit message linting',
      route: '/post/git/commitlint-husky',
    },
    {
      name: 'Branching strategy',
      route: '/post/git/branching-strategy',
    },
    {
      name: 'Rebase vs Merge',
      route: '/post/git/rebase-vs-merge',
    }],
  },
  {
    topic: 'Optimising code', // 'Compression Plugin',
    links: [
      {
        name: 'Tree Shaking',
        route: '/post/optimisation/tree-shaking',
      },
      {
        name: 'Production Mode',
        route: '/post/optimisation/production-mode',
      },
      {
        name: 'Uglification',
        route: '/post/optimisation/uglification',
      },
      {
        name: 'Minification',
        route: '/post/optimisation/minification',
      },
      {
        name: 'Split vendor libraries',
        route: '/post/optimisation/split-vendor-libraries',
      },
      {
        name: 'Code splitting',
        route: '/post/optimisation/splitchunks',
      },
      {
        name: 'Gzip compression',
        route: '/post/optimisation/gzip-compression',
      },
    ],
  },
  {
    topic: 'Continous Integration',
    links: [
      {
        name: 'Travis CI integration',
        route: '/post/ci/travis-ci-integration',
      },
      {
        name: 'Circle CI integration',
        route: '/post/ci/circle-ci-integration',
      },
    ],
  },
  {
    topic: 'Continous Deployment', // ['Heroku Node App', 'Heroku docker container', 'Heroku pipelines', 'Firebase Hosting', 'Firebase functions'],
    links: [
    {
      name: 'Deploy to Heroku',
      route: '/post/cd/heroku-integration',
    },
    {
      name: 'Deploy to Firebase',
      route: '/post/cd/firebase-integration',
    },
    ],
  },
  {
    topic: 'DevOps',
    links: [
      {
        name: 'Dockerize the app',
        route: '/post/devops/dockerize',
      },
    ],
  },
  {
    topic: 'Unit Testing',
    links: [{
      name: 'Integrating Karma + Jasmine',
      route: '/post/unit-testing/karma-jasmine',
    }], // ['Enzyme', 'Sinon, Spy'],
  },
  {
    topic: 'Cross Browser Testing',
    links: [{
      name: 'Browserstack Tests',
      route: '/post/cross-browser-testing/browserstack-tests',
    },
    {
      name: 'Saucelabs Tests',
      route: '/post/cross-browser-testing/saucelabs-tests',
  }],
  },
  // {
  //   topic: 'Cross Browser Testing',
  //   links: [], // ['Browserstack'],
  // },
  // {
  //   topic: 'Code Coverage',
  //   links: [], // ['Sonar analysis', 'Code Climate', 'Codecov', 'Codacy'],
  // },
  // {
  //   topic: 'Progressive Web Apps',
  //   links: [
  //     {
  //       name: 'Service workers',
  //       route: '/post/pwa/service-workers',
  //     },
  //     {
  //       name: 'Making your app a PWA',
  //       route: '/post/pwa/progressive-web-apps',
  //     },
  //   ],
  // },
  // {
  //   topic: 'Backend',
  //   links: [], // ['Express', 'Serverside Rendering'],
  // },
  // {
  //   topic: 'Performance',
  //   links: [], // ['Lighthouse', 'Imgbot'],
  // },
  // {
  //   topic: 'Integration Testing',
  //   links: [], // ['Cypress'],
  // },
  // {
  //   topic: 'Material Design',
  //   links: [], // ['Material-UI'],
  // },
  // {
  //   topic: 'Monitoring Tools',
  //   links: [], // ['Logrocket', 'Dependency management (Greenkeeper)', 'Airbrake', 'Sentry', 'LGTM', 'Google Analytics'],
  // },
  // {
  //   topic: 'HTML',
  //   links: [],
  // },
  // {
  //   topic: 'CSS',
  //   links: [],
  // },
  {
    topic: 'Javascript Concepts',
    links: [{
      name: 'Closures in Javascript',
      route: '/post/javascript-concepts/closures',
    },
    {
      name: 'Callback hell',
      route: '/post/javascript-concepts/callback-hell',
    },
    {
      name: 'Promises',
      route: '/post/javascript-concepts/promises',
    }],
  },
  // {
  //   topic: 'Algorthms',
  //   links: [],
  // },
  // {
  //   topic: 'Accessibility',
  //   links: [],
  // },
];

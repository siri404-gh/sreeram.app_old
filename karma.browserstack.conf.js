const { customLaunchers, browsers } = require('./customLaunchers');
const webpackConfig = require('./webpack/webpack.test');

module.exports = function(config) {
  config.set({
    browserStack: {
      username: process.env.BROWSERSTACK_USER,
      accessKey: process.env.BROWSERSTACK_TOKEN,
    },
    customLaunchers,
    browsers,
    basePath: '.',
    singleRun: true,
    frameworks: ['jasmine'],
    files: [
      'src/web/spec.js',
    ],
    preprocessors: {
      'src/web/spec.js': ['webpack', 'sourcemap'],
    },
    reporters: ['dots', 'BrowserStack'],
    webpack: webpackConfig,
  });
};

const webpack = require('webpack');

module.exports = function (config) {
  config.set({
    basePath: '.',
    browsers: [ 'ChromeHeadless' ],
    singleRun: true,
    frameworks: [ 'jasmine' ],
    files: [
      'src/web/components/App/App.js',
      'src/web/spec.js'
    ],
    preprocessors: {
      'src/web/components/App/App.js': ['webpack'],
      'src/web/spec.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'dots', 'coverage' ],
    coverageReporter: {
      includeAllSources: true,
      reporters: [
        { type: 'html', subdir: 'test' },
      ],
      dir: `./dist`,
    },
    webpack: {
      mode: 'production',
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
        ],
      },
    },
  });
};

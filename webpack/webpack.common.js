const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/web/index.js',
    polyfills: './src/web/polyfills.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
  },
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
  optimization: {
    splitChunks: {
      /**
       * @param {*} module
       * @return {string}
       */
      name(module) {
        return 'vendor';
      },
        /**
       * @param {*} chunk
       * @return {string}
       */
      chunks(chunk) {
        return chunk.name !== 'polyfills';
      },
    },
  },
  externals: {
    request: {
      commonjs: 'request',
      commonjs2: 'request',
    },
    os: {
      commonjs: 'os',
      commonjs2: 'os',
    },
    process: 'process',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        LOGROCKET_ID: JSON.stringify(process.env.LOGROCKET_ID),
        SENTRY_TOKEN: JSON.stringify(process.env.SENTRY_TOKEN),
        SENTRY_ID: JSON.stringify(process.env.SENTRY_ID),
        AIRBRAKE_PROJECT_KEY: JSON.stringify(process.env.AIRBRAKE_PROJECT_KEY),
        AIRBRAKE_ID: JSON.stringify(process.env.AIRBRAKE_ID),
        BUILD_NUM: JSON.stringify(process.env.CIRCLE_BUILD_NUM) || JSON.stringify('hello'),
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Title',
      description: 'Sreeram Padmanabhan - Web engineer, traveller, photographer.',
      template: path.resolve(__dirname, 'template.html'),
      excludeChunks: ['polyfills'],
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),
      exclude: [],
      verbose: false,
      dry: false,
    }),
    new webpack.ProgressPlugin(),
    new webpack.BannerPlugin({
      banner: 'hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]',
    }),
  ],
};

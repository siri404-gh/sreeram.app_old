const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const variables = require('../config/variables');
const { navbar: { title, tagline }, keywords } = variables;

module.exports = {
  entry: {
    app: './src/web/index.js',
    polyfills: './src/web/polyfills.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
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
      {
        test: /\.md$/,
        exclude: /node_modules/,
        use: {
          loader: 'raw-loader',
        },
      },
      {
        test: /\.css$/,
        use: {
          loader: 'css-loader',
        },
      },
      { test: /\.(svg|png|jpg|jpeg|gif)$/, loader: 'file-loader', options: { name: 'img/icons/[name].[ext]' } },
      { test: /\.(woff|woff2|ttf|eot)$/, loader: 'file-loader', options: { name: 'fonts/[name].[ext]' } },
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
      title,
      description: tagline,
      keywords,
      template: path.resolve(__dirname, 'template/template.html'),
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
    new ManifestPlugin({
      seed: {
        'short_name': 'Sreeram',
        'name': 'Sreeram Padmanabhan',
        'start_url': '/',
        'background_color': '#ffffff',
        'display': 'standalone',
        'theme_color': 'orange',
      },
    }),
    new CopyWebpackPlugin([
      { from: 'webpack/template/favicon.png', to: 'favicon.png' },
    ]),
  ],
};

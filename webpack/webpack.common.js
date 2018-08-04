const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    polyfills: './src/web/polyfills.js',
    app: './src/web/index.js',
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
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sreeram Padmanabhan',
      template: path.resolve(__dirname, 'template.html'),
      excludeChunks: ['polyfills'],
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),
      exclude: [],
      verbose: false,
      dry: false,
    }),
  ],
};

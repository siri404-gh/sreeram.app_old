const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    host: 'localhost',
    port: 5000,
    hot: true,
    historyApiFallback: {
      index: '/',
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});

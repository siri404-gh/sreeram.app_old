const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const CompressionPlugin = require('compression-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  // devtool: 'source-map',
  plugins: [
    new Visualizer({
      filename: './bundle.html',
    }),
    new CompressionPlugin({
      test: /\.js/,
      cache: true,
      asset: '[path].gz[query]',
      exclude: /service-worker*|wb-manifest-*/,
      algorithm: 'gzip',
      minRatio: 0.8,
      deleteOriginalAssets: true,
    }),
  ],
});

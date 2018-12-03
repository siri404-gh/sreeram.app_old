const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const CompressionPlugin = require('compression-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  // devtool: 'source-map',
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      precacheManifestFilename: 'wb-manifest.[manifestHash].js',
    }),
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

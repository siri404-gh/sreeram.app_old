const merge = require('webpack-merge');
const WorkboxPlugin = require('workbox-webpack-plugin');
const commonConfig = require('./webpack.common');
const CompressionPlugin = require('compression-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new Visualizer({
      filename: './bundle.html',
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      precacheManifestFilename: 'wb-manifest.[manifestHash].js',
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

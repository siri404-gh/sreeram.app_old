const merge = require('webpack-merge');
const WorkboxPlugin = require('workbox-webpack-plugin');
const commonConfig = require('./webpack.common');
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
  ],
});

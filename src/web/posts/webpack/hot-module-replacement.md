# 4.9 Webpack Hot Module Replacement

#### Sep 2, 2018 by Sreeram Padmanabhan, Last updated on Sep 14, 2018

## Summary

We have seen how webpack-dev-server creates a local server to serve the bundled files. But, you needed to refresh the browser to see any update after a change in code. With Hot module replacement, webpack just injects updates in the code into the live app. No reloading of the browser is then required. Saves a great deal of time.

## Configure

Modify your `webpack.dev.js` to this:

## Code

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
        hot: true,
        port: 9000,
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
      ],
    });

Stop and start webpack-dev-server again.

## See in Action

When enabled, you can see the following in the browser console.

    [HMR] Waiting for update signal from WDS...
    [WDS] Hot Module Replacement enabled.

Make some changes to the code, save it and see it automatically update the live app instantly without a refresh and you can see the following in the console.

    [WDS] App updated. Recompiling...
    [WDS] App hot update...
    [HMR] Checking for updates on the server...
    [HMR] Updated modules:
    [HMR]  - ./src/web/posts/webpack/hot_module_relacement.md
    [HMR]  - ./src/web/posts sync recursive ^\.\/.*\.md$
    [HMR]  - ./src/web/components/Content/Content.js
    [HMR]  - ./src/web/components/App/App.js
    [HMR] App is up to date.

Also, if you see in the network tab, a hot-update file would have been fetched and injected.
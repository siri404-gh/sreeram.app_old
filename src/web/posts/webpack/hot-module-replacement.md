# Webpack Hot Module Replacement

#### Sep 2, 2018 by Sreeram Padmanabhan

## Summary

We have seen how webpack-dev-server creates a local server to serve the bundled files. But, you need to refresh the browser to see any update after a change in code. With Hot module replacement, webpack just injects updates in the code into the live app. No reloading of the browser is then required. Saves a great deal of time.

## Configure

Add this to your `webpack.dev.js`

## Code

    const webpack = require('webpack');
    ...
    devServer: {
      contentBase: path.join(__dirname, '../dist'),
      compress: true,
      port: 9000,
      hot: true,
    },
    ...
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],

Commit and push.

## See in Action
When enabled, you can see the following in the browser console.

    [HMR] Waiting for update signal from WDS...
    [WDS] Hot Module Replacement enabled.

Make some changes to the code, save it and see it automatically update the live app instantly and you can see the following in the console.

    [WDS] App updated. Recompiling...
    [WDS] App hot update...
    [HMR] Checking for updates on the server...
    [HMR] Updated modules:
    [HMR]  - ./src/web/posts/webpack/hot_module_relacement.md
    [HMR]  - ./src/web/posts sync recursive ^\.\/.*\.md$
    [HMR]  - ./src/web/components/Content/Content.js
    [HMR]  - ./src/web/components/App/App.js
    [HMR] App is up to date.

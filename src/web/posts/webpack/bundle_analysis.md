# Webpack Bundle Analysis

#### Sep 2, 2018 by Sreeram

## Summary

It is important to keep your bundle to a low size. If not minified, uglified and compressed, the bundled file can be of great size. This will have a huge impact on performance. Webpack bundle analyser is a plugin which will tell you what consumes all the size in the bundled file.

## Install

`npm install webpack-bundle-analyzer --save-dev`

## Configure

Add these lines to your `webpack.prod.js` in the `plugins` section.

## Code

    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

    plugins: [
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerMode: 'static',
        reportFilename: path.resolve(__dirname, `../dist/bundle.html`),
      }),
    ]

## Execute

You can see a file called `bundle.html` in the dist folder once the prod build has been successfully completed.

# Webpack Common Config

#### Sep 2, 2018 by Sreeram

## Summary

Now that we have the webpack dev and the webpack prod configurations, we have some duplicate code in either of them. We can move these to a file called webpack.common.js and include this during runtime. So when we run the dev buid, we run common + dev and when we run the prod build, we run common + prod.

## Install
`npm i --save-dev webpack-merge`


## Configure

Create a file called `webpack/webpack.common.js` at the root and move any common code to this file. Also, make changes to the dev config and the prod config to include this.

## webpack.common.js

    const path = require('path');
    const webpack = require('webpack');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
      entry: {
        app: './src/web/index.js',
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
        ],
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
        new HtmlWebpackPlugin({
          title: 'My Website,
        }),
      ],
    };

## webpack.dev.js
    const merge = require('webpack-merge');
    import path from 'path';

    module.exports = merge(commonConfig, {
      mode: 'development',
    });

## webpack.prod.js
    const merge = require('webpack-merge');
    import path from 'path';

    module.exports = merge(commonConfig, {
      mode: 'production',
    });

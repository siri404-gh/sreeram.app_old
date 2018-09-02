# HTML Webpack Plugin

#### Sep 2, 2018 by Sreeram

## Summary

This plugin generates a html file (preferably called as index.html) with a reference to the bundled js file.

## Install

`npm i --save-dev html-webpack-plugin`

## Configure

Add the following lines of code to the plugins section in both `webpack.dev.js` and `webpack.prod.js`. We will resolve this code duplication issue by creating a common file for both dev and prod builds later.

## Code for webpack.dev.js

    const HtmlWebpackPlugin = 
      require('html-webpack-plugin');

    new HtmlWebpackPlugin({
      title: 'My website'
    }),

## Execute
`webpack --env=dev --config=webpack/webpack.config.js`
You will see an index.html file generated along with the bundle files.

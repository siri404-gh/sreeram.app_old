# Webpack Dev Server

#### Sep 2, 2018 by Sreeram Padmanabhan

## Summary

This is a powerful tool which creates a development server with live reloading without having to start your own server. Webpack-dev-server takes care of it. Note that this is not to be confused with Hot Module replacement. Write the code, save it and refresh the browser to see the updated application. Use this in development mode only.

## Install

`npm install webpack-dev-server --save-dev`

## Configure

Add this to your webpack.dev.js

## Code

    devServer: {
      contentBase: path.join(__dirname, '../dist'),
      compress: true,
      port: 9000,
    },

## Execute
`webpack-dev-server --open --env=dev --config=webpack/webpack.config.js`

Commit and push.

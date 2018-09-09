# React Hot module replacement

#### Sep 1, 2018 by Sreeram Padmanabhan

## Summary

Tweak React components in real time.

## Install

`npm i --save react-hot-loader` 

## Code

Add this to your .babelrc

    {
      "plugins": ["react-hot-loader/babel"]
    }

Update the entry file in this path: `src/web/index.js` with the following code to mark it as hot exported.

    import React from 'react'
    import { hot } from 'react-hot-loader'

    const App = () => <div>Hello World!</div>

    export default hot(module)(App);

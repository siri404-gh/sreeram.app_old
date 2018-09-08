# React Hot module replacement

#### Sep 1, 2018 by Sreeram Padmanabhan

## Summary

Tweak React components in real time.

## Install

`npm i --save react-hot-loader` 

## Configure

Update the entry file in this path: `src/web/index.js` with the following code:

## Code

    import React, {Component} from 'react';
    import {render} from 'react-dom';
    import { hot } from 'react-hot-loader';

    class App extends Component {
      render() {
        return <h1>Hello, World</h1>;
      }
    }

    export default hot(module)(App);
    
    render(<App />, document.getElementById('root'));

Commit and push.

# Create an entry point

#### Sep 1, 2018 by Sreeram Padmanabhan

## Summary

This will be the first file with source code. When we package the application, we will use this as the main entry point. A bundler like webpack will start from here, create a dependency tree and package it.

## Install

`npm i --save react react-dom` 

## Configure

Create a file in this path: `src/web/index.js` with the following code:

## Code

    import React, {Component} from 'react';
    import {render} from 'react-dom';

    class App extends Component {
      render() {
        return <h1>Hello, World</h1>;
      }
    }
    
    render(<App />, document.getElementById('root'));

Commit and push.

## See in Action

[View in Stackblitz](https://stackblitz.com/edit/entry-point)

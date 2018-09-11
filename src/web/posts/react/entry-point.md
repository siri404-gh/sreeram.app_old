# Create an entry point

#### Sep 1, 2018 by Sreeram Padmanabhan

## Summary
In the previous 2 chapters, we saw how to setup your development environment and configure your editor for work. We also pushed the code into our repo. In this chapter, we will write our first line of the actual source code. Create a file called `src/web/index.js`. When we package the application, we will use this as the main entry point. A bundler like webpack will bundle the entire source code starting from here by creating a dependency tree, going inside each to extend the tree. We need to bundle the source code for many reasons. One of them is that we will be using the latest features of Javascript to write the code. But, not all browser vendors might not have implemented them. Or, people might be using an older version of the browser. Hence, it is important to convert it to ES5 which most browsers understand.

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

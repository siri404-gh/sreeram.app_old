# Create an entry point

#### Sep 1, 2018 by Sreeram

## Summary

This the first file with source code. When we package the application, we will use this as the main entry point.

## Steps

Create a file in this path: `src/web/index.js` with the following code:

    import React, {Component} from 'react';
    import {render} from 'react-dom';
    /**
    * General component description in JSDoc format. Markdown is *supported*.
    */
    export default class App extends Component {
      /**
      * Renders "Amazing div"!
      * @return {Component}
      */
      render() {
        return <h1>Hello, World</h1>;
      }
    }
    render(<App />, document.getElementById('root'));

## Github commit: 
https://github.com/sreerampr/sreeram.app/commit/54dd4cea08fe9ec8b078bd0ebc075f916a6d273e

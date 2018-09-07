# Create an entry point

#### Sep 1, 2018 by Sreeram Padmanabhan

## Summary

This the first file with source code. When we package the application, we will use this as the main entry point.

## Install

`npm i --save react react-dom` 

## Configure

Create a file in this path: `src/web/index.js` with the following code:

## Code

    import React, {Component} from 'react';
    import {render} from 'react-dom';

    /**
    * General component description 
    * in JSDoc format. 
    * Markdown is *supported*.
    */

    class App extends Component {
      /**
      * Renders "Amazing div"!
      * @return {Component}
      */
      render() {
        return <h1>Hello, World</h1>;
      }
    }

    export default App;
    
    render(
      <App />, 
      document.getElementById('root')
    );


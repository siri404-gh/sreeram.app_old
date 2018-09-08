# Webpack Dev Config

#### Sep 2, 2018 by Sreeram Padmanabhan

## Summary

Because browsers dont support the latest features of Javascript, we use babel to compile our JS to ES5 format. Now, Webpack is a packaging tool used to do that. It bundles your source code to create an output file. You need to specify the configuration in a file called `webpack.config.js`. You can also have multiple config files for different environments. For eg, `webpack.dev.js` for Development and `webpack.prod.js` for production. You just need to specify which environment to build for via command line. In this case, we have a `webpack.config.js` and a `webpack.dev.js` and we invoke it using `webpack --env=dev -c webpack/webpack.config.js`.

## Install

`npm i --save-dev webpack`

## Configure

Create a file called `webpack/webpack.config.js` and `webpack/webpack.dev.js` at the root with the following code.

## Code for webpack.config.js

    module.exports = env => 
      require(`./webpack.${env}.js`);


## Code for webpack.dev.js

    import path from 'path';
    
    module.exports = {
      entry: {
        app: './src/web/index.js',
      },
      output: {
        path: path.resolve(__dirname,'../dist'),
        filename: 'my-first-webpack.bundle.js',
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
      mode: 'development',
    };

## Execute
`webpack --env=dev --config=webpack/webpack.config.js`

## Concepts

### Entry

This is the entry file to tell webpack where to start the packaging from. In our case, its `src/web/index.js`. I have also set react as another entry point. More on this later.

### Output

This tells webpack where to output the end product. Also specified is the name of the file to be output as. So, all the code in our `src/web/index.js` will be output as `dist/my-first-webpack-bundle.js`. If you look at both the codes, they will look vastly different.

### Module

You need to tell webpack how to compile files. We specify this in the `module` section. In our config, we are telling webpack to compile all `.js` files using `babel-loader`.


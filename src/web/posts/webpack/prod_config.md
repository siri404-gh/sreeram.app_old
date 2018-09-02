# Webpack Prod Config

#### Sep 2, 2018 by Sreeram

## Summary

Now that we have seen how to setup the webpack dev config, lets setup the prod config. We need these 2 setups for many reasons. The dev config is used to bundle when you develop the app. The prod config is used to bundle the app when you deploy it to production. One for example, is that in dev config, you might have to have code minification disabled. Minification is where the code is minified and/or obfuscated into a non readable form by mangling, removing new line characters, comments etc. This helps a great deal when debugging issues. But in the prod config, you might need to have it enabled to reduce the file size of the shipped product.

## Steps

Create a file called `webpack/webpack.prod.js` at the root with the following code.

## Code for webpack.config.js

    module.exports = env => require(`./webpack.${env}.js`);


## Code for webpack.dev.js

    const path = require('path');

    module.exports = {
      entry: {
        app: './src/web/index.js',
      },
      output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
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
    };

## Concepts

### Entry

This is the entry file to tell webpack where to start the packaging from. In our case, its `src/web/index.js`. I have also set react as another entry point. More on this later.

### Output

This tells webpack where to output the end product. Also specified is the name of the file to be output as. So, all the code in our `src/web/index.js` will be output as `dist/bundle.js`. If you look at both the codes, they will look vastly different.

### Module

You need to tell webpack how to compile files. We specify this in the `module` section. In our config, we are telling webpack to compile all `.js` files using `babel-loader`.

## Github commit:

https://github.com/sreerampr/sreeram.app/commit/5e64b0fe058dd97fde3038940bf03b157deef5ec

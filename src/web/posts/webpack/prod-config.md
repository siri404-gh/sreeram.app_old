# 4.2 Webpack Prod Config

#### Sep 2, 2018 by Sreeram Padmanabhan, Last updated on Sep 14, 2018

## Summary

Now that we have seen how to setup the webpack dev config, lets setup the prod config. We need these 2 setups for many reasons. The dev config is used to bundle when you develop the app. The prod config is used to bundle the app when you deploy it to production. For example, in dev config, you might have to have code minification disabled. (Minification is where the code is minified and/or obfuscated into a non readable form by mangling, removing new line characters, comments etc.) This helps a great deal when debugging issues. But in the prod config, you might need to have it enabled to reduce the file size of the shipped product.

## Configure

Create a file called `webpack/webpack.prod.js` at the root with the following code.

## Code

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
      mode: 'production',
    };

## Execute
`./node_modules/.bin/webpack --env=prod --config=webpack/webpack.config.js`

or

`npx webpack --env=prod --config=webpack/webpack.config.js`

The output will look like this. Notice the build time, asset name and the asset size. Also notice the vast savings in the size of the bundled file.

![webpack prod output](/images/webpack_prod_output.png "webpack prod output")

## Concepts

### Entry

This is the entry file to tell webpack where to start the packaging from. In our case, its `src/web/index.js`. I have also set react as another entry point. More on this later.

### Output

This tells webpack where to output the end product. Also specified is the name of the file to be output as. So, all the code in our `src/web/index.js` will be output as `dist/bundle.js`. If you look at both the codes, they will look vastly different.If you look at both the codes, they will look vastly different. It will look something like this given below. Moreover, it will look vastly different from the dev output. This is because, when we specified `mode: production`, webpack packaged the minified version of packages.

![webpack prod code](/images/webpack_prod_code.png "webpack prod code")

### Module

You need to tell webpack how to compile files. We specify this in the `module` section. In our config, we are telling webpack to compile all `.js` files using `babel-loader`.

Commit and push.

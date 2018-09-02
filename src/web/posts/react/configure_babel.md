# Create an entry point

#### Sep 1, 2018 by Sreeram

## Summary

Not all browsers support the newer features of Javascript. So, if we are to use some of the latest features, we need to make sure that we convert them to browser readable form. Compilers like babel do just that.

## Steps

Create a file called `.babelrc` at the root with the following code.

## Code

    {
      "presets": ["env", "react"],
      "plugins": [
        "react-hot-loader/babel",
        "istanbul",
        "add-react-displayname",
        "transform-class-properties",
        "transform-object-rest-spread"
      ]
    }

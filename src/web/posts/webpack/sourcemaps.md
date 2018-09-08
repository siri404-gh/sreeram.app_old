# Soucemaps

#### Sep 2, 2018 by Sreeram Padmanabhan

## Summary

While debugging an error, because the bundled file is in a minified and mangled state, it becomes cumbursome to find which part of your code generated the error. In such a scenario, wouldnt it be nice to have a mapping of the bundled code and the actual source code? Thats exactly what soucemaps do. While bundling, webpack maintains a mapping of the generated bundle and the actual source code. 

## Configure

Add this to your webpack.dev.js and webpack.prod.js

## Code

    devtool: 'inline-source-map'

## See in Action
Open chrome console, go to the source tab and press ctrl(or cmd) + p and search for a source file.

Commit and push.

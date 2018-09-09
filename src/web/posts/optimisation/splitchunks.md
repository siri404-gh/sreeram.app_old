# Code splitting

Add this to webpack.common.js

    optimization: {
      splitChunks: {
        name(module) {
          return 'vendor'; // ...
        },
        chunks(chunk) {
          return chunk.name !== 'polyfills';
        },
      },
    },

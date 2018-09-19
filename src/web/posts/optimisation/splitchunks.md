# Code splitting

Add this to webpack.common.js

    optimization: {
      splitChunks: {
        // include all types of chunks
        chunks: 'all'
      }
    },

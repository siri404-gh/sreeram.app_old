module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.md$/,
        exclude: /node_modules/,
        use: {
          loader: 'raw-loader',
        },
      },
    ],
  },
  externals: {
    request: {
      commonjs: 'request',
      commonjs2: 'request',
    },
    os: {
      commonjs: 'os',
      commonjs2: 'os',
    },
    process: 'process',
  },
};

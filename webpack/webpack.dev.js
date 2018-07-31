import path from 'path';

module.exports = {
  entry: {
    app: './src/web/index.js',
    react: './node_modules/react/cjs/react.development.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
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

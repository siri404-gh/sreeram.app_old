const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    polyfills: './src/web/polyfills.js',
    app: './src/web/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
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
  optimization: {
    splitChunks: {
      name(module) {
        // generate a chunk name...
        return 'vendor'; // ...
      },
      chunks(chunk) {
        // exclude `my-excluded-chunk`
        return chunk.name !== 'polyfills';
      },
    },
  },
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: path.resolve(__dirname, `../dist/bundle.html`),
    }),
    new HtmlWebpackPlugin({
      title: 'Sreeram Padmanabhan',
      template: path.resolve(__dirname, 'template.html'),
      chunks: ['app'],
    }),
  ],
};

module.exports = {
  components: 'src/web/components/**/[A-Z]*.js',
  webpackConfig: Object.assign({}, require('./webpack/webpack.prod.js'), {
    /* Custom config options */
    node: {
      net: 'empty',
      tls: 'empty',
      dns: 'empty',
      fs: 'empty',
    },
    plugins: [],
  }),
};

export const components = 'src/web/components/**/[A-Z]*.js';
export const webpackConfig = Object.assign({}, require('./webpack/webpack.config.js'), {
  /* Custom config options */
});

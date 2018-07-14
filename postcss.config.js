module.exports = {
  ident: 'postcss',
  plugins: [
    require('autoprefixer')({ /* eslint-disable-line */
      flexbox: 'no-2009',
    }),
    require('postcss-flexbugs-fixes'), /* eslint-disable-line */
  ],
};

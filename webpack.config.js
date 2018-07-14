const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const isDocs = process.env.DOCS;

  return ({
    entry: {
      bundle: './src/index.js',
    },
    output: {
      path: path.resolve(__dirname, isDocs ? 'docs' : 'dist'),
      publicPath: isDocs ? '' : '/',
      filename: 'assets/js/[name].[hash:8].js',
    },
    module: {
      rules: [
        {
          oneOf: [
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'assets/media/[name].[hash:8].[ext]',
              },
            },
            {
              test: /\.js|jsx$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: isProduction,
                  compact: isProduction,
                },
              },
            },
            {
              test: /\.s|css$/,
              exclude: /node_modules/,
              use: [
                isProduction
                  ? {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: '../../',
                    },
                  }
                  : 'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 2,
                    sourceMap: true,
                  },
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: true,
                  },
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true,
                  },
                },
              ],
            },
            {
              exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
              loader: 'file-loader',
              options: {
                name: 'assets/media/[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: './src/templates/index.html',
        // <title>
        title: 'Pizza Builder',
        // <meta name="description">
        description: 'Pizza builder application built with Vanilla JavaScript',
        minify: {
          removeComments: isProduction,
          collapseWhitespace: isProduction,
          removeRedundantAttributes: isProduction,
          useShortDoctype: isProduction,
          removeEmptyAttributes: isProduction,
          removeStyleLinkTypeAttributes: isProduction,
          keepClosingSlash: isProduction,
          minifyJS: isProduction,
          minifyCSS: isProduction,
          minifyURLs: isProduction,
        },
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/css/styles.[contenthash:8].css',
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          map: { inline: false, annotation: true },
        },
      }),
    ],
    devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      host: '0.0.0.0',
      historyApiFallback: true,
      compress: true,
      stats: {
        all: false,
        warnings: true,
        errors: true,
        errorDetails: true,
      },
    },
  });
};

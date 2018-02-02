const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.base.config.js');

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.[chunkhash].js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new UglifyJsPlugin({
      sourceMap: false,
      uglifyOptions: {
        compress: true,
        mangle: true,
        ecma: 6,
      },
    }),
  ],
});

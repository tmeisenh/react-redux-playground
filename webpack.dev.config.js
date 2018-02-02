const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

module.exports = merge(baseConfig, {
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    contentBase: './src',
    historyApiFallback: true,
  },
});

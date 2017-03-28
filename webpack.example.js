const config = require('./webpack.base.config');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

config.entry = './examples/main.js';
config.output = {
  path: path.resolve(__dirname, './dist'),
  publicPath: '',
  filename: '[name]_[hash].js',
};

config.plugins = [
  new HtmlWebpackPlugin({
    filename: './index.html',
    template: './index.html',
    inject: true,
  }),
];

config.resolve = {
  alias: {
    vue$: 'vue/dist/vue.esm.js',
  },
};

module.exports = config;

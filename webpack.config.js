const webpack = require('webpack');
const config = require('./webpack.base.config');
const path = require('path');

config.entry = './src/index.js';
config.output = {
  path: path.resolve('dist'),
  filename: 'vue-loops.min.js',
  library: 'vue-loops',
  libraryTarget: 'umd',
};
config.externals = {
  vue: 'Vue',
  d3: 'd3',
};

config.plugins = (config.plugins || []).concat([
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    compress: {
      warnings: false,
    },
  }),
]);
module.exports = config;

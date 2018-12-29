const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    javascript: ['babel-polyfill', './src/index.js'],
  },
  output: {
    path: __dirname + '/../build',
    filename: 'static/js/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-object-rest-spread'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.svg$/,
        loader: 'file',
        query: {
          name: '/static/media/[name].[hash:8].[ext]'
        }
      },
    ],
  },
};

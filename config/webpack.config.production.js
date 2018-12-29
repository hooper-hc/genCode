const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    javascript: ['babel-polyfill', './client/index.js'],
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /.js?$/,
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
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
  ],
};

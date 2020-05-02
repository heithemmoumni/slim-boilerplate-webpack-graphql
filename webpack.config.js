const webpack = require('webpack');
const path = require('path');

const config = {
  entry: path.resolve(__dirname,'resources/assets/js/app.js'),
  output: {
    path: path.resolve(__dirname, 'resources/assets/js/app.js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};

module.exports = config;

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const htmlConfig = {
  template: './src/index.html',
};

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'path'),
    publicPath: '/',
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/},
      {test: /\.(scss|css)$/, use: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.(ttf|otf|eot|woff|woff2)$/, loader: 'url-loader'},
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(htmlConfig),
  ],
};

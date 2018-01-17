const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');


const htmlConfig = {
  template: './src/index.html',
};

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/',
  },

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'},
      {test: /\.(scss|css)$/, use: ['style-loader', 'css-loader', {loader: 'postcss-loader', options: {plugins: () => [autoprefixer()]}}, 'sass-loader']},
      {test: /\.(ttf|otf|eot|woff|woff2)$/, loader: 'url-loader'},
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(htmlConfig),
  ],
};

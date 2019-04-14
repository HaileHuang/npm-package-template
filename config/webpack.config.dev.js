// react-cat/webpack.config.js
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  devServer: {
    host: '0.0.0.0',
    port: 5000
  },

  entry: {
    main: path.resolve(__dirname, '../src/main.js')
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader?presets[]=env&presets[]=react', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['lib']),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    })
  ]
}

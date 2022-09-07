const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProvidePlugin } = require('webpack');
const jquery = require('jquery');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
     
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png|gif|svg|webp)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
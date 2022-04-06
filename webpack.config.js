const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.resolve(__dirname, './src/index.js' ),
    output: {
      path: path.resolve(__dirname, './dist' ),
      filename: 'bundle.js'
    },
    devServer: {
      static: path.resolve(__dirname, './dist' )
    },
    module:{
        rules:[
            {
              test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },
    plugins:[
      new HtmlWebpackPlugin({
       template: './src/index.html',
        filename: 'index.html',
        inject: 'body',
      }),
    ]
  };